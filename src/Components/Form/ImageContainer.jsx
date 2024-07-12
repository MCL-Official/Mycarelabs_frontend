import React from 'react';
import ContactForm from './ContactForm';
import Marquee from "react-fast-marquee";
import svg2 from "../../Assets/insurance1.jpeg";
import svg3 from "../../Assets/insurance2.png";
import svg4 from "../../Assets/insurance3.png";
import svg5 from "../../Assets/insurance4.png";
import svg6 from "../../Assets/insurance5.png";
import svg7 from "../../Assets/insurance6.png";
import svg8 from "../../Assets/insurance7.png";
import svg9 from "../../Assets/insurance8.png";
import svg10 from "../../Assets/insurance9.png";
import svg11 from "../../Assets/insurance10.jpeg";
import svg12 from "../../Assets/insurance11.png";
import svg13 from "../../Assets/insurance12.png";
import svg14 from "../../Assets/insurance13.png";
import svg15 from "../../Assets/insurance14.png";
import { useNavigate } from 'react-router-dom';

const ImageContainer = () => {
  const navigate = useNavigate();
  const HandleEmptyClick = () => {
    console.log("muskan");
    navigate('/empty');
  };

  return (
    <div className="relative w-full min-h-screen mt-14">
      <div
        className="absolute top-0 left-0 w-full h-[75%] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://appinventiv.com/wp-content/themes/twentynineteen-child/images/contact-bg-banner-desktop.webp')`,
        }}
      >
        <div className="text-left text-white max-w-lg absolute bottom-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/4 p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6">Kickstart Your Medical Journey Today</h1>
          <p className="mb-4 md:mb-8 text-lg md:text-2xl">Get all your questions answered by our business development team.</p>
          <div className="flex space-x-2 md:space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 text-sm md:text-lg rounded hover:bg-blue-600"
              onClick={HandleEmptyClick}
            >
              View Locations
            </button>
            <button
              className="bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 text-sm md:text-lg rounded hover:bg-blue-600"
              onClick={() => window.location.href = 'https://mycarelabs.com/blog/'}
            >
              Blogs
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full md:w-1/2 lg:w-1/3 p-2 md:p-4 rounded-lg z-10">
        <ContactForm />
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-full max-w-3xl p-4 z-0">
        <Marquee speed={55} gradient={false} pauseOnHover={true}>
          <div className="flex items-center space-x-4 md:space-x-8 lg:space-x-24">
            {[svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9, svg10, svg11, svg12, svg13, svg14, svg15].map((src, index) => (
              <div key={index}>
                <img src={src} className="h-8 md:h-12 lg:h-16 object-contain" alt="Insurance" />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ImageContainer;
