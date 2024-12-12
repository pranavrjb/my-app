import React, { useState } from 'react'
import { TextField, Button, Typography, Grid, Snackbar, Alert } from '@mui/material'
import API from '../api'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarStrict, setSnackbarStrict] = useState('success');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { res } = await API.post('/contacts', formData);
            setSnackbarMessage('Your Message has been sent successfully!');
            setSnackbarStrict('success')
            setSnackbarOpen('true')
            setFormData({ name: '', email: '', phone: '', message: '' })
        } catch (error) {
            setSnackbarMessage('Failed to sent Message! Please try again.')
            setSnackbarStrict('error');
            setSnackbarOpen('true')
        }
    }

    const handleCloseSnackbar = () => {
        setSnackbarOpen('false')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
                <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
                    Contact Us
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            required
                            inputProps={{ maxLength: 10, pattern: '[0-9]{10}', }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            fullWidth
                            multiline
                            rows={4}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Submit
                        </Button>
                    </Grid>
                </Grid>

                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarStrict} variant="filled">
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </form>
        </div>
    )
}

export default Contact
