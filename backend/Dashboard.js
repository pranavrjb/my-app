import express from 'express';
import Appointment from '../models/Appointment.js'; // Assuming Appointment is your schema
import Doctor from '../models/Doctor.js'; // Assuming Doctor is your schema

const router = express.Router();

// Get appointments for a specific patient
router.get('/patients/dashboard', async (req, res) => {
    const { patientId } = req.query; // Patient ID passed via query parameter

    try {
        const appointments = await Appointment.find({ patientId })
            .populate('doctorId', 'name specialization') // Populate doctor details
            .exec();

        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching patient dashboard data:', error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
});
// Get appointments for a specific doctor
router.get('/doctors/dashboard', async (req, res) => {
    const { doctorId } = req.query; // Doctor ID passed via query parameter

    try {
        const appointments = await Appointment.find({ doctorId })
            .populate('patientId', 'name email') // Populate patient details
            .exec();

        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching doctor dashboard data:', error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
});


export default router;
