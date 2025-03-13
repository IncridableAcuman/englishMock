import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-white flex items-center justify-center md:justify-start">
            <span className="bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center mr-2">⚡</span>
            English
          </h2>
          <p className="mt-3 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white">Subscribe to our newsletter</h3>
          <p className="mt-3 text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="mt-4 flex items-center justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-2/3 rounded-l-md bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 text-white rounded-r-md hover:bg-blue-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-5">
        Copyright 2025 © English. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
