import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';

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
            const res = await axios.post('http://localhost:3000/appointments/book', formData);
            alert(res.data.message);
        } catch (error) {
            console.error('Error booking appointment:', error);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <Typography variant="h4" align="center" color="primary" gutterBottom>
                Book an Appointment
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Patient ID"
                    name="patientId"
                    value={formData.patientId}
                    onChange={handleChange}
                    fullWidth
                    className="mb-4"
                    required
                />
                <TextField
                    label="Doctor ID"
                    name="doctorId"
                    value={formData.doctorId}
                    onChange={handleChange}
                    fullWidth
                    className="mb-4"
                    required
                />
                <TextField
                    label="Date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    fullWidth
                    className="mb-4"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <TextField
                    label="Time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    fullWidth
                    className="mb-4"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    required
                />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    className="mt-4"
                >
                    Book Appointment
                </Button>
            </form>
        </div>
    );
};

export default BookAppointment;
