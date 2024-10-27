import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import BackgroundImage from './Background.png';

export default function SignUpSide() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Sign-Up handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const age = event.target.age.value;
    const gender = event.target.gender.value;
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phoneNumber.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (!termsAccepted) {
      alert("You must accept the terms and conditions to sign up.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, age, gender, username, email, phoneNumber, password, termsAccepted }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userEmail', email);
        navigate('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh', backgroundColor: '#fdf5e2' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#fdf5e2' }}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <BookOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  select
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                >
                  {[...Array(100).keys()].slice(14).map(age => (
                    <MenuItem key={age} value={age}>
                      {age}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  select
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Preferred not to say">Preferred not to say</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="tel"
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      value="terms"
                      sx={{ color: 'black' }}
                    />
                  }
                  label={
                    <Typography sx={{ color: 'black' }}>
                      I agree to the Terms and Conditions.
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'primary.main', '&:hover': { backgroundColor: '#115293' } }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/" variant="body2" sx={{ color: 'black' }}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}