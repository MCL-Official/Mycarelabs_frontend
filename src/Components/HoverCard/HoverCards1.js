import React, { useRef, useState, useEffect } from "react";
import NeumorphismButton from "../button/Button"; // Adjusted to the correct import path
import DragCloseDrawer from "../Custome_Modal/DragCloseDrawer";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { Helmet } from "react-helmet";
import { MotionConfig, motion } from "framer-motion";

// https://i.ibb.co/JxtLLhX/Blue-Anafsf.png
// https://i.ibb.co/NCz8Kt8/dadfs.png
  // "https://i.ibb.co/NCz8Kt8/dadfs.png",
  
  // "https://i.ibb.co/JxtLLhX/Blue-Anafsf.png"
const images = [
  "https://i.ibb.co/Jswx1fx/afljsdg.png",
  "https://i.ibb.co/NCz8Kt8/dadfs.png",
  "https://i.ibb.co/PTcg4Sq/6.jpg",
  "https://i.ibb.co/JxtLLhX/Blue-Anafsf.png",
  "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg",
  "https://i.ibb.co/ZBLZ7zp/7.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
];

const cardData = [
  {
    id: 1,
    category: "Northern California: Fremont Lab",
    title: "Fremont Laboratory",
    shortDescription:
      "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week.",
    longDescription:
      "high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours. Our smart combo test is $0 with any health insurance coverage.",
    timing: "8:30 AM - 6:00 PM",
    location: "5500 Stewart Avenue, Suite 108, Fremont, CA 94538",
    Contact: "1-800-790-4550"
  },
  {
    id: 2,
    category: "Bay Area Mobile Testing",
    title: "SF Bay Area / Silicon Valley Mobile Testing",
    shortDescription:
      "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
    longDescription:
      " Patients can simply schedule their mobile testing appointment online and then we dispatch our medical team to your desired location. Patients who test before 4:00pm will receive their results the same day and anytime after 4:00pm should expect their results the following business day. This service is by APPOINTMENT ONLY and operates within a 10 mile radius of Fremont.",
    timing: "10:00 AM - 3:00 PM",
    location: "Bay Area ",
    Contact: "1-800-790-4550"
  },
  {
    id: 3,
    category: "At-home Test Kit",
    title: "PCR COVID-19, RSV, and Influenza A/B Test Kit",
    shortDescription:
      "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
    longDescription: "In our commitment to making healthcare accessible and convenient, we present our comprehensive range of At-Home Test Kits. Discover the power of self-testing with our user-friendly kits, including the At-Home Influenza Test Kit and the At-Home COVID Test Kit. ",
    timing: "Anytime",
    location: "At Your Home",
    Contact: "1-800-790-4550"
  },
  {
    id: 4,
    category: "Riverside City Mobile Testing",
    title: "Riverside Mobile Testing",
    shortDescription:
      "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      "pre-register and you’ll breeze through our testing site in about five minutes. This service is by appointment only.",
    timing: "10:00 AM - 3:00 PM",
    location: "Riverside County",
    Contact: "1-800-790-4550"
  },
  
  {
    id: 5,
    category: "Riverside Gurdwara Pop-Up",
    title: "Riverside Gurdwara",
    shortDescription:
      "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
    longDescription:
      " pre-register and you’ll breeze through our testing site in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.",
    timing: "11:00 AM - 2:30 PM",
    location: "Riverside City",
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
            ref={carouselRef}
            className="flex overflow-x-auto space-x-8 p-4 mb-2 pb-2 scrollbar-hide"
          >
            {cardData.slice(0, 7).map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-112 transition-transform transform  hover:shadow-2xl"
              >
                <div className="rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative">
                    <img
                      src={images[index % images.length]}
                      className="h-56 w-full object-cover"
                      alt={card.title}
                    />

                    {/* Overlay that appears on hover */}
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="h-2/5">
                        <p className="font-bold text-lg">{card.title}</p>
                        <p className="text-sm">{card.shortDescription}</p>
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                    <div>

                      <h5 className="text-lg whitespace-nowrap text-red-500 text-ellipsis max-w-full font-bold mb-1">{card.category}</h5>

                      <h3 className="text-lg whitespace-nowrap text-blue-500 text-ellipsis max-w-full  mt-4 font-bold mb-1">Operation Hours</h3>

                      <div className="flex text-black  justify-center "><p className="text-mb font-medium font-inter text-black">
                        {card.category === "Riverside Gurdwara Pop-Up"
                          ? "Sunday :"
                          : card.category === "At-home Test Kit"
                            ? ""
                            : "Mon - Fri : "}
                      </p>
                        <p className="text-black font-medium ml-2">{" "}{card.category == "At-home Test Kit" ? "We bring the lab to your doorstep!" : card.timing}</p>
                      </div>
                      {/* <div className="flex  text-black justify-evenly">
                        <p className="mr-1 text-black font-medium ">Sat - Sun</p>
                        <p className="text-black  font-medium">9:00 AM - 4:00 PM</p>
                      </div> */}
                      <p className="text-mb  text-black font-medium  mt-4">
                        <span className="font-extrabold">Location : </span>{card.location}
                      </p>
                      <p className="text-mb  font-medium text-black mb-2">
                        <span className="font-extrabold">Call Us : </span>{card.Contact}
                      </p>
                      <div className="mb-1">

                        <span className="text-base font-bold  text-orange-600">
                          {card.category == "Northern California: Fremont Lab" ? "Walk-ins Welcome!" : ""}
                          {card.category == "Riverside City Mobile Testing" ? " Appointment only" : ""}
                          {card.category == "Bay Area Mobile Testing" ? " Appointment only" : ""}
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center mt-2">
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

export default HoverCards1;
