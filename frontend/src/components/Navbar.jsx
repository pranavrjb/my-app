import React from 'react';
const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-3xl font-bold">
          <a href="/">My-App</a>
        </div>

        
        <div className="hidden md:flex space-x-10">
          <a href="/booking" className='text-white hover:underline'>Appointment</a>
          {/* <a href="/services" className="text-white hover:underline">Services</a> */}
          <a href="/login" className="text-white hover:underline">Login</a>
          {/* <a href="/about" className="text-white hover:underline">About Us</a> */}
          <a href="/company" className="text-white hover:underline">Company Registration</a>

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
