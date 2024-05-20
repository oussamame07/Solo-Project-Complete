import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import Nav from './Nav';

const defaultTheme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Account() {
  const [profile, setProfile] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: ''
  });

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/profile/${id}`)
      .then((res) => {
        setProfile(res.data);
        setFormData({
          firstName: res.data.firstName || '',
          lastName: res.data.lastName || '',
          email: res.data.email || '',
          address: res.data.address || '',
          city: res.data.city || ''
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const cityOptions = [
    { label: 'Tunis', id: 1 },
    { label: 'Beja', id: 2 },
    { label: 'Ariana', id: 3 },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://127.0.0.1:5000/api/edit/${id}`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme} >
        <Nav/>
      <Container component="main" maxWidth=""
                  sx={{
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: 'url(https://wallpapercave.com/wp/wp7452142.png)',
                    backgroundSize: '200vw',
                    backgroundPosition: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'auto',
                    pt: 4,
                    borderRadius: '80px', // Optional: to add rounded corners
          boxShadow: 8, 
                    
                  }}
                  >
        <CssBaseline />
        <Box
          sx={{
            width:800,
            boxShadow: '80px',
            backgroundColor:'linen',
            borderRadius: '80px',
            height:1000,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={cityOptions}
                  sx={{ width: 300 }}
                  value={{ label: formData.city }}
                  onChange={(event, newValue) => {
                    setFormData({ ...formData, city: newValue.label });
                  }}
                  renderInput={(params) => <TextField {...params} label="City" />}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update Profile
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
