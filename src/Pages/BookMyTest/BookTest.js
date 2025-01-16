import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../Components/button/Button";
import Navbar from '../../Components/Navbar/Navbar';
import { Helmet } from "react-helmet";
import { MotionConfig, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import myImage from '../../Assets/22.png';



// Images
const images = [
  "https://i.ibb.co/Jswx1fx/afljsdg.png",
  "https://i.ibb.co/NCz8Kt8/dadfs.png",
  "https://i.ibb.co/W2h5h1J/DGDF.png",
  "https://i.ibb.co/JxtLLhX/Blue-Anafsf.png",
  "https://lightuptemples.com/wp-content/uploads/temple/profile_image/gurdwara-sahib-of-san-jose-usa.jpg",
  "https://i.ibb.co/ZBLZ7zp/7.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
];


// Component

const BookTest = () => {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToTop(); // Scroll to the top when the component mounts

    // Send the custom event to GTM

  });


  const cardData = [
    {
      id: 1,
      category: "Northern California: Fremont Lab",
      title: "Fremont Laboratory",
      longDescription: "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week for patients experiencing Covid-19 symptoms: high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours.",
      timing: "8:30 AM - 5:00 PM",
      location: "5500 Stewart Avenue, Suite 108, Fremont, CA 94538",
      Contact: "1-800-790-4550"
    },
    {
      id: 2,
      category: "Bay Area Mobile Testing",
      title: "Bay Area Mobile Testing",
      shortDescription: [
        " Available by appointment only",
        "Must be within a 15 mile radius of Fremont Lab",
        "Same day or 24 hour results"
      ],
      // "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
      longDescription:
        " Patients can simply schedule their mobile testing appointment online and then we dispatch our medical team to your desired location. Patients who test before 4:00pm will receive their results the same day and anytime after 4:00pm should expect their results the following business day. This service is by APPOINTMENT ONLY and operates within a 10 mile radius of Fremont.",
      timing: "10:00 AM - 3:00 PM",
      location: "Must be within a 15 mile radius of Fremont Lab",
      Contact: "1-800-790-4550"
    },
    {
      id: 3,
      category: "At-Home Test Kit",
      title: "At-Home Test Kit",
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

  const sample = () => {
    console.log("harsh sackanca");

  }
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  console.log(cardData, "carddadada");

  return (
    <>
      <Helmet>
        <title>COVID Test Locations Near You | My Care Labs</title>
        <meta name="description" content="Locate convenient COVID test sites near you with My Care Labs. Reliable, accurate testing for your safety and peace of mind. Schedule your appointment today" />
        <meta name="keywords" content="COVID test locations, My Care Labs, COVID testing near me" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      {/* <Navbar /> */}
      <div className="mt-5 via-transparent to-white">
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

        <div className="container mx-auto px-0">
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardData.slice(0, 8).map((card, index) => (
              <div key={index} className="relative group rounded-xl overflow-hidden shadow-lg flex flex-col">
                {/* Image */}
                <img
                  src={images[index % images.length]}
                  className="h-56 w-full object-cover"
                  alt={card.title}
                />

                {/* Hover Dropdown */}
                <div className="absolute top-[-100%] left-0 right-0  group-hover:top-0 transition-top duration-[150ms] ease-in-out z-20 p-4" style={{ background: 'linear-gradient(90deg, rgba(10, 122, 247, 1), rgba(6, 72, 145, 1))' }}>
                  <h5 className="text-2xl font-bold text-white text-left">{card.title}</h5>
                  {/* <p className="text-base text-white text-left  mt-2">{card.shortDescription}</p> */}
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
                    <h5 className="text-lg whitespace-nowrap  text-red-500 text-ellipsis max-w-full font-bold mb-1 font-inter">{card.category}</h5>
                    <h3 className="text-lg font-bold mt-2 font-inter  mb-[-6px]" style={{
                      background: 'linear-gradient(90deg, rgba(10, 122, 247, 1), rgba(6, 72, 145, 1))', WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>Operation Hours</h3>
                    <div className="flex text-black  justify-center "><p className="text-mb font-medium font-inter text-black">
                      {card.category === "Riverside Gurdwara Pop-Up"
                        ? "Sunday :"
                        : card.category === "At-home Test Kit"
                          ? ""
                          : "Mon - Fri : "}
                    </p>
                      <p className="text-black font-medium ml-2">{" "}{card.category == "At-home Test Kit" ? "We bring the lab to your doorstep!" : card.timing}</p>
                    </div>

                    <h3 className="text-lg text-blue-500 font-bold font-inter mb-[-4px]" style={{
                      background: 'linear-gradient(90deg, rgba(10, 122, 247, 1), rgba(6, 72, 145, 1))', WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>Location</h3>
                    <p className="text-black font-medium ">{card.location}</p>

                    <div className='flex flex-wrap  justify-center mt-4 hover:cursor-pointer' onClick={sample}>
                      <img src={myImage} alt="My Image" />
                      <p className="  text-blue-500 text-xl font-bold mb-2 hover:cursor-pointer font-inter" style={{
                        background: 'linear-gradient(90deg, rgba(10, 122, 247, 1), rgba(6, 72, 145, 1))', WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        <span className="font-bold"> </span>{card.Contact}
                      </p>
                    </div>

                    <div className="mb-1">
                      <span className=" text-lg font-bold" style={{
                        background: 'linear-gradient(90deg, rgba(10, 122, 247, 1), rgba(6, 72, 145, 1))', WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}>
                        {card.category == "Northern California: Fremont Lab" ? "Walk-ins Welcome!" : ""}
                        {card.category == "Riverside City Mobile Testing" ? " Appointment only" : ""}
                        {card.category == "Bay Area Mobile Testing" ? " Appointment only" : ""}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center mt-auto">
                    <Button cardData={{ ...card, imageUrl: images[index % images.length] }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}

export default BookTest;
