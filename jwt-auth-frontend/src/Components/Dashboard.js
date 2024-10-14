import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center">Welcome to the MERN Stack Course</h1>
          <p className="text-center text-gray-600 mt-2">
            Learn to build modern, full-stack web applications using MongoDB, Express, React, and Node.js
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Course Features</h2>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Comprehensive MERN Stack training</li>
              <li>Hands-on projects with real-world applications</li>
              <li>Industry-relevant curriculum</li>
              <li>24/7 access to learning materials</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">About the Course</h2>
            <p className="text-gray-700">
              This course is designed to help you master the MERN stack and become proficient in building
              full-stack web applications. From front-end to back-end, you'll learn the skills needed to create dynamic
              and scalable web applications using MongoDB, Express, React, and Node.js.
            </p>
          </div>
        </div>

        {/* Buttons for Register and Login */}
        <div className="mt-8 flex justify-center gap-4">
          <Link to="/register">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
              Login
            </button>
          </Link>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-gray-500">&copy; 2024 MERN Stack Course. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
