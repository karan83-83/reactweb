// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
         
        </div>
        <div className="flex justify-between items-center flex-wrap">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-bold">Dribbble</span>
            <nav className="space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">For designers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Hire talent</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Inspiration</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Advertising</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Careers</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Support</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Designers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Freelancers</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Tags</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Places</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-600">© 2024 Dribbble</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Terms</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Cookies</a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Instagram</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
