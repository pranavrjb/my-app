import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PatientDashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await axios.get('http://localhost:3000/patients/dashboard');
                setAppointments(res.data);
            } catch (error) {
                console.error('Error fetching patient dashboard data:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Patient Dashboard</h2>
            <h3 className="text-lg mb-2">Your Appointments</h3>
            <ul className="space-y-4">
                {appointments.map(appointment => (
                    <li key={appointment.id} className="p-4 border rounded-lg shadow">
                        <p><strong>Doctor:</strong> {appointment.doctorName}</p>
                        <p><strong>Date:</strong> {appointment.date}</p>
                        <p><strong>Time:</strong> {appointment.time}</p>
                        <p><strong>Status:</strong> {appointment.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientDashboard;
