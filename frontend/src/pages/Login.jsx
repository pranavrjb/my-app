import React from 'react'
import { useState } from 'react'
import API from '../api'

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/auth/login', formData);
            console.log("Login Successfully", data)
        }
        catch (error) {
            console.error("Login error!")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

        <form onSubmit={handleSubmit}
                className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-4">

                <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
                {/* {error && <p className="text-red-500 text-center">{error}</p>} */}

            {/* <label className='text-3x1 font-semibold'>Email</label> */}
            <input 
            type='email'
             name='email'
              placeholder='Email'
               onChange={handleChange} 
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
               required />

               {/* <label className='text-3x1 font-semibold m-auto'>Password</label> */}
            <input 
            type='password' 
            name='password'
             placeholder='Password' 
             minLength={8}
              onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
               required />
                <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Log In</button>

                <p className="text-sm text-center text-gray-500">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign Up
                    </a>
                </p>
        </form>
        </div>
    )

}

export default Login
