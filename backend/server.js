import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import doctorRoutes from './routes/doctors.js';
import appointmentRoutes from './routes/appointments.js';
import contactRoutes from './routes/contacts.js';

const app = express();
const port = 3001;
const conn = "mongodb://localhost:27017/demo";

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', // Frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
}));

mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB is connected!'))
  .catch((err) => console.error('Connection Failed!', err.message));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to appointment booking API!');
});

// Auth routes
app.use('/auth', authRoutes);

// Doctor routes
app.use('/doctors', doctorRoutes);

// Appointment routes
app.use('/appointments', appointmentRoutes);

//Contact routes
app.use('/contacts', contactRoutes)

// Listen on the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
