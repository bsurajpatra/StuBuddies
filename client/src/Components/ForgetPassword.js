import React, { useState, useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined'; 
import Typography from '@mui/material/Typography';
import BackgroundImage from './Background.png'; // Correct path to the Background image

export default function ForgotPassword() {
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(3);
  const [timerVisible, setTimerVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (timerVisible && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0) {
      navigate('/');
    }
  }, [timer, timerVisible, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage('A link has been successfully sent to your email. Click on the link to reset your password.');
    setTimerVisible(true);
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
          backgroundImage: `url(${BackgroundImage})`, // Corrected the URL syntax
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <BookOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: '#000' }}>
            Forgot Password
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ input: { color: '#000' }, label: { color: '#000' }, bgcolor: '#fff' }} 
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
            {message && (
              <Box 
                sx={{ 
                  mt: 2, 
                  p: 2, 
                  borderRadius: 1, 
                  bgcolor: 'green', 
                  color: '#fff' 
                }}
              >
                <Typography sx={{ color: '#fff' }}>{message}</Typography>
              </Box>
            )}
            {timerVisible && (
              <Typography sx={{ color: '#000', mt: 1 }}>
                Redirecting in {timer} seconds...
              </Typography>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/" variant="body2" sx={{ color: '#000' }}>
                  Remembered your password? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
