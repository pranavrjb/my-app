import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role: { type: String, enum: ['patient', 'doctor','admin'] },
});

const User=mongoose.model('User',UserSchema);
export default User;