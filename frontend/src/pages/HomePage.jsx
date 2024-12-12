import React from 'react';
import { Button, Typography } from '@mui/material';

const HomePage = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
            <Typography variant="h3" color="primary" className="mb-4">
                Welcome to My-App
            </Typography>
            <Typography variant="body1" className="text-center mb-6">
                Book appointments with trusted doctors in your area.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/booking">
                Get Started
            </Button>
        </div>
    );
};

export default HomePage;
