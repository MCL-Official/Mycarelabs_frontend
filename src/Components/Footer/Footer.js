import React from "react";
import "../../Styles/Footer.css";
import SubscribeNewsletter from "../SubscribeNewsletter";
import { useNavigate } from "react-router-dom";
import logo1 from "../../Assets/Logo1.png";

function Footer() {

  // const match = () => {
  //    cardData.category
  // }

  const images = [
    "https://img.freepik.com/free-photo/statue-rainbow-bridge-night-tokyo-japan_335224-8.jpg?t=st=1719954263~exp=1719957863~hmac=08690e59529a0bc028e23fda8e4fa0f44750548434c108235e7e0f403667f131&w=2000",
    "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?t=st=1719954266~exp=1719957866~hmac=73b10f4318bceabf068b52ec1650bbd1fdcf461ce06775a0c40acc3b63049a1a&w=2000",
    "https://timesreview-images.s3.amazonaws.com/wp-content/uploads/sites/3/2011/11/11235607/PBMC1.jpg",
    "https://img.freepik.com/free-photo/empire-state-building-daylight_23-2150897493.jpg?t=st=1719954413~exp=1719958013~hmac=426c13ce93779b5ca5b1a8752df1adf6adb8ed2f2af97d96269c72c8a60af5b3&w=900",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
  ];

  const cardData = [
    {
      category: "NorCal: Fremont Lab",
      title: "Fremont Laboratory",
      shortDescription:
        "My Care Labs offers instant urgent COVID-19, RSV, and Influenza A/B PCR testing services 7 days a week.",
      longDescription:
        "high fever, chills, night sweats, etc. Patients receive PCR test results same-day or within 24 hours. Our smart combo test is $0 with any health insurance coverage.",
    },
    {
      category: "SoCal: Riverside Mobile Testing",
      title: "Riverside Mobile Testing",
      shortDescription:
        "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
      longDescription:
        "pre-register and you’ll breeze through our testing site in about five minutes. This service is by appointment only.",
    },
    {
      category: "NorCal: Bay Area Mobile Testing",
      title: "SF Bay Area / Silicon Valley Mobile Testing",
      shortDescription:
        "My Care Labs mobile testing service allows for our team to bring the lab to your doorstep or facility.",
      longDescription:
        " Patients can simply schedule their mobile testing appointment online and then we dispatch our medical team to your desired location. Patients who test before 4:00pm will receive their results the same day and anytime after 4:00pm should expect their results the following business day. This service is by APPOINTMENT ONLY and operates within a 10 mile radius of Fremont.",
    },
    {
      category: "SoCal: Riverside Pop-up",
      title: "Riverside Gurdwara",
      shortDescription:
        "Get COVID-19/RSV/Flu PCR results in 24 hours. To speed up your testing appointment.",
      longDescription:
        " pre-register and you’ll breeze through our testing site in about five minutes. You can always register in person as well for drop-in testing – no appointment needed.",
    },
    {
      category: "At Home Test Kit",
      title: "PCR COVID-19, RSV, and Influenza A/B Test Kit",
      shortDescription:
        "Welcome to My Care Labs Medical Lab, your dedicated partner in health diagnostics, proudly serving the Fremont, California community.",
      longDescription: "In our commitment to making healthcare accessible and convenient, we present our comprehensive range of At-Home Test Kits. Discover the power of self-testing with our user-friendly kits, including the At-Home Influenza Test Kit and the At-Home COVID Test Kit. ",
    },
    {
      category: "NorCal: Union City Pop-up",
      title: "Union City Pop-up",
      shortDescription:
        "My Care Labs offers $0 out of pocket COVID-19 PCR and Rapid testing in Union City.",
      longDescription: "Detailed information about our light solutions...",
    },
    {
      category: "SoCal: Corona Mobile Testing",
      title: "Mobile Testing: Corona, CA",
      shortDescription:
        "Same-day Covid/Flu PCR results available. To speed up your testing.",
      longDescription: "Detailed information about our audio solutions...",
    },
  ];


  const navigate = useNavigate();

  const handleNavigation = (item,index) => {
    console.log("handleNavigationv",index,item);
    const cardWithImage = {
      ...item,
      imageUrl: images[index % images.length],
    };  
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
    navigate(`/covid-test-locations/${index}`, {
      state: { cardData: cardWithImage },
    });
  };

  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="ft-info">
          <div className="ft-info-p1">
            <p className="ft-title">
            <img src={logo1} className="h-20" alt="Flowbite Logo" />
            </p>
            <p className="ft-description">
              Talk to online doctors and get medical advice, online
              prescriptions, refills and medical notes within minutes. On-demand
              healthcare services at your fingertips.
            </p>
          </div>

          <SubscribeNewsletter />
        </div>

        <div className="ft-list">
          <p className="ft-list-title">Home</p>
          <ul className="ft-list-items">
          
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/testing-solutions">Testing Solutions</a>
            </li>
            <li>
              <a href="/covid-test-locations">Testing Locations</a>
            </li>
            <li>
              <a href="/covid-test-locations">Book An Appointment</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="ft-list">
          <p className="ft-list-title">All Locations</p>
          <ul className="ft-list-items">
      {cardData && cardData.length > 0 ? (
        cardData.map((item,index) => {
          console.log(item.category, "sajchasc");
          return (
            <li key={item.id}>
              <button onClick={() => handleNavigation(item,index)}>
                {item.category}
              </button>
            </li>
          );
        })
      ) : (
        <p>No locations available.</p>
      )}
    </ul>

          {/* <ul className="ft-list-items">
            <li  >
              {cardData.category}
            </li>
            <li>
              <Link to={"/covid-test-locations/:id"}>NorCal: Fremont Lab</Link>
            </li>
            <li>
              <Link to={"/covid-test-locations/:id"}>NorCal: Union City Pop-up</Link>
            </li>
            <li>
              <Link to={"/covid-test-locations/:id"}>SoCal: Corona Mobile Testing</Link>
            </li>
            <li>
              <Link to={"/legal"}>SoCal: Riverside Pop-up</Link>
            </li>
            <li>
              <Link to={"/legal"}>SoCal: Riverside Mobile Testing</Link>
            </li>
            <li>
              <Link to={"/legal"}>At-Home COVID-19 PCR Test Kit</Link>
            </li>
          </ul> */}
        </div>

        <div className="ft-list" id="contact">
          <p className="ft-list-title">Talk To Us</p>
          <ul className="ft-list-items">
            <li>
              <a href="mailto:support@mycarelabs.com">support@mycarelabs.com</a>
            </li>
            <li>
              {/* <a href="mailto:appointment@healthplus.com">
                appointment@hmycarelabs.com
              </a> */}
            </li>
            <li>
              <a href="tel:+1-800-790-4550">Call: +1-800-790-4550</a>
            </li>
            <li>
              <a href="tel:+1-888-289-9940">Fax: +1-888-289-9940</a>
            </li>
            <li>
              <a href="tel:+022 2326 6232">5500 Stewart Avenue, Suite 108,
                <br></br>
                Fremont, CA 94538
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-copyright">
        <p>Copyright © 2024 My Care Labs. All Rights Reserved.</p>

        <ul className="ft-social-links">
        <li>
    <a
      href="https://www.instagram.com/mycarelabsofficial/"
      title="Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path d="M224.1 141c-63.6 0-115.1 51.5-115.1 115.1S160.5 371.2 224.1 371.2s115.1-51.5 115.1-115.1S287.7 141 224.1 141zm0 190.6c-41.7 0-75.5-33.8-75.5-75.5s33.8-75.5 75.5-75.5 75.5 33.8 75.5 75.5-33.8 75.5-75.5 75.5zm146.4-194.8c0 14.9-12 26.9-26.9 26.9h-27.2c-14.9 0-26.9-12-26.9-26.9v-27.2c0-14.9 12-26.9 26.9-26.9h27.2c14.9 0 26.9 12 26.9 26.9v27.2zm76.1 27.2c-1.7-35.7-9.9-67.3-35.8-93.2-25.9-25.9-57.5-34.1-93.2-35.8-36.7-2.1-147.3-2.1-184 0-35.7 1.7-67.3 9.9-93.2 35.8s-34.1 57.5-35.8 93.2c-2.1 36.7-2.1 147.3 0 184 1.7 35.7 9.9 67.3 35.8 93.2 25.9 25.9 57.5 34.1 93.2 35.8 36.7 2.1 147.3 2.1 184 0 35.7-1.7 67.3-9.9 93.2-35.8 25.9-25.9 34.1-57.5 35.8-93.2 2.1-36.7 2.1-147.3 0-184zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.2 9s-102.8 2.6-132.2-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.2s-2.6-102.8 9-132.2c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.2-9s102.8-2.6 132.2 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.2s2.6 102.8-9 132.2z" />
      </svg>
    </a>
  </li>
          <li>
            <a
              href="https://www.linkedin.com/company/mycarelabs"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://www.facebook.com/MyCareLabsOfficial/"
              title="FaceBook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 320 512"
              >
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="https://x.com/"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
              </svg>
            </a>
          </li>
  
</ul>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default Footer;
