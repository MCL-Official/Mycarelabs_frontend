import React, { useState } from "react";
import "./HoverCards.css";
import img from "../../Assets/img2.jpg"
import img1 from "../../Assets/img3.jpg"
import img2 from "../../Assets/img4.jpg"
import img3 from "../../Assets/img5.jpg"

// Sample images (you can replace these with your own image paths)
const images = [
  img,
   img1,
img2,
img3,
img3,
    "https://images.unsplash.com/photo-1576765607924-f23fdfe908b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDV8fGRvY3RvcnxlbnwwfHx8fDE2MTYwMzg5MTI&ixlib=rb-1.2.1&q=80&w=400"
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
        {["Industries Mastered", "Tech Evangelists", "Solutions Designed","dskhdsjjds","dskhdsjjds"].map((title, index) => (
          <div
            className={`col-12 col-md ${activeIndex === index ? "col-md-4" : "col-md-2"} card-container`}
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
