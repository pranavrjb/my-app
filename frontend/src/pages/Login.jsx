import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, InputAdornment } from '@mui/material';
import { Email as EmailIcon, Lock as LockIcon } from '@mui/icons-material';
import API from '../api';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const { data } = await API.post('/auth/login', formData);
            console.log('Login Successful:', data);
        } catch (error) {
            if (error.response) {
                console.error('Error Response:', error.response.data);
            } else {
                console.error('Login Error:', error.message);
            }
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
                            placeholder="example@domain.com"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="********"
                            value={formData.password}
                            onChange={handleChange}
                            fullWidth
                            required
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LockIcon />
                                    </InputAdornment>
                                ),
                            }}
                            inputProps={{ minLength: 8 }}
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
