import React, { useEffect, useState } from 'react';
import API from '../../api';

const DoctorDashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const {res} = await API.get('http://localhost:3001/doctors/dashboard');
                setAppointments(res.data);
            } catch (error) {
                console.log('Error fetching doctor dashboard data:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Doctor Dashboard</h2>
            <h3 className="text-lg mb-2">Appointments</h3>
            <ul className="space-y-4">
                {appointments.map(appointment => (
                    <li key={appointment.id} className="p-4 border rounded-lg shadow">
                        <p><strong>Patient:</strong> {appointment.patientName}</p>
                        <p><strong>Date:</strong> {appointment.date}</p>
                        <p><strong>Time:</strong> {appointment.time}</p>
                        <p><strong>Status:</strong> {appointment.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorDashboard;
