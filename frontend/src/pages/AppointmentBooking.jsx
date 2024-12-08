import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AppointmentBooking = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [message, setMessage] = useState({ text: '', type: '' });

  const onSubmit = async (data) => {
    try {
      const result = await axios.post('http://localhost:3001/appointmentbooking', data);
      console.log(result);
      setMessage({ text: 'Booking is successful!', type: 'success' });
      reset();
    } catch (err) {
      console.error(err);
      setMessage({ text: 'Error occurred during booking process!', type: 'error' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Book an Appointment</h2>

        {/* Appointment form */}
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500' : 'focus:ring-blue-400'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500' : 'focus:ring-blue-400'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500' : 'focus:ring-blue-400'}`}
              {...register('phone', {
                required: 'Phone number is required',
                minLength: { value: 10, message: 'Phone number must be 10 digits' },
                maxLength: { value: 10, message: 'Phone number must be 10 digits' },
              })}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
              Appointment Date
            </label>
            <input
              id="date"
              type="date"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.date ? 'border-red-500' : 'focus:ring-blue-400'}`}
              {...register('date', { required: 'Date is required' })}
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="time">
              Appointment Time
            </label>
            <input
              id="time"
              type="time"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.time ? 'border-red-500' : 'focus:ring-blue-400'}`}
              {...register('time', { required: 'Time is required' })}
            />
            {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="doctor">
              Select Doctor
            </label>
            <select
              id="doctor"
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.doctor ? 'border-red-500' : 'focus:ring-blue-400'}`}
              {...register('doctor', { required: 'Please select a doctor' })}
            >
              <option value="">Select a doctor</option>
              <option value="Dr. Loren">Dr. Loren</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Taylor">Dr. Taylor</option>
            </select>
            {errors.doctor && <p className="text-red-500 text-sm">{errors.doctor.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Booking...' : 'Book Appointment'}
          </button>

          {message.text && (
            <p
              className={`mt-4 text-center text-md ${message.type === 'success' ? 'text-green-900' : 'text-red-700'}`}
            >
              {message.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AppointmentBooking;
