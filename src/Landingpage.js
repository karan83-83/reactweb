import React from 'react';

const LandingPage = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center  ">
      <nav className="w-full flex justify-between items-center p-6">
        <div className="text-2xl font-bold">Dribbble</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-700">Find designers</a>
          <a href="#" className="text-gray-700">Inspiration</a>
          <a href="#" className="text-gray-700">Courses</a>
          <a href="#" className="text-gray-700">Jobs</a>
          <a href="#" className="text-gray-700">Go Pro</a>
          <input type="text" placeholder='search' className='text-start pl-3 rounded-2xl h-10 w-80 '  />
        </div>
        <div className="space-x-4">
          <button className="text-gray-700">Log in</button>
          <button className="bg-black rounded-3xl text-white px-4 py-2 ">Sign up</button>
        </div>
      </nav>
      <div className="text-center mt-20">
        <div className="bg-purple-200 text-purple-800 px-4 py-2 inline-block rounded-full mb-4">Over 3 million ready-to-work creatives!</div>
        <h1 className="text-5xl font-bold mb-4  ">The world's  destination for design</h1>
        <p className="text-md text-gray-700 mb-8">Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
        <button className="bg-black text-white px-6 py-3 rounded-3xl">Get started</button>
      </div>
    </div>
  );
};

export default LandingPage;
