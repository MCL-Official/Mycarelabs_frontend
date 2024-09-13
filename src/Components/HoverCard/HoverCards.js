import React, { useRef, useState, useEffect } from "react";
import NeumorphismButton from "../button/Button"; // Adjusted to the correct import path
import DragCloseDrawer from "../Custome_Modal/DragCloseDrawer";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import { Helmet } from "react-helmet";


const images = [
  "https://i.ibb.co/m6khGkq/1.jpg",
  "https://i.ibb.co/NCz8Kt8/dadfs.png",
  "https://i.ibb.co/9w3s7gd/edfsf.png",
  "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg",
  "https://i.ibb.co/PTcg4Sq/6.jpg",
  "https://i.ibb.co/ZBLZ7zp/7.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
];

// const images = [
//   "https://imagesuploadforwebsite.s3.amazonaws.com/card1.jpg",
//   "https://imagesuploadforwebsite.s3.amazonaws.com/card2.jpg",
//   "https://imagesuploadforwebsite.s3.amazonaws.com/card3.jpg",
//   "https://imagesuploadforwebsite.s3.amazonaws.com/card5.jpg",
//   "https://imagesuploadforwebsite.s3.amazonaws.com/card6.jpg",
//   "https://imagesuploadforwebsite.s3.amazonaws.com/card4.jpg",
// ];


const cardData = [
  {
    // category: "Northern California: Fremont Lab",
    category: "Northern California: Fremont Lab",
    title: "Fremont Laboratory",
    shortDescription:
      "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week.",
    longDescription:
      "high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours. Our smart combo test is $0 with any health insurance coverage.",
  },
  {
    category: "Southern California: Riverside County Mobile Testing",
    // category: "Northern California: Fremont Lab",
    title: "Riverside Mobile Testing",
    shortDescription:
      "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      "pre-register and you’ll breeze through our testing site in about five minutes. This service is by appointment only.",
  },
  {
    category: "Northern California Mobile Testing",
    title: "SF Bay Area / Silicon Valley Mobile Testing",
    shortDescription:
      "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
    longDescription:
      " Patients can simply schedule their mobile testing appointment online and then we dispatch our medical team to your desired location. Patients who test before 4:00pm will receive their results the same day and anytime after 4:00pm should expect their results the following business day. This service is by APPOINTMENT ONLY and operates within a 10 mile radius of Fremont.",
  },
  {
    category: "Riverside Gurdwara Pop-Up",
    title: "Riverside Gurdwara",
    shortDescription:
      "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      " pre-register and you’ll breeze through our testing site in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.",
  },
  {
    category: "At-home Test Kit",
    title: "PCR COVID-19, RSV, and Influenza A/B Test Kit",
    shortDescription:
      "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
    longDescription: "In our commitment to making healthcare accessible and convenient, we present our comprehensive range of At-Home Test Kits. Discover the power of self-testing with our user-friendly kits, including the At-Home Influenza Test Kit and the At-Home COVID Test Kit. ",
  },
  // {
  //   category: "NorCal: Union City Pop-up",
  //   title: "Union City Pop-up",
  //   shortDescription:
  //     "My Care Labs offers $0 out of pocket COVID-19 PCR and Rapid testing in Union City.",
  //   longDescription: "Detailed information about our light solutions...",
  // },
  // {
  //   category: "SoCal: Corona Mobile Testing",
  //   title: "Mobile Testing: Corona, CA",
  //   shortDescription:
  //     "Same-day Covid/Flu PCR results available. To speed up your testing.",
  //   longDescription: "Detailed information about our audio solutions...",
  // },
];


const HoverCards = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");
  const carouselRef = useRef(null);

  const handleLearnMoreClick = (content) => {
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      top: 0,
      left: 400,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleTouchStart = (e) => {
      const touchStartX = e.touches[0].clientX;
      carouselRef.current.touchStartX = touchStartX;
    };

    const handleTouchMove = (e) => {
      if (!carouselRef.current.touchStartX) {
        return;
      }

      const touchEndX = e.touches[0].clientX;
      const touchDiffX = carouselRef.current.touchStartX - touchEndX;

      if (touchDiffX > 50) {
        scrollRight();
      } else if (touchDiffX < -50) {
        scrollLeft();
      }

      carouselRef.current.touchStartX = null;
    };

    const carousel = carouselRef.current;
    carousel.addEventListener("touchstart", handleTouchStart);
    carousel.addEventListener("touchmove", handleTouchMove);

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart);
      carousel.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
    <Helmet>
       <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
       <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
       <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
       <meta name="author" content="My Care Labs" />
     </Helmet>
    <div className=" overflow-hidden bg-gradient-to-b from-blue-200 via-transparent to-white">
      <div className="text-center mb-4">
        <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-8">
          <div className="relative inline-block pt-6 md:pt-12 px-4 sm:px-6 md:px-10 bg-transparent pb-3">
            <span className="text-blue-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mr-2">
              Our Testing
            </span>
            <span className="text-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              Locations...
            </span>
          </div>
        </h3>
        <div className="container mx-auto px-4">
          <p className="info-description mt-3 text-bold text-base sm:text-sm md:text-xl lg:text-2xl pb-6">
            My Care Labs offers quick, hassle-free, and accurate COVID-19, RSV,
            and Influenza RT-PCR testing. With same-day or 24-hour results, we
            provide fast turnaround for busy patients on-site at our laboratory
            and at pop-ups throughout California.
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={scrollLeft}
        >
          <MdOutlineKeyboardArrowLeft size={24} />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto space-x-8 p-4 mb-7 pb-5 scrollbar-hide"
        >
          {cardData.slice(0, 7).map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-112 transition-transform transform hover:scale-110 hover:shadow-2xl"
            >
              <div className="rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                <img
                  src={images[index % images.length]}
                  className="h-56 w-full object-cover"
                  alt={card.title}
                />
                <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                  <div>
                
                    <h5 className="text-lg font-bold mb-1">{card.category}</h5>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {card.shortDescription}
                      <button
                        className="text-sm text-blue-500 hover:underline ml-1"
                        onClick={() =>
                          handleLearnMoreClick(card.longDescription)
                        }
                      >
                        Learn More
                      </button>
                    </p>
                  </div>
                  <div className="mb-1">

                    <span className="text-sm  text-blue-400">
                   { card.category=="Northern California: Fremont Lab"? "Walk-ins are welcome":""}
                      {/* walk-ins are welcome */}
                    </span>
                    </div>
                  <div className="flex justify-center mt-auto">
                    <NeumorphismButton
                      slug={index}
                      cardData={{ ...card, imageUrl: images[index % images.length] }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={scrollRight}
        >
          <MdOutlineKeyboardArrowRight size={24} />
        </button>
      </div>

      <DragCloseDrawer open={drawerOpen} setOpen={setDrawerOpen}>
        <div className="mx-auto max-w-2xl space-y-7 pt-7 text-neutral-400">
          <h2 className="text-4xl font-bold text-neutral-200">
            Drag the handle at the top of this modal downwards 100px to close it
          </h2>
          <p>{drawerContent}</p>
        </div>
      </DragCloseDrawer>
    </div>
    </>
  );
};

export default HoverCards;
