import React from 'react';
import svg1 from "../Assets/image.jpg";
import svg2 from "../Assets/insurance1.jpeg";
import svg3 from "../Assets/insurance2.png";
import svg4 from "../Assets/insurance3.png";
import svg5 from "../Assets/insurance4.png";
import svg6 from "../Assets/insurance5.png";
import svg7 from "../Assets/insurance6.png";
import svg8 from "../Assets/insurance7.png";
import svg9 from "../Assets/insurance8.png";
import svg10 from "../Assets/insurance9.png";
import svg11 from "../Assets/insurance10.jpeg";
import svg12 from "../Assets/insurance11.png";
import svg13 from "../Assets/insurance12.png";
import svg14 from "../Assets/insurance13.png";
import svg15 from "../Assets/insurance14.png";
import Marquee from "react-fast-marquee";

const InsuranceAccepted = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex flex-col items-center mt-1">
        <h2 className="text-blue-600 text-5xl font-bold mr-2 pb-4">Insurance Accepted</h2>
        <div className="w-full md:w-10/12">
          <div className="flex items-center h-20"> {/* Increased height */}
            <span className=" text-blue-600 relative text-2xl font-bol top-4 left-0 md:left-5 w-32 mr-10"> {/* Adjusted position */}
              Trusted by
            </span>

            <Marquee speed={55} gradient={false} pauseOnHover={true}>
              <div className="flex items-center space-x-24"> {/* Increased horizontal spacing */}
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
    </div>
  );
}

export default InsuranceAccepted;
