import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorSearch = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch doctors from the backend
        const fetchDoctors = async () => {
            try {
                const res = await axios.get('http://localhost:3000/doctors');
                setDoctors(res.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };

        fetchDoctors();
    }, []);

    // Filter doctors based on the search term
    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-center text-3xl font-bold mb-6">Search Doctors</h2>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name, specialization, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg mb-6"
            />

            {/* Doctor List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="p-4 border rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold">{doctor.name}</h3>
                            <p>Specialization: {doctor.specialization}</p>
                            <p>Experience: {doctor.experience} years</p>
                            <p>Location: {doctor.location}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Book Appointment
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No doctors found matching your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default DoctorSearch;
