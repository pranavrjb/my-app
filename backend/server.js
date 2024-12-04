import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import AppointmentBookingModel from './models/AppointmentBooking.js';

const app = express();
const port=3001;

app.use(cors({
  origin: 'http://localhost:5173' //url to conneect from the frontend localhost
}));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to the DataBase'))
  .catch((err) => console.error('Error connecting to Databasr:', err));

app.post('/appointmentbooking', async (req, res) => {
  const { name, email, phone, doctor, time, date } = req.body;

  try {
    const existap = await AppointmentBookingModel.findOne({ date, time, doctor });
    if (existap) {
      return res.json({ message: 'Appointment already booked for this slot' });
    }

    const newAppointment = new AppointmentBookingModel({ name, email, phone, date, time, doctor });
    await newAppointment.save();
    res.json({ message: 'Booking done!', data: newAppointment });

  } catch (err) {
    res.json({ message: 'Server error', error: err });
  }
});

//checking the server 
app.listen(port, () => {
  console.log(`Server is running on port${port}`);
});
