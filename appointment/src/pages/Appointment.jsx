import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
const Appointment = () => {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [error, setError] = useState('');

  const doctors = ['Dr.rem', 'Dr.lrem', 'lorem','acad'];
 const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm()
  const onSubmit = (data) => console.log(data);
  // alert('Appointment booked successfully!')

  // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
// // basic validation ofr the form
//     if (!name || !email || !phone || !date || !time || !doctor) {
//       setError('Please fill the form.');
//       return;
//     }

  //   setError('');
  //   // Process appointment booking
  //   alert('Appointment booked successfully!');
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Book an Appointment</h2>

        <form action=""onSubmit={handleSubmit(onSubmit)}>
    
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('name',{required:"Name is required!"})}

              // onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className='text-red-700'>{errors.name.message}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('email',{required:"Email is required!"})}
              // onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className='text-red-700'>{errors.email.message}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("phone",{required:"Phone number is required"})}
              // onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className='text-red-700'>{errors.phone.message}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="date">
              Appointment Date
            </label>
            <input
              id="date"
              type="date"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('date',{required:"Date is required!"})}
              // value={date}
              // onChange={(e) => setDate(e.target.value)}
            />
            {errors.date && <p className='text-red-700'>{errors.date.message}</p>}
          </div>

    
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="time">
              Appointment Time
            </label>
            <input
              id="time"
              type="time"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register('time',{required:"Time is required!"})}
              // value={time}
              // onChange={(e) => setTime(e.target.value)}
            />
            {errors.time && <p className='text-red-700'>{errors.time.message}</p>}
          </div>

          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="doctor">
              Select Doctor
            </label>
            <select
              id="doctor"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             {...register('doctor',{required:"Doctor is required!"})}
              // onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="">Select a doctor</option>
              {doctors.map((doc, index) => (
                <option key={index} value={doc}>
                  {doc}
                </option>
              ))}
            </select>
          </div>
              
          {/* Error Message */}
          {errors.doctor && <p className="text-red-700">{errors.doctor.message}</p>}

          {/* Submit Button */}
          <button
          disabled={isSubmitting}
            type="submit"
            className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
