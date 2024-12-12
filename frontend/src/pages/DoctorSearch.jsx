import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Card, CardContent, Typography, Button, Grid } from '@mui/material';

const DoctorSearch = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await axios.get('http://localhost:3001/doctors');
                setDoctors(res.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        fetchDoctors();
    }, []);

    const filteredDoctors = doctors.filter(
        (doctor) =>
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
            doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <Typography variant="h4" align="center" color="primary" gutterBottom>
                Find Your Doctor
            </Typography>
            <TextField
                label="Search by name, specialization, or location"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-6"
            />
            <Grid container spacing={4}>
                {filteredDoctors.map((doctor) => (
                    <Grid item key={doctor._id} xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="primary">
                                    Dr. {doctor.name}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Specialization: {doctor.specialization}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Location: {doctor.location}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="mt-4"
                                    href={`/book-appointment/${doctor._id}`}
                                >
                                    Book Appointment
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default DoctorSearch;
