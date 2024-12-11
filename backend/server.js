import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import doctorRoutes from './routes/doctors.js';
import appointmentRoutes from './routes/appointments.js';
import cors from 'cors';


const app = express();
const port = 3000;
const conn = "mongodb://localhost:27017/demo";
app.use('/auth', authRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }));

mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB is connected!'))
  .catch((err) => console.error('Connection Failed!', err.message));

app.get('/', (req, res) => {
  res.send('Welcome to appointment booking API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
