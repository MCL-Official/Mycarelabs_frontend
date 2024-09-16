import React from 'react';
import data from "../../Assets/1.png"
import testingMethodsImage from '../../Assets/uti3.png'; // Make sure to replace with your actual image path

const SubElement3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center overflow-hidden">
      {/* Image Container */}
      <div className="md:w-1/2">
        <img src={testingMethodsImage} alt="Testing Methods" className="w-full h-96 object-contain"/>
      </div>
      
      {/* Text Content Container */}
      <div className="md:w-1/2 p-4 md:p-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-left">Our Testing Methods</h1>
        <p className="text-gray-600 text-sm md:text-xl mb-4 max-w-xl">
        We provide quick and accurate UTI testing to help you get the relief you need. Our simple and non-invasive urine sample collection process is designed for your convenience and comfort. After your sample is collected, our team analyzes it for signs of infection, including bacteria, white blood cells, and other indicators that may suggest a urinary tract infection (UTI).   </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Explore Our Testing Options
        </button>
        <div className="mt-4">
          <img src={data} alt="CLIA Certified" className="w-24 h-24"/> {/* Adjust path and sizing as needed */}
        </div>
      </div>
    </div>
  )
}

export default SubElement3;
