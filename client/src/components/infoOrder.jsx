import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Nav from './Nav';
import Home from './home'

const InfoOrder = (props) => {
    const [infoOrders, setInfoOrders] = useState({});
    const { user,setUser } = useState([])


    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/order/${id}`)
            .then((res) => {
                console.log (res.data);
                setInfoOrders(res.data);
            })
            .catch((err) => console.log(err));
            // axios.get(`http://localhost:5000/api/profile/${id}`)
            // .then((res) => {
            //     console.log (res.data);
            //     setUser(res.data);
            // })
            // .catch((err) => console.log(err));    
    }, [id]);
    

    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div>
                <h1>Pizza PETE'S</h1>
            </div>

            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th >Method</th>
                            <th>Size</th>
                            <th>Crust</th>
                            <th>Toppings</th>
                            <th>Qty</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >{infoOrders.Method}</td>
                            <td>{infoOrders.Size}</td>
                            <td>{infoOrders.Crust}</td>
                            <td>{infoOrders.Toppings}</td>
                            <td>{infoOrders.Qty}</td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InfoOrder;
