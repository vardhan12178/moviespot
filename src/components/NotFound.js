import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Oops! Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-3 text-lg font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-400"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
