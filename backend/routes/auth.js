import express from 'express'
import bcrypt from  'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User'

const router= express.Router();

//Login route for the user
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;

try{
    const user= await User.findOne({email});
    if(!user) return res.status(404).json({message:"User not found"});

    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid) return res.status(400).json({message:"Invalid Password!"})

    const token = jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '30 minute'});

    res.status(200).json({user,token})
}catch(error){
    res.status(500).json({message:"Something went Wrong!"})
}

})