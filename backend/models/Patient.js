import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    contact: { type: String, required: true },
});

const Pateint= mongoose.model('Patient', PatientSchema);
export default Pateint;
