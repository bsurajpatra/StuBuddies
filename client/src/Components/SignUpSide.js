import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  MenuItem,
  Alert,
  CircularProgress
} from '@mui/material';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import BackgroundImage from './Background.png';

export default function SignUpSide() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});

  // Validation functions
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhoneNumber = (phone) => /^\+?[\d\s-]{10,}$/.test(phone);
  const validatePassword = (password) => password.length >= 6;

  const validateForm = () => {
    const errors = {};
    const { firstName, lastName, age, gender, username, email, phoneNumber, password, confirmPassword } = formData;

    if (!firstName) errors.firstName = 'First name is required';
    if (!lastName) errors.lastName = 'Last name is required';
    if (!age) errors.age = 'Age is required';
    if (!gender) errors.gender = 'Gender is required';
    if (!username || username.length < 3) errors.username = 'Username must be at least 3 characters';
    if (!email || !validateEmail(email)) errors.email = 'Valid email is required';
    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) errors.phoneNumber = 'Valid phone number is required';
    if (!password || !validatePassword(password)) errors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';

    return errors;
  };

  // Sign-Up handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');
    setFormErrors({});

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!termsAccepted) {
      setError("You must accept the terms and conditions to sign up.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, termsAccepted }),
        credentials: 'include'
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Registration successful! Redirecting...');
        localStorage.setItem('userEmail', formData.email);
        setTimeout(() => {
          navigate('/dashboard');
          setFormData({ // Reset the form data
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            username: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: ''
          });
        }, 1500);
      } else {
        setError(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
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
          <Typography component="h1" variant="h5" sx={{ color: 'black', mb: 2 }}>
            Sign up
          </Typography>

          {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}
          {success && <Alert severity="success" sx={{ width: '100%', mb: 2 }}>{success}</Alert>}

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              {['firstName', 'lastName', 'username', 'email', 'phoneNumber', 'password', 'confirmPassword'].map((field, index) => (
                <Grid item xs={12} sm={index < 2 ? 6 : 12} key={field}>
                  <TextField
                    error={!!formErrors[field]}
                    helperText={formErrors[field]}
                    required
                    fullWidth
                    id={field}
                    label={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
                    name={field}
                    autoComplete={field}
                    type={field.includes('password') ? 'password' : 'text'}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                  />
                </Grid>
              ))}
              <Grid item xs={12}>
                <TextField
                  error={!!formErrors.age}
                  helperText={formErrors.age}
                  required
                  fullWidth
                  id="age"
                  label="Age"
                  name="age"
                  select
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
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
                  error={!!formErrors.gender}
                  helperText={formErrors.gender}
                  required
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  select
                  value={formData.gender}
                  onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                  sx={{ input: { color: 'black' }, label: { color: 'black' }, bgcolor: '#fff' }}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Preferred not to say">Preferred not to say</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      value="terms"
                      color="primary"
                      sx={{ color: 'black' }}
                    />
                  }
                  label={
                    <Typography sx={{ color: 'black' }}>
                      I agree to the Terms and Conditions
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: '#f40808',
                '&:hover': { bgcolor: '#f40808' },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/signin" variant="body2" sx={{ color: 'black' }}>
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
