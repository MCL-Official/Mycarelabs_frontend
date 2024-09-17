import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../Components/button/Button";
import Navbar from '../../Components/Navbar/Navbar';
import { Helmet } from "react-helmet";



// Images
const images = [
  "https://i.ibb.co/Jswx1fx/afljsdg.png",
  "https://i.ibb.co/NCz8Kt8/dadfs.png",
  "https://i.ibb.co/PTcg4Sq/6.jpg",
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
        <div className="container mx-auto px-1">
          <div className="grid grid-cols-1   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardData.slice(0, 8).map((card, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg flex flex-col">
                <img
                  src={images[index % images.length]} // Adjusted to use % to cycle through images
                  className="h-56 w-full object-cover"
                  alt={card.title}
                />
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
                  <div className="flex justify-center mt-auto">
                    {/* {console.log(card.id,"carrdddddddd")} */}
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
