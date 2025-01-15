import React from "react";
import Slider from "react-slick";

import ws1 from "../../Assets/ws1.webp";
import ws2 from "../../Assets/ws2.webp";
import ws3 from "../../Assets/ws3.webp";
import ws4 from "../../Assets/ws4.webp";
import ws5 from "../../Assets/ws5.webp";
import ws6 from "../../Assets/ws6.webp";
import ws7 from "../../Assets/ws7.webp";


// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 -bottom-16 transform bg-blue-600 text-white text-3xl p-2 font-extrabold shadow hover:bg-blue-800 z-10"
      aria-label="Previous"
    >
      ←
    </button>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-16 -bottom-16 transform bg-blue-600 text-white text-3xl p-2 font-extrabold shadow hover:bg-blue-800 z-10"
      aria-label="Next"
    >
      →
    </button>
  );
};

const WeServe = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Add custom Next arrow
    prevArrow: <PrevArrow />, // Add custom Previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="pt-16 pb-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Industries <span className="text-orange-600">We Serve</span>
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Our flexible and scalable solutions cater to healthcare providers,
          educational institutions, and treatment centers, ensuring:
        </p>
        <p className="mt-2 text-lg text-center text-blue-600">
          My Care Labs proudly partners with:
        </p>

        <div className="mt-8 relative">
          <Slider {...settings}>
   
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ws1}
                  alt="Assisted Living Facilities"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Assisted Living Facilities
                  </h3>
                  <div className="mt-2 h-2 w-full bg-blue-600"></div>
                </div>
              </div>
            </div>
         
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ws2}
                  alt="Home Health & Hospices"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Home Health & Hospices
                  </h3>
                  <div className="mt-2 h-2 w-full bg-blue-600"></div>
                </div>
              </div>
            </div>

          
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ws3}
                  alt="Skilled Nursing Facilities"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Skilled Nursing Facilities
                  </h3>
                  <div className="mt-2 h-2 w-full bg-blue-600"></div>
                </div>
              </div>
            </div>
          
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ws4}
                  alt="Skilled Nursing Facilities"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                  Physician Offices & Hospitals
                  </h3>
                  <div className="mt-2 h-2 w-full bg-blue-600"></div>
                </div>
              </div>
            </div>

         
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ws5}
                  alt="Skilled Nursing Facilities"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                  Reference Laboratories
                  </h3>
                  <div className="mt-2 h-2 w-full bg-blue-600"></div>
                </div>
              </div>
            </div>
           
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ws6}
                  alt="Skilled Nursing Facilities"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                  Schools & Universities
                  </h3>
                  <div className="mt-2 h-2 w-full bg-blue-600"></div>
                </div>
              </div>
            </div>
         
            <div className="p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ws7}
                  alt="Skilled Nursing Facilities"
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                  Drug & Substance Treatment Centers
                  </h3>
                  <div className="mt-2 h-2 w-full bg-blue-600"></div>
                </div>
              </div>
            </div>
            
          </Slider>
        </div> 
      </div>
    </section>
  );
};

export default WeServe;
