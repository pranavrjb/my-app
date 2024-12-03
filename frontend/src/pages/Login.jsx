import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required/>
        </div>

        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
             required/>
        </div>
        
        <div className="text-right mb-4">
          <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        
        <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-600 transition duration-200">
          Login
        </button>

        
        <div className="flex items-center justify-center my-6">
          <div className="border-t w-1/4"></div>
          <span className="mx-4 text-gray-500">or</span>
          <div className="border-t w-1/4"></div>
        </div>

        
        <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200 mb-3">
          Continue with Google
        </button>

        
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-900 transition duration-200">
          Continue with Facebook
        </button>
      </div>
    </div>
  );
};


export default Login
