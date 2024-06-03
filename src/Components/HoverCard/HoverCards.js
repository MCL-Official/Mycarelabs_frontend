import React, { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img2 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";

const images = [img, img1, img2, img3, img5];

const HoverCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="mt-5">
      <div className="text-center mb-4">
        <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-8">
          <div className="relative inline-block -mt-12 bg-transparent">
            <span className="text-blue-600 text-4xl font-bold mr-2">
              My
            </span>
            <span className="text-orange-600 text-4xl font-bold mr-2">
              Care Labs
            </span>
            <span className="text-blue-600 text-4xl font-bold">
              Solution
            </span>
          </div>
        </h3>
        <p className="text-base mt-3 mb-6 pb-3">
          My Care Labs offers quick, easy, and accurate RT-PCR testing for
          COVID-19, RSV, and Influenza A/B. We provide on-site testing at our
          lab and pop-up locations throughout California, with results available
          the same day or within 24 hours.
        </p>
      </div>

      <div className="flex justify-center flex-wrap">
        {[
          "Infectious Disease",
          "Toxicology",
          "Wellness Testing",
          "Mobile Testing",
          "At Home Test Kits",
        ].map((title, index) => (
          <div
            className={`transition-all duration-300 mb-4 mt-2 mx-2 ${
              activeIndex === index ? "md:w-1/4" : "md:w-1/6"
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => setActiveIndex(0)}
            key={index}
          >
            <div className="border rounded-lg overflow-hidden shadow-lg">
              <img
                src={images[index]}
                className="h-48 w-full object-cover"
                alt={title}
              />
              <div className="p-4 text-left">
                <h5 className="text-lg font-bold mb-1">{title}</h5>
                <p className="text-base text-gray-600 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {activeIndex === index && (
                  <button className="bg-green-500 border-2 border-green-500 text-white rounded-full px-4 py-1 mt-2 transition-colors duration-300 hover:bg-transparent hover:text-green-500 whitespace-nowrap flex items-center">
                    Learn More <MdOutlineKeyboardArrowRight className="ml-1" />
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
