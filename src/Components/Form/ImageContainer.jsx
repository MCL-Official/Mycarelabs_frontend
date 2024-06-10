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

const ImageContainer = () => {
  return (
    <div className="relative w-full h-screen mt-14">
      <div
        className="absolute top-0 left-0 w-full h-[75%] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://appinventiv.com/wp-content/themes/twentynineteen-child/images/contact-bg-banner-desktop.webp')`,
        }}
      >
        <div className="text-left text-white max-w-lg absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/4">
          <h1 className="text-6xl font-bold mb-6">Kickstart Your Medial Journey Today</h1>
          <p className="mb-8 text-2xl">Get all your questions answered by our business development team.</p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-3 px-6 text-lg rounded hover:bg-blue-600">View Locations</button>
            <button className="bg-blue-500 text-white py-3 px-6 text-lg rounded hover:bg-blue-600">Blogs</button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 left-1/3 transform translate-x-1/2 w-full max-w-2xl p-4 rounded-lg z-10">
        <ContactForm />
      </div>
      <div className="absolute bottom-20 left-1/3 transform -translate-x-1/2 w-full max-w-5xl flex space-x-8 z-0 p-4">
        <div className="w-full">
          <Marquee speed={55} gradient={false} pauseOnHover={true}>
            <div className="flex items-center space-x-24">
            <div>
                  <img src={svg2} className="h-16 object-contain" alt="Insurance" /> {/* Increased image height */}
                </div>
                <div>
                  <img src={svg3} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg4} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg5} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg6} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg7} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg8} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg9} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg10} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg11} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg12} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg13} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg14} className="h-16 object-contain" alt="Insurance" />
                </div>
                <div>
                  <img src={svg15} className="h-16 object-contain" alt="Insurance" />
                </div>
             
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
