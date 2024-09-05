import React from 'react';
import backgroundImage from '../../Assets/uti.png'; // Ensure you import the correct image path

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-200" style={{ height: '80vh' }}>
      {/* Background image */}
      <img src={backgroundImage} alt="UTI Testing" className="absolute top-0 left-0 w-full h-full object-cover" />
      
      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-4 bg-opacity-30">
        <div className="text-white text-center pl-20">
          {/* Heading with custom line breaks and specific text coloring */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg font-poppins text-black leading-tight lg:leading-snug">
            Fast, Reliable <br className="lg:hidden"/>
            <span className="text-red-600">UTI Testing <br className="lg:hidden"/> Near You</span>
          </h1>
          <p className="mt-2 text-xl md:text-2xl text-slate-700 font-semibold font-poppins">Get Accurate Results & Personalized Care</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <div className='flex'>

            Book Your Test Now
            </div>
            <div className='flex'>

            Call Us: 800-790-4550
            </div>
          </button>
          {/* <p className="text-sm mt-4 text-black">Call Us: 800-790-4550</p> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
