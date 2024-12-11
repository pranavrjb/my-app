import React from "react";
import { useState } from "react";
import API from "../api";

const SignUp=()=>{
const [formData,setFormData]=useState({name:'',email:'',password:'',role:''});

const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
};

const handleSubmit=async(e)=>{
    e.preventDefault();
try{
    const{data}=await API.post('/auth/signup',formData);
    console.log('SignUp Successfull',data);
}catch(error){
    console.log('SignUp Unsuccessfull',error)
}
}

return(
    <form onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md space-y-4">
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>

        <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
        />
        <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
        />
        <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
        />
        <select
            name="role"
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
            
            <option value="0">Select one</option>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
        </select>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
            Sign Up
        </button>
    </form>
)
}
export default SignUp;