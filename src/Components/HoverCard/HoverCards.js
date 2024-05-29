import React, { useState } from "react";
import "./HoverCards.css";

// Sample images (you can replace these with your own image paths)
const images = [
  "https://via.placeholder.com/600x900?text=Image+1",
  "https://via.placeholder.com/800x400?text=Image+2",
  "https://via.placeholder.com/800x400?text=Image+3",
  "https://via.placeholder.com/800x400?text=Image+4",
//   "https://via.placeholder.com/800x400?text=Image+5"
];

const HoverCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {["Industries Mastered", "Tech Evangelists", "Solutions Designed","dskhdsjjds"].map((title, index) => (
          <div
            className={`col-12 col-md ${activeIndex === index ? "col-md-5" : "col-md-2"} card-container`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <div className="card">
              <img src={images[index]} className="card-img-top" alt={title} />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverCards;
