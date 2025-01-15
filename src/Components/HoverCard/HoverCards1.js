import React, { useRef, useState, useEffect } from "react";
import NeumorphismButton from "../button/Button"; // Adjusted to the correct import path
import DragCloseDrawer from "../Custome_Modal/DragCloseDrawer";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import myImage from '../../Assets/22.png';
import { Helmet } from "react-helmet";
import { MotionConfig, motion } from "framer-motion";

// https://i.ibb.co/JxtLLhX/Blue-Anafsf.png
// https://i.ibb.co/NCz8Kt8/dadfs.png
// "https://i.ibb.co/NCz8Kt8/dadfs.png",

// "https://i.ibb.co/JxtLLhX/Blue-Anafsf.png"
const images = [
  "https://i.ibb.co/Jswx1fx/afljsdg.png",
  "https://i.ibb.co/JxtLLhX/Blue-Anafsf.png",
  "https://i.ibb.co/W2h5h1J/DGDF.png",
  "https://i.ibb.co/NCz8Kt8/dadfs.png",
  "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg",
  "https://i.ibb.co/ZBLZ7zp/7.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
];

const cardData = [
  {
    id: 1,
    category: "Northern California: Fremont Lab",
    title: "Fremont Laboratory",
    shortDescription: [
      "COVID-19, RSV & FLU A/B",
      "Wellness Testing ",
      "Toxicology Testing",
      "UTI Testing (coming soon)",
    ],
    longDescription: "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week for patients experiencing Covid-19 symptoms: high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours.",
    timing: "8:30 AM - 5:00 PM",
    location: "5500 Stewart Avenue, Suite 108, Fremont, CA 94538",
    Contact: "1-800-790-4550"
  },
  {
    id: 2,
    category: "Bay Area Mobile Testing",
    title: "Bay Area Mobile Testing",
    addedDescription: "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
    shortDescription: [
      "Available by appointment only",
      "Must be within a 15 mile radius of Fremont Lab",
      "Same day or 24 hour results"
    ],
    // "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
    longDescription:
      "Patients can simply schedule their mobile testing appointment online and then we dispatch our medical team to your desired location. Patients who test before 4:00pm will receive their results the same day and anytime after 4:00pm should expect their results the following business day. This service is by APPOINTMENT ONLY and operates within a 10 mile radius of Fremont.",
    timing: "10:00 AM - 3:00 PM",
    location: "Must be within a 15 mile radius of Fremont Lab",
    Contact: "1-800-790-4550"
  },
  {
    id: 3,
    category: "At-Home Test Kit",
    title: "At-Home Test Kit",
    addedDescription: "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
    shortDescription: [
      "Delivered right to your door step!",
      "We provide the shipping and testing materials",
      "Results within 24-48 hours"
    ],
    // "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, e to My Care Labs Medical Lab, your dedicated partner in health diagnostics, pe to My Care Labs Medicaproudly serving the Fremont, California community.",
    longDescription: "In our commitment to making healthcare accessible and convenient, we present our comprehensive range of At-Home Test Kits. Discover the power of self-testing with our user-friendly kits, including the At-Home Influenza Test Kit and the At-Home COVID Test Kit. ",
    timing: "Anytime",
    location: "Order Online - We Bring the Lab to Your Doorstep",
    Contact: "1-800-790-4550"
  },
  {
    id: 4,
    category: "Riverside City Mobile Testing",
    title: "Riverside Mobile Testing",
    addedDescription: "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    shortDescription:
      [
        "Available by appointment only",
        "Must be within Riverside City",
        "Results within 24-48 hours"
      ],

    // "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      "pre-register and you’ll breeze through our testing site in about five minutes. This service is by appointment only.",
    timing: "10:00 AM - 3:00 PM",
    location: "Must be within a 10 mile radius of Riverside City",
    Contact: "1-800-790-4550"
  },

  {
    id: 5,
    category: "Riverside Gurdwara Pop-Up",
    title: "Riverside Gurdwara",
    addedDescription: "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    shortDescription:
      [
        "Available by appointment only",
        "Only on Sundays",
        "Results within 24-48 hours"
      ],

    // "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      " pre-register and you’ll breeze through our testing site in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.",
    timing: "11:00 AM - 2:30 PM",
    location: "7940 Mission Blvd, Riverside Valley, CA 92509",
    Contact: "1-800-790-4550"
  },

];


const HoverCards1 = () => {
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

  const sample = () => {
    console.log("harsh sackanca");

  }
  return (
    <>
      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <div className=" overflow-hidden ">
        <br></br>
        <br></br>
        <br></br>

        <div className="relative">
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            onClick={scrollLeft}
          >
            <MdOutlineKeyboardArrowLeft size={24} />
          </button>
          <div
            ref={carouselRef} className="flex overflow-x-auto rounded-xl  space-x-8 p-4 mb-2 pb-2 scrollbar-hide">

            {cardData.slice(0, 8).map((card, index) => (
              <div
                key={index}
                className="relative group  rounded-xl  overflow-hidden flex-shrink-0 w-80 h-112 transition-transform transform  hover:shadow-2xl shadow-lg flex flex-col "
              >
                {/* Image */}
                <img
                  src={images[index % images.length]}
                  className="h-64 w-full rounded-xl  object-cover" // Adjust height and width
                  alt={card.title}
                />

                {/* Hover Dropdown */}
                <div
                  className="absolute bg-gradient-to-l from-[#a3beff] to-[#5084ff]  top-[-100%] left-0  rounded-xl  right-0 group-hover:top-0 transition-top duration-[150ms] ease-in-out z-20 p-4"
                  style={{
                    //background: 'linear-gradient(90deg, rgba(204, 0, 0, 1), rgba(153, 0, 0, 1))',
                  }}
                >
                  <h5 className="text-xl font-extrabold text-white text-left">{card.title}</h5>
                  {/* <p className="text-base mb-1 text-white text-left mt-2">{card.shortDescription}</p> */}
                  {Array.isArray(card.shortDescription) ? (
                    <ul className="text-base mb-1 text-white text-left list-inside pl-0 mt-2 ">
                      {card.shortDescription.map((item, idx) => (
                        <li key={idx} className="list-disc"> {/* Use list-disc for bullet points */}
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-base mb-1 text-white text-left mt-2">
                      {card.shortDescription}
                    </p>
                  )}

                </div>

                {/* Card Content */}
                <div className="p-6 bg-white flex flex-col justify-between flex-grow z-10 relative">
                  <div>
                    <h5 className="text-lg whitespace-nowrap text-red-600 text-ellipsis max-w-full font-bold mb-1 font-inter">
                      {card.category}
                    </h5>
                    <h3
                      className="text-lg font-bold mt-2  font-inter mb-[-6px] bg-[#5084ff]"
                      style={{
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Operation Hours
                    </h3>
                    <div className="flex text-black justify-center ">
                      <p className="text-mb font-medium font-inter text-black ">
                        {card.category === "Riverside Gurdwara Pop-Up"
                          ? "Sunday :"
                          : card.category === "At-home Test Kit"
                            ? ""
                            : "Mon - Fri : "}
                      </p>
                      <p className="text-black font-medium ml-2">
                        {" "}
                        {card.category === "At-home Test Kit" ? "We bring the lab to your doorstep!" : card.timing}
                      </p>
                    </div>

                    <h3
                      className="text-lg mt-2 p font-bold font-inter mb-[-4px] bg-[#5084ff]"
                      style={{

                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Location
                    </h3>
                    <p className="text-black font-medium ">{card.location}</p>

                    <div className="flex flex-wrap justify-center mt-4 hover:cursor-pointer " onClick={sample}>
                      <img src={myImage} alt="My Image" />
                      <p
                        className="bg-[#5084ff] text-xl font-bold  hover:cursor-pointer font-inter mb-[-15px]"
                        style={{
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        <span className="font-bold"> </span>
                        {card.Contact}
                      </p>
                    </div>

                    <div className="mb-1">
                      <span
                        className="text-lg font-extrabold bg-[#5084ff]"
                        style={{
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {card.category === "Northern California: Fremont Lab" ? "Walk-ins Welcome!" : ""}
                        {card.category === "Riverside City Mobile Testing" ? " Appointment only" : ""}
                        {card.category === "Bay Area Mobile Testing" ? " Appointment only" : ""}
                        {card.category === "At-Home Test Kit" ? "At Your Home" : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-auto">
                    <NeumorphismButton cardData={{ ...card, imageUrl: images[index % images.length] }} />
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

export default HoverCards1;
