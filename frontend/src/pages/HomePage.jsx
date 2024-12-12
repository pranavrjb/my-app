import React, { useState } from 'react';
import { TextField, Typography, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

const HomePage = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchClick = () => {
        console.log('Search icon clicked! Search Term:', searchTerm);
    };

    return (
        <div className="bg-neutral-100 min-h-screen flex flex-col flex-start items-center pt-20">
            <Typography variant="h2" color="primary" className="mb-4 pt-6 font-bold">
                LOGO
            </Typography>
            <TextField
                label="Search by name, specialization, or location"
                variant="standard"
                style={{ width: '70%' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon
                                style={{ cursor: 'pointer'}}
                                onClick={handleSearchClick}
                            />
                        </InputAdornment>
                    ),
                }}
            />
            <Typography variant="body1" className="text-center mb-6 pb-4 pt-6">
                Book appointments with trusted doctors in your area.
            </Typography>
            <Button variant="contained" color="primary" size="large" href="/booking">
                Get Started
            </Button>
        </div>
    );
};

export default HomePage;
