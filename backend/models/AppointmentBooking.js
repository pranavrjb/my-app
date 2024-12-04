import mongoose from 'mongoose';

const AppointmentBookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  doctor: { type: String, required: true }
});

const AppointmentBookingModel = mongoose.model('appointmentbooking', AppointmentBookingSchema);
export default AppointmentBookingModel;
