import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';  // Import MUI icons
import API from '../api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/login', formData);
            console.log('Login Successful', data);
        } catch (error) {
            console.log('Login error!', error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
                    Login
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            placeholder='example@domain.com'
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <EmailIcon position="start" />,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder='********'
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: <LockIcon position="start" />,
                            }}
                            inputProps={{ minLength: 8 }}  // Minimum password length
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Log In
                        </Button>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="body2" align="center">
                            Don't have an account?{' '}
                            <a href="/signup" style={{ color: '#1976d2', textDecoration: 'none' }}>
                                Sign Up
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default Login;
