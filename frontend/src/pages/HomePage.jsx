import React from 'react';

const HomePage = () => {
    return (
        <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to MedConnect</h1>
            <p className="text-lg text-gray-700 mb-6">
                Book appointments with trusted doctors in your area.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                Get Started
            </button>
        </div>
    );
};

export default HomePage;
