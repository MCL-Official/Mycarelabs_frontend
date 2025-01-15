import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import DateTimePicker from '../../Components/Booking/DateTimePicker';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import HoverDevCards from '../../Components/Seetings/HoverDevCards';
import { DivOrigami } from '../../Components/LogoOrigami/DivOrigami';
import { Helmet } from "react-helmet";
import Faq from '../Faq/Faq';
import Locations from '../../Components/Locations/Locations';
import { Feature } from '../../Components/SOLUTION/Infectious-desiase/Group/Feature';
import GetStartedCard from '../../Components/GetStartedCard/Getstarted';
import TabsFeatures from './TabsFeatures';
import { CrelioData } from "../../Components/Booking/data"


const BookTestDetails = () => {
  const { id } = useParams();
  console.log(id, "dkvjsdvjn");
  const [startDate, setStartDate] = useState();
  const location = useLocation();
  const cardData = location.state?.cardData;
  console.log(cardData, 'ashcbaschac');

  console.log(CrelioData, "sdvjsvnsdvnjvsn");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Check if the page has already been reloaded
    const reloaded = sessionStorage.getItem('reloaded');

    if (!reloaded) {
      // Set a flag in sessionStorage to indicate the page has been reloaded
      sessionStorage.setItem('reloaded', 'true');
      // Reload the page
      window.location.reload();
    } else {
      // If the page has already been reloaded, set the loading state to true
      setIsLoaded(true);
    }
  }, []);

  return (
    <>
      {/* <Navbar /> */}

      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>


      <div
        className="relative bg-cover bg-center h-[30rem]"
        style={{ backgroundImage: `url(${cardData?.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl font-bold sm:mt-1 mt-10 mb-2">{cardData?.title}</h1>
          {cardData?.title !== "Fremont Laboratory" &&
            <p className="text-lg font-bold">{cardData?.shortDescription}</p>}
          <p className="text-lg mt-2">{cardData?.longDescription}</p>
        </div>
      </div>
      <div className="relative container mx-auto z-15" style={{ marginTop: '-5rem' }}>
        {/* <div className="bg-white p-8 shadow-lg rounded-lg" style={{ background: 'none' }}> */}
        <DateTimePicker cardData={cardData} CrelioData={CrelioData} />

        <TabsFeatures />
        {/* <Locations/> */}
      </div>

      <div className="sm:flex justify-center  mt-5 bg-gradient-to-r from-blue-500 to-white p-10  rounded border-[1px]">
        <div className="text-center sm:flex items-center">
          <div className="mr-5 text-white">
            <h2 className="text-2xl font-bold">Creating Your Needs</h2>
            <p className="mt-2 text-gray-700 text-justify">At My Care Labs, your health and safety are our top priorities. We are dedicated to making your PCR testing experience as seamless as possible. Our team of experienced healthcare professionals ensures accurate results and a safe testing environment. Recognizing the critical role PCR testing plays in public health, we are committed to providing dependable and efficient testing services.</p>
            <p className="mt-2 text-gray-700 text-left">Located in Fremont, California, My Care Labs offers same-day PCR test results with convenient options to book appointments through our website, walk-ins, or via our Toll-Free Number. Our streamlined process ensures timely results, making us a trusted choice for COVID testing in the area. </p>

            <p className="mt-2 text-gray-700 text-left">Don’t let testing disrupt your plans or peace of mind. Choose My Care Labs for efficient, reliable, and prompt service. We are dedicated to supporting the health and safety of our community, every step of the way.
            At My Care Labs, you are more than a client—you are a valued member of our community. Your health matters to us, and we are here to help you stay informed and safe during these challenging times. </p>

            <a href="#" className="text-white hover:underline mt-4 no-underline inline-block">SEE CASE STUDIES →</a>
          </div>
          <div>


            <DivOrigami />
          </div>
        </div>
      </div>

      <Faq />

      <GetStartedCard />
      <HoverDevCards />
      {/* <Footer/> */}
      {/* </div> */}
    </>
  );
};

export default BookTestDetails;
