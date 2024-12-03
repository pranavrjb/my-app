// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const AppointmentBookingModel = require("./models/AppointmentBooking");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB with error handling
mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.post("/appointmentbooking", (req, res) => {
  const { name, email, phone, doctor, time, date } = req.body;

  if (!name || !email || !phone || !doctor || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  AppointmentBookingModel.findOne({ email: email })
    .then(user => {
      if (user) {
        return res.status(409).json({ message: "Appointment already booked" });
      } else {
        AppointmentBookingModel.create({ name, email, phone, date, time, doctor })
          .then(result => res.status(201).json({ message: "Booking done!", data: result }))
          .catch(err => res.status(500).json({ message: "Server error", error: err }));
      }
    })
    .catch(err => res.status(500).json({ message: "Database error", error: err }));
});

// Start server
app.listen(3001, () => {
  console.log("Server is running");
});
