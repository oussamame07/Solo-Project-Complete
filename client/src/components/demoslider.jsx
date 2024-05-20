import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper, Typography, Button } from '@mui/material';
import Nav from './Nav'

export default function AllOrders() {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    axios.get('http://localhost:5000/api/all')
      .then(res => {
        setAllOrders(res.data);
      })
      .catch(err => console.error('Error fetching orders:', err));
  };

  const deleteOrder = (orderId) => {
    axios.delete(`http://localhost:5000/api/order/${orderId}`)
      .then(() => {
        fetchOrders(); // Refresh orders after deletion
      })
      .catch(err => console.error('Error deleting order:', err));
  };

  return (
    <div>
        <Nav/>

    
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {allOrders.map((order, index) => (
            <TableRow key={order._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.Toppings}</TableCell>
              {/* <TableCell>
                {order.items && order.items.length > 0 ? (
                  order.items.map((item, i) => (
                    <Typography key={i}>{`${item.name} - $${item.price} - Qty: ${item.quantity}`}</Typography>
                  ))
                ) : (
                  <Typography>No items</Typography>
                )}
              </TableCell> */}
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Link to={`/order/${order._id}`}>
                  <Button variant="contained">View</Button>
                </Link>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="secondary" onClick={() => deleteOrder(order._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
