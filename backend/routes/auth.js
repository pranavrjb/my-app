import express from 'express'
import *as bcrypt from  'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const router= express.Router();

//Login route for the user
router.post('/login',async(req,res)=>{
    const {email,password}=req.body;

try{
    const user= await User.findOne({email});
    if(!user) return res.status(404).json({message:"User not found"});

    const isPasswordValid= bcrypt.compare(password, user.password);
    if(!isPasswordValid) return res.status(400).json({message:"Invalid Password!"})

    const token = jwt.sign({ id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '30min'});

    res.status(200).json({user,token})
}catch(error){
    res.status(500).json({message:"Something went Wrong!"})
}

//Signup route for the users
router.post('/signup',async(req,res)=>{
    const {name,email,password,role}=req.body;

    try{
        // checking if the user already exists or not!
        const existUser=await User.findOne({email});
        if(existUser) return res.status(400).json({message:"User already exists!"});

        //hashing the password
        const hashPassword=bcrypt.hash(password,8);

        //creating new user
        const newUser=new User({name:"",email:"",password:hashPassword,role:""})
        await newUser.save()

        const token=jwt.sign({id:newUser._id, email:newUser.email},'your_jwt_secret',{expiresIn:'30min'});

        res.status(200).json({newUser,token})
    }catch(error){
        res.status(500).json({message:"Something Went Wrong!"})
    }

})
})
const authRoutes = router;
export default authRoutes;