import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: { type: String, enum: ['patient', 'doctor'], default: 'patient' },
});

module.exports=mongoose.model('User',UserSchema);