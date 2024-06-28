import React from 'react';
import './Tooltip.css'; // Import the additional CSS for specific styles

const SocialLinks = () => {
  return (
    <div className="tooltip-container relative cursor-pointer transition-all duration-200 text-lg rounded-lg bg-white">
      <div className="tooltip absolute top-0 left-1/2 transform -translate-x-1/2 p-2 opacity-0 pointer-events-none transition-all duration-300 rounded-2xl shadow-lg">
        <div className="profile bg-gray-200 rounded-xl p-2 border border-gray-400">
          <div className="user flex gap-2">
            <div className="img w-12 h-12 text-xl font-bold border border-blue-500 rounded-lg flex items-center justify-center bg-white">Ui</div>
            <div className="details flex flex-col gap-0 text-black">
              <div className="name text-lg font-bold text-blue-500">User</div>
              <div className="username">@username</div>
            </div>
          </div>
          <div className="about text-gray-700 pt-1">500+ Connections</div>
        </div>
      </div>
      <div className="text">
        <a className="icon no-underline text-black block relative" href="https://freecodez.com/">
          <div className="layer w-14 h-14 transition-transform duration-300 relative">
            <span className="absolute top-0 left-0 w-full h-full border border-gray-800 rounded-md transition-all duration-300"></span>
            <span className="absolute top-0 left-0 w-full h-full border border-blue-500 rounded-md transition-all duration-300"></span>
            <span className="absolute top-0 left-0 w-full h-full border border-blue-500 rounded-md transition-all duration-300"></span>
            <span className="absolute top-0 left-0 w-full h-full border border-blue-500 rounded-md transition-all duration-300"></span>
            <span className="fab fa-linkedin absolute top-0 left-0 w-full h-full text-blue-500 bg-white flex items-center justify-center">
              <svg viewBox="0 0 448 512" height="1em">
                <path
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </span>
          </div>
          <div className="text absolute left-1/2 bottom-0 transform -translate-x-1/2 opacity-0 font-medium transition-all duration-300">LinkedIn</div>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
