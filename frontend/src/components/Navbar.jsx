import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment } from '@mui/material'; 
import { Link } from 'react-router-dom'; 
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
  return (
    <AppBar position="static" color="transparent" width="100%">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>My-App</Link>
        </Typography>

        <div className="hidden md:flex space-x-4 font-bold">
          <Button color="inherit" component={Link} to="/booking">
            Appointment
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
          <Button color="inherit" component={Link} to="/patients/dashboard">
            Patient
          </Button>
          <Button color="inherit" component={Link} to="/doctors/dashboard">
            Doctor
          </Button>
          <Button color="inherit" component={Link} to="/login">
            <LoginIcon/>
          </Button>
        </div>
        </Toolbar>
    </AppBar>
  );
};

export default Navbar;
