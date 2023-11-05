import React from 'react';
import { Link } from 'react-router-dom';

export function Landing() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center text-gray-800 m-0 p-0">
      <div className="max-w-4xl text-center p-8">
        <h1 className="text-6xl font-bold mb-8">Welcome to Valid</h1>
        <p className="mb-8 text-xl">
          Discover a new way to organize your tasks, manage time, and stay productive. Join Valid today and take the first step towards a more organized life.
        </p>
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Jane Doe', 'John Smith', 'Alex Johnson'].map((name, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <p className="text-sm italic">“Valid has revolutionized the way I manage my daily tasks.”</p>
                <p className="text-sm font-semibold mt-2">{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-4xl font-semibold mb-6">Get Started</h2>
          <div className="flex justify-center space-x-6">
            <Link to='/signup' className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-200 ease-in-out transform hover:-translate-y-1">
              Sign Up
            </Link>
            <Link to='/login' className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 ease-in-out transform hover:-translate-y-1">
              Sign In
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-semibold mb-6">Need Help?</h2>
          <p className="mb-4">Contact our 24/7 live chat support for any assistance.</p>
        </div>
      </div>
    </div>
  );
}