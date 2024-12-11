import React from 'react'
import { useState } from 'react'
import API from '../api'

const Login = () => {
    const [formData,setFormData]=useState({email:'',password:''});

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const {data}= await API.post('/auth/login', formData);
            console.log("Login Successfully",data)
        }
        catch(error){
            console.error("Login error!",error.response.data.message)
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='email' name='email' placeholder='example123@gmail.com' onChange={handleChange} required/>
            <input type='password' name='password' placeholder='******' minLength={8} onChange={handleChange} required/>
            <button type='submit'>Log In</button>
        </form>
    )
  
}

export default Login
