import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, CssBaseline, TextField, Typography, Link, Box, Grid } from '@mui/material';
import logo from './images/logo-white.png'; // Your logo
import bg from './images/signbg.png'; // Your background image
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if email and password are not empty
    if (!email.trim() || !password.trim()) {
      alert('Please fill in both email and password.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // If all validations pass
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/dashboard');
  };

  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          backgroundImage: `url(${bg})`, // Add background image
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CssBaseline />
          <Box
            sx={{
             
              padding: 4,
              color: '#fff', // Set font color to white
              width: '100%',
              maxWidth: 400,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img src={logo} alt="Company Logo" style={{ maxWidth: '200px', marginBottom: '20px' }} />
             
            </Box>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 3 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                sx={{
                  input: { color: '#fff' }, // Input text color
                  '& .MuiInputLabel-root': { color: '#fff' }, // Label text color
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff', // Border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#aaa', // Hover border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff', // Focused border color
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                sx={{
                  input: { color: '#fff' }, // Input text color
                  '& .MuiInputLabel-root': { color: '#fff' }, // Label text color
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#fff', // Border color
                    },
                    '&:hover fieldset': {
                      borderColor: '#aaa', // Hover border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#fff', // Focused border color
                    },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                  color: '#fff',
                  '&:hover': {
                    background: 'linear-gradient(to right, #5c0fba, #2068e5)',
                  },
                }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#fff' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: '#fff' }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </main>
    </ThemeProvider>
  );
};

export default Signin;
