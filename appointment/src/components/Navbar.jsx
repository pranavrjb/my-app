// App.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-3 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-1xl font-bold">
          <a href="/">My-App</a>
        </div>

        
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:underline">Home</a>
          <a href="/profile" className='text-white hover:underline'>Profile</a>
          <a href="/appointment" className='text-white hover:underline'>Appointment</a>
          <a href="/services" className="text-white hover:underline">Services</a>
          <a href="/contact" className="text-white hover:underline">Contact Us</a>
          <a href="/about" className="text-white hover:underline">About Us</a>
          <a href="/login" className="text-white hover:underline">Login</a>
        </div>

        
        <div className="flex items-center">
          <input
            type="text"
            placeholder="..."
            className="px-4 py-2 rounded-l-md outline-none"
          />
          <button className="bg-white text-gray-900 px-4 py-2 rounded-r-md hover:bg-gray-200">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
