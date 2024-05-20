import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from './Nav'
import {
    Typography,
    Container,
    Grid,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField
} from '@mui/material';

export default function Order() {
    const [newOrder, setNewOrder] = useState({
        method: '',
        size: '',
        crust: '',
        qty: '',
        toppings: [],

    });

    const { id } = useParams();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        if (type === 'checkbox') {
            if (checked) {
                setNewOrder({ ...newOrder, toppings: [...newOrder.toppings, value] });
            } else {
                setNewOrder({ ...newOrder, toppings: newOrder.toppings.filter(topping => topping !== value) });
            }
        } else {
            setNewOrder({ ...newOrder, [name]: value });
        }
    };

    // const handleItemChange = (e) => {
    //     const { name, value } = e.target;
    //     setNewOrder({ ...newOrder, [name]: parseInt(value) || 0 });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const toppingsString = newOrder.toppings.join(',');
        // const totalItems = newOrder.pizzas + newOrder.drinks + newOrder.desserts;
        
        axios.post('http://localhost:5000/api/new', {
            Method: newOrder.method,
            Size: newOrder.size,
            Crust: newOrder.crust,
            Qty: newOrder.qty,
            Toppings: toppingsString,
        })
        .then((res) => {
            console.log('Response data:', res.data);
            navigate(`/allorder/${id}`);
        })
        .catch(err => {
            console.log(err.response.data.errors);
        });
    };

    return (
        <div>
            <Nav/>

        
        <Container maxWidth="sm">
            <Paper elevation={3} className="order-form">
                <Typography variant="h4" gutterBottom>
                    CRAFT-A-PIZZA
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="method-label">Method</InputLabel>
                                <Select
                                    labelId="method-label"
                                    id="method"
                                    name="method"
                                    value={newOrder.method}
                                    onChange={handleChange}
                                    label="Method"
                                >
                                    <MenuItem value="carryOut">CarryOut</MenuItem>
                                    <MenuItem value="favorite">Favorite</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="size-label">Size</InputLabel>
                                <Select
                                    labelId="size-label"
                                    id="size"
                                    name="size"
                                    value={newOrder.size}
                                    onChange={handleChange}
                                    label="Size"
                                >
                                    <MenuItem value="large">Large</MenuItem>
                                    <MenuItem value="medium">Medium</MenuItem>
                                    <MenuItem value="small">Small</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="crust-label">Crust</InputLabel>
                                <Select
                                    labelId="crust-label"
                                    id="crust"
                                    name="crust"
                                    value={newOrder.crust}
                                    onChange={handleChange}
                                    label="Crust"
                                >
                                    <MenuItem value="crust">Thin Crust</MenuItem>
                                    <MenuItem value="thick">Thick Crust</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="qty-label">Qty</InputLabel>
                                <Select
                                    labelId="qty-label"
                                    id="qty"
                                    name="qty"
                                    value={newOrder.qty}
                                    onChange={handleChange}
                                    label="Qty"
                                >
                                    <MenuItem value="1">1</MenuItem>
                                    <MenuItem value="2">2</MenuItem>
                                    <MenuItem value="3">3</MenuItem>
                                    <MenuItem value="4">4</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="h6">Toppings</Typography>
                            <Table size="small">
                                <TableBody>
                                    <TableRow>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox color="primary" name="toppings" value="Pepperoni" onChange={handleChange} />}
                                                label="Pepperoni"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox color="primary" name="toppings" value="Neptune" onChange={handleChange} />}
                                                label="Neptune"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox color="primary" name="toppings" value="Cheesesticks" onChange={handleChange} />}
                                                label="Cheesesticks"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <FormControlLabel
                                                control={<Checkbox color="primary" name="toppings" value="Hawaiian" onChange={handleChange} />}
                                                label="Hawaiian"
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Add to Order
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
        </div>
    );
}
