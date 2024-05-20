import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Nav from './Nav';
import MediaCard from './card';
import CssBaseline from '@mui/material/CssBaseline';

import {
    Typography,
    Container,
    Grid,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
    CardContent,
    Checkbox,
    FormControlLabel,
    Button,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TextField
} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';



const Home = (props) => {
    const [profile, setProfile] = useState({});
    const { id } = useParams();
    const { onepage, setOnepage } = props;

    useEffect(() => {
        axios.get(`http://localhost:5000/api/profile/${id}`)
            .then((res) => {
                console.log(res.data);
                setProfile(res.data);
                // setOnepage([...onepage, res.data]);
            })
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <React.Fragment>
                  <CssBaseline />
            <Nav />
            <Container maxWidth="la">
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            
                <Card >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            User Profile
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            Last Name: {profile.lastName}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            First Name: {profile.firstName}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            City: {profile.city}
                        </Typography>
                    </CardContent>
                    <CardContent>
                    <MediaCard/>




                    </CardContent>
                </Card>
                

            
            {/* <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}> */}
                {/* <MediaCard/> */}

            {/* </div> */}
            </Box>
  
        </Container>
        </React.Fragment>

    );
};

export default Home;
