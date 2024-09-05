import React from 'react';
import leftImage from '../../Assets/uti2.png'; // Make sure to replace with your actual image path

const SubElement2 = () => {
    return (
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="md:w-1/2">
          <img src={leftImage} alt="Description" className="w-full h-50 object-contain"/>
        </div>
        
        {/* Text Content Container */}
        <div className="md:w-1/2 p-4 md:p-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 text-left">What is a UTI?</h1>
          <p className="text-gray-600 text-lg  text-left pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    )
  }

export default SubElement2;
