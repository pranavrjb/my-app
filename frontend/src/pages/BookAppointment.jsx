// src/pages/BookAppointment.jsx
import React, { useState } from 'react';
import axios from 'axios';

const BookAppointment = () => {
    const [formData, setFormData] = useState({
        userId: '', // Replace with logged-in user's ID
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
            console.log('Error booking appointment:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Doctor ID:</label>
                    <input
                        type="text"
                        name="doctorId"
                        value={formData.doctorId}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Time:</label>
                    <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    Book Appointment
                </button>
            </form>
        </div>
    );
};

export default BookAppointment;
