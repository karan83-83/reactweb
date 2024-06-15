
import React from 'react';

function HeroSection() {
  return (
    <div className="bg-yellow-200 h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4  ">
        Find your next designer today
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 ">
        The world's leading brands use Dribbble to hire creative talent.
        Browse millions of top-rated portfolios to find your perfect creative match.
      </p>
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-gray-900 text-white py-3 px-6 rounded-3xl text-lg font-semibold">
          Get started now
        </button>
        <button className="bg-white text-gray-900 border border-gray-900 py-3 px-6 rounded-3xl text-lg font-semibold">
          Learn about hiring
        </button>
      </div>
      <p className="mt-8 text-gray-700">
        Are you a designer? <a href="#" className="text-blue-600">Join Dribbble</a>
      </p>
    </div>
  );
}

export default HeroSection;
