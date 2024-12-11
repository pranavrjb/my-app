import express from 'express';
import Appointment from '../models/Appointment.js';

const router = express.Router();

//creating new appointment for users.
router.post('/book', async (req, res) => {
    const { patientId, doctorId, date, time } = req.body;

    try {
        const newAppointment = new Appointment({ patientId, doctorId, date, time });
        await newAppointment.save()
        res.status(201).json({ message: "Appointment Booked Successfully!", appointment: newAppointment })
    } catch (error) {
        res.status(500).json({ message: "Something went Wrong!" })
    }
});

//getting new appointment for the users
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;  // userId is coming from URL params
    try {
        const appointments = await Appointment.find({ patientId: userId }) // change userId to patientId
            .populate('doctorId', 'name'); // populating doctor name for better response
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong!", error });
    }
});


//updating the appointment
router.put('/:id/status', async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
        if (!appointment) {
            return res.status(404).json({ message: "Appointment not found!" });
        }
        res.status(200).json({ message: "Appointment status updated", appointment });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong!", error });
    }
});

export default router