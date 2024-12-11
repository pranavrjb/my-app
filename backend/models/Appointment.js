import mongoose from "mongoose";

const AppointmentSchema= new mongoose.Schema({
    patientId: Number,
    doctorId: Number,
    date: String,
    time: String,
    status: { type: String, default: 'confirmed' },
})
 module.exports=mongoose.model('Appointment',AppointmentSchema);