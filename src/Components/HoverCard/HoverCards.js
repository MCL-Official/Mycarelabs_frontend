import React, { useState, useEffect } from "react";
import "./HoverCards.css";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img2 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img3 from "../../Assets/img2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const images = [img,img1,img2,img3,img5];

const HoverCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
    setShowButton(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
  };

  return (
    <div className="container mb-4">
      <div className="info-title-content text-center">
        <h3 className="info-title justify-content-center">
          <div className=" title-text">
            <span className="blue">My</span>
            <span className="orange">Care Labs</span>
            <span className="blue">Solution</span>
          </div>
        </h3>
        <p className="info-description">
          My Care Labs offers quick, easy, and accurate RT-PCR testing for
          COVID-19, RSV, and Influenza A/B. We provide on-site testing at our
          lab and pop-up locations throughout California, with results available
          the same day or within 24 hours.
        </p>
      </div>

      <div className="row justify-content-center">
        {[
          "Infectious Disease",
          "Toxicology",
          "Wellness Testing",
          "Mobile Testing",
          "At Home Kits",
        ].map((title, index) => (
          <div
            className={`col-12 col-md ${
              activeIndex === index ? "col-md-4" : "col-md-2"
            } card-container`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <div className="card">
              <img src={images[index]} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: "5px" }}>
                  {title}
                </h5>
                {/* Reduce margin-bottom */}
                <p className="card-text" style={{ marginBottom: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                {/* Reduce margin-bottom */}
                {activeIndex === index || showButton ? (
                  <button className="btn btn-primary custom-button">
                    Learn More <MdOutlineKeyboardArrowRight />
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
