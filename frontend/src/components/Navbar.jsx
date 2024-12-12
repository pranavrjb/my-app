import React from 'react';
import { AppBar, Toolbar, Typography, Button, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';  
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" sx={{ p: 1 }}>
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>My-App</Link>
        </Typography>

        <div className="hidden md:flex space-x-4 font-bold">
          <Button color="inherit" component={Link} to="/booking">
            Appointment
          </Button>
          <Button color="inherit" component={Link} to="/patients/dashboard">
            Patient
          </Button>
          <Button color="inherit" component={Link} to="/doctors/dashboard">
            Doctor
          </Button>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          {/* <Button color="inherit" component={Link} to="/company">
            Company Registration
          </Button> */}
        </div>

        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ backgroundColor: 'white', borderRadius: 1, ml: 2 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
