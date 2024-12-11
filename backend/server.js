import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import cors from 'cors';


const app = express();
const port =  3000;
const conn = "mongodb://localhost:27017/demo";

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use('/auth', authRoutes);

mongoose.connect(conn, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB is connected!'))
  .catch((err) => console.error('Connection Failed!', err.message));

app.get('/', (req, res) => {
  res.send('Welcome to appointment booking API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
