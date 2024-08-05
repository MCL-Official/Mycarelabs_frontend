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


const BookTestDetails = () => {
  const { id } = useParams();
  console.log(id,"dkvjsdvjn");
  const [startDate, setStartDate] = useState();
  const location = useLocation();
  const cardData = location.state?.cardData;
  console.log(cardData,'ashcbaschac');
  
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
        className="relative bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${cardData?.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl font-bold mb-2">{cardData?.title}</h1>
          <p className="text-lg font-bold">{cardData?.shortDescription}</p>
          <p className="text-lg mt-2">{cardData?.longDescription}</p>
        </div>
      </div>
      <div className="relative container mx-auto z-15" style={{ marginTop: '-29.5vh' }}>
        {/* <div className="bg-white p-8 shadow-lg rounded-lg" style={{ background: 'none' }}> */}
          <DateTimePicker cardData={cardData} />
        
          <TabsFeatures/> 
      <Locations/>






        </div>
       
          <div className="sm:flex justify-center  mt-5 bg-gradient-to-r from-blue-500 to-white p-10  rounded border-[1px]">
       <div className="text-center sm:flex items-center">
    <div className="mr-5 text-white">
      <h2 className="text-2xl font-bold">Creating Your Needs</h2>
      <p className="mt-2 text-gray-700 text-justify">Your health and safety are our top priorities. We are dedicated to ensuring that your PCR testing experience is as seamless as possible. Our team of healthcare professionals is committed to providing accurate results 
        and a safe testing environment. We know that PCR testing is a critical step in ensuring public health, and we take this responsibility seriously. You can rely on My Care Labs for comprehensive and reliable PCR testing services in Fremont, California.</p>
      <p className="mt-2 text-gray-700 text-left">In summary, My Care Labs in Fremont, California, offers same-day PCR testing result services with convenient appointment options through our website, walk-in availability, or a Toll-Free Number for phone bookings. We provide free PCR tests and ensure prompt results, making us your trusted choice for COVID testing in the area. </p>
     
      <p className="mt-2 text-gray-700 text-left">Do not let testing be a hurdle in your plans or peace of mind. Choose My Care Labs for your PCR testing needs, and experience efficient, reliable, and fast service. We are committed to supporting the health and safety of our community, and we are here to support you every step of the way.  </p>
      <p className="mt-2 text-gray-700 text-left">With My Care Labs, you are not just a client; you are a valued member of our community, and your health matters to us. Let us be your partner in staying safe and informed during these challenging times.  </p>
     
      <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">SEE CASE STUDIES →</a>
    </div>
    <div>


      <DivOrigami/>
    </div>
  </div>
</div>
      
        <Faq/>

        <GetStartedCard/>
        <HoverDevCards/>
          {/* <Footer/> */}
      {/* </div> */}
    </>
  );
};

export default BookTestDetails;
