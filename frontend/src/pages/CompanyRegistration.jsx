import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const CompanyRegistration = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [message, setMessage] = useState({ text: '', type: '' });

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/registercompany', data)
            .then((res) => {
                setMessage({ text: 'Company registered successfully!', type: 'success' });
                reset();
            })
            .catch((err) => {
                setMessage({ text: 'Error registering company!', type: 'error' });
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register Your Company</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Company Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company Name</label>
                        <input
                            type="text"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            {...register('companyName', { required: 'Company name is required' })}
                        />
                        {errors.companyName && <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            {...register('password', { required: 'Password is required' })}
                        />
                        {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Register
                    </button>

                    {/* Message display */}
                    {message.text && (
                        <p className={`mt-4 text-center text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                            {message.text}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default CompanyRegistration;
