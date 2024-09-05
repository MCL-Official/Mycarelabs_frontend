import React from 'react';
import testingMethodsImage from '../../Assets/uti3.png'; // Make sure to replace with your actual image path

const SubElement3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Container */}
      <div className="md:w-1/2">
        <img src={testingMethodsImage} alt="Testing Methods" className="w-full h-96 object-contain"/>
      </div>
      
      {/* Text Content Container */}
      <div className="md:w-1/2 p-4 md:p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-left">Our Testing Methods</h1>
        <p className="text-gray-600 text-sm md:text-xl mb-4 max-w-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore Our Testing Options
        </button>
        <div className="mt-4">
          <img src="../../Assets/1.png" alt="CLIA Certified" className="w-24 h-24"/> {/* Adjust path and sizing as needed */}
        </div>
      </div>
    </div>
  )
}

export default SubElement3;
