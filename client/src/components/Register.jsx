import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';

export default function Register(props) {
    const [register, setRegister] = useState({
        lname: '',
        fname: '',
        email: '',
        adress:'',
        city:'',
        password: '',
        ConfirmPassword: '',
    });
    const city = [
        {label:'tunis',id:1},
        {label:'beja',id:2},
        {label:'araian',id:3},
    ]
    const {users,setUsers}=props;
    const Navigate = useNavigate();

    const handleOnChange = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:5000/api/register', {
            firstName: register.fname,
            lastName: register.lname,
            email: register.email,
            adress:register.adress,
            // city:register.city,
            password: register.password,
            confirmPassword: register.ConfirmPassword,
        })
            .then((res) => {
                console.log(res.data);
                setRegister({
                    lname: '',
                    fname: '',
                    email: '',
                    password: '',
                    ConfirmPassword: '',
                });
                Navigate("/login");
            })
            // setUsers([...users,res.data])
            .catch((err) => {
                console.log(err.response);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {/* <label htmlFor="lname">Last Name</label> */}
                    <TextField id="outlined-basic" label="Outlined" variant="outlined"  name="lname" onChange={handleOnChange} value={register.lname} />
                </div>
                <div>
                    {/* <label htmlFor="fname">First Name</label> */}
                    <TextField  id="outlined-basic" label="Outlined" variant="outlined"name="fname" onChange={handleOnChange} value={register.fname} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={handleOnChange} value={register.email} />
                </div>
                <div>
                    <label htmlFor="adress">Adress</label>
                    <input type="text" name="adress" onChange={handleOnChange} value={register.adress} />
                </div>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={city}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="State" />}
    />
                <div>
                    
                    {/* <label htmlFor="password">Password</label> */}
                    <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"name="password" onChange={handleOnChange} value={register.password} />
                </div>
                <div>
                    {/* <label htmlFor='ConfirmPassword'>Confirm Password</label> */}
                    <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard"name="ConfirmPassword" onChange={handleOnChange} value={register.ConfirmPassword} />
                </div>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}
