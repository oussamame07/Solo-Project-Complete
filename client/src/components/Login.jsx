import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function Login(props) {
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });
    const {users,setUsers}=props;

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:5000/api/login', {
            email: login.email,
            password: login.password
        }, { withCredentials: true })
            .then(res => {
                console.log('Response data:', res.data);  // Log the response data to check its structure

                const id = res.data.id;

                if (id) {
                    alert('Login successful');
                    navigate(`/home/${id}`);
                } else {
                    alert('Login failed. User ID not found.');
                }
            })
            // setLogin(res.data.user)
            // setUsers([...users,res.data])
            .catch(err => {
                console.error('Error during login:', err);
                alert('Login failed. Please try again.');
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={handleOnChange} name="email" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={handleOnChange} name="password" required />
                </div>
                <div>
                    <Button type="submit" variant="contained">Login</Button>
                </div>
            </form>
        </div>
    );
}
