import * as React from 'react';
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
import UserPool from '../../UserPool';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { useNavigate } from 'react-router-dom';
import Amplify, { Auth } from 'aws-amplify';
import { apiURL, User } from '../../Configs/config'
import axios from 'axios';
import { toast } from 'react-toastify';

const theme = createTheme();

export default function SignUp() {

  const navigate = useNavigate();

  const createSubscriptionAPI = 'https://dec7ccapye.execute-api.us-east-1.amazonaws.com/prod/email/create-subscription';

  // const notify = (type, msg) => {
  //   if (type === 'success') {
  //     toast.success(
  //       msg,
  //       { position: toast.POSITION.TOP_RIGHT }
  //     );

  //   } else if (type === 'error') {
  //     toast.error(
  //       msg,
  //       { position: toast.POSITION.TOP_RIGHT }
  //     );

  //   }
  // };

  const handleSubmit = (event) => {

    console.log("Function called")

    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let email = data.get('email')
    let password = data.get('password')
    let name = data.get('name')
    const address = [];

    let url = "http://44.203.147.72:5000/add";

    axios.post(url, {
      email: email,
      name: name,
      addr : address,
      pwd:password
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}