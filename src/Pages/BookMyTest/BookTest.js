import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "../../Components/button/Button";
import Navbar from '../../Components/Navbar/Navbar';
import { Helmet } from "react-helmet";


const img = "https://imagesuploadforwebsite.s3.amazonaws.com/card1.jpg";
const img1 = "https://imagesuploadforwebsite.s3.amazonaws.com/card2.jpg";
const img2 = "https://imagesuploadforwebsite.s3.amazonaws.com/card3.jpg";
const img3 = "https://imagesuploadforwebsite.s3.amazonaws.com/card5.jpg";
const img5 = "https://imagesuploadforwebsite.s3.amazonaws.com/card6.jpg";
const img60 = "https://imagesuploadforwebsite.s3.amazonaws.com/card4.jpg";
const img6 = "https://imagesuploadforwebsite.s3.amazonaws.com/card4.webp";

// const images = [img, img1, img2, img3, img5, img6];
const images = [
  "https://img.freepik.com/free-photo/statue-rainbow-bridge-night-tokyo-japan_335224-8.jpg?t=st=1719954263~exp=1719957863~hmac=08690e59529a0bc028e23fda8e4fa0f44750548434c108235e7e0f403667f131&w=2000",
  "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?t=st=1719954266~exp=1719957866~hmac=73b10f4318bceabf068b52ec1650bbd1fdcf461ce06775a0c40acc3b63049a1a&w=2000",
  "https://img.freepik.com/free-photo/tokyo-skyline-with-tokyo-tower-rainbow-bridge_1339-6783.jpg?t=st=1719954311~exp=1719957911~hmac=ff2ae36d9febf6279c18ecf7a75458fbd9fc36f59d6bcc3e1f6ca036b808d532&w=2000",
  "https://img.freepik.com/free-photo/empire-state-building-daylight_23-2150897493.jpg?t=st=1719954413~exp=1719958013~hmac=426c13ce93779b5ca5b1a8752df1adf6adb8ed2f2af97d96269c72c8a60af5b3&w=900",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
];
const BookTest = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer
  const [drawerContent, setDrawerContent] = useState(""); // State to control drawer content

  const handleLearnMoreClick = (content) => {
    setDrawerContent(content);
    setDrawerOpen(true);
  };

  const handleBookNowClick = (id) => {
    console.log('Navasas' , id);
    navigate(`/covid-test-locations/${id}`);
  };

  const cardData = [
    {
      id: 1,
      category: "NorCal: Fremont Lab",
      title: "Fremont Laboratory",
      shortDescription:
        "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week.",
      longDescription:
        "Detailed information about our infectious disease testing services...",
      timing: "Mon-Fri 8:30 AM - 6:00 PM, Sat-Sun 9:00 AM - 4:00 PM",
      location: "Fremont, CA 94538"
    },
    {
      id: 2,
      category: "SoCal: Riverside Mobile Testing",
      title: "Riverside Mobile Testing",
      shortDescription:
        "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
      longDescription:
        "Detailed information about our toxicology testing services...",
      timing: "Mon-Fri 9:00 AM - 5:00 PM (Appointment only)",
      location: "Riverside County"
    },
    {
      id: 3,
      category: "NorCal: Bay Area Mobile Testing",
      title: "SF Bay Area / Silicon Valley Mobile Testing",
      shortDescription:
        "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
      longDescription:
        "Detailed information about our wellness testing services...",
      timing: "Mon-Fri 9:00 AM - 4:00 PM, Sat-Sun (Appointment only)",
      location: "Alameda County"
    },
    {
      id: 4,
      category: "SoCal: Riverside Pop-up",
      title: "Riverside Gurdwara",
      shortDescription:
        "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
      longDescription:
        "Detailed information about our mobile testing services...",
      timing: "Sundays 11:30 AM - 3:30 PM",
      location: "Riverside County"
    },
    {
      id: 5,
      category: "FedEx Overnight Test Kits",
      title: "PCR COVID-19, RSV, and Influenza A/B Test Kit",
      shortDescription:
        "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
      longDescription: "Detailed information about our at-home test kits...",
      timing: "At Your Home",
      location: ""
    },
    {
      id: 6,
      category: "NorCal: Union City Pop-up",
      title: "Union City Pop-up",
      shortDescription:
        "My Care Labs offers $0 out of pocket COVID-19 PCR and Rapid testing in Union City.",
      longDescription: "Detailed information about our light solutions...",
      timing: "Mon, Wed, Fri 8:30 AM - 4:00 PM",
      location: "Union City, CA 94587"
    },
    {
      id: 7,
      category: "SoCal: Corona Mobile Testing",
      title: "Mobile Testing: Corona, CA",
      shortDescription:
        "Same-day Covid/Flu PCR results available. To speed up your testing.",
      longDescription: "Detailed information about our audio solutions...",
      timing: "Mon-Fri 9:00 AM - 5:00 PM",
      location: "Corona, CA 92882"
    },
    {
        id: 8,
        category: "SoCal: Corona Mobile Testing",
        title: "Mobile Testing: Corona, CA",
        shortDescription:
          "Same-day Covid/Flu PCR results available. To speed up your testing.",
        longDescription: "Detailed information about our audio solutions...",
        timing: "Mon-Fri 9:00 AM - 5:00 PM",
        location: "Corona, CA 92882"
      },
  ];

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  console.log(cardData,"carddadada");

  return (
    <>
      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
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
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cardData.slice(0, 8).map((card, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg flex flex-col">
                <img
                  src={images[index % images.length]} // Adjusted to use % to cycle through images
                  className="h-56 w-full object-cover"
                  alt={card.title}
                />
                <div className="p-4 bg-white flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-sm text-blue-400">
                      {card.category}
                    </span>
                    <h5 className="text-lg font-bold mb-1">{card.title}</h5>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {card.shortDescription}
                      <button
                        className="text-sm text-blue-500 hover:underline ml-1"
                        onClick={() => handleLearnMoreClick(card.longDescription)}
                      >
                        Learn More
                      </button>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-bold">Hours: </span>{card.timing}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-bold">Location: </span>{card.location}
                    </p>
                  </div>
                  <div className="flex justify-center mt-auto">
                    {console.log(card.id,"carrdddddddd")}
                    <Button   slug={index}
                      cardData={{ ...card, imageUrl: images[index % images.length] }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BookTest;
