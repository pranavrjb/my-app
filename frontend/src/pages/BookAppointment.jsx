import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import API from '../api';
import { ControlCameraSharp } from '@mui/icons-material';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        doctorId: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {res} = await API.post('/appointments/book', formData);
            console.log('Form Data:',formData)
            // alert(res.data.message);
        } catch (error) {
            if(error.response){
                console.log('Error Response:', error.response.data);
            }else{
                console.log('Booking Error!',error)
            }
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <Typography variant="h4" align="center" color="primary" fontWeight={700} gutterBottom>
                Book an Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}> {/* Add Grid container with spacing */}
                    <Grid item xs={12}>
                        <TextField
                            label="Patient ID"
                            name="patientId"
                            value={formData.patientId}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Doctor ID"
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleChange}
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Time"
                            name="time"
                            type="time"
                            value={formData.time}
                            onChange={handleChange}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Book Appointment
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};

export default BookAppointment;
