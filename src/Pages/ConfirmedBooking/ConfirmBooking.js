import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";


const RoundedSlideButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-blue-500 px-4 py-2 font-semibold
        uppercase text-blue-500 transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-blue-500
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <span>See Test Location</span>
    </button>
  );
};

const ConfirmBooking = () => {
  const [countdown, setCountdown] = useState(1); // Countdown starts from 5 seconds
  const [redirectMessage, setRedirectMessage] = useState('');
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    scrollToTop(); // Scroll to the top when the component mounts

    // Send the custom event to GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'confirmBooking',
      bookingValue: 1 // You can add more data here if needed
    });

    if (data && data?.cardData) {
      switch (data?.cardData?.title) {
        case 'Fremont Laboratory':
          setRedirectMessage(`Redirecting to HIPAA compliant patient registration page in ${countdown} seconds...`);
          startRedirectTimer("https://us.livehealth.solutions/crm/#/web/book-package/online-self-registration");
          break;
        case 'Riverside Mobile Testing':
          setRedirectMessage(`Redirecting to HIPAA compliant patient registration page in ${countdown} seconds...`);
          startRedirectTimer("https://us.livehealth.solutions/crm/#/web/book-package/riverside-mobile-testing");
          break;
        case 'SF Bay Area / Silicon Valley Mobile Testing':
          setRedirectMessage(`Redirecting to HIPAA compliant patient registration page in ${countdown} seconds...`);
          startRedirectTimer("https://us.livehealth.solutions/crm/#/web/book-package/mobile-testing-and-at-home-test-kits");
          break;
        case 'Riverside Gurdwara':
          setRedirectMessage(`Redirecting to HIPAA compliant patient registration page in ${countdown} seconds...`);
          startRedirectTimer("https://us.livehealth.solutions/crm/#/web/book-package/book-your-smart-combo-test-norcal");
          break;
        case 'PCR COVID-19, RSV, and Influenza A/B Test Kit':
          setRedirectMessage(`Redirecting to HIPAA compliant patient registration page in ${countdown} seconds...`);
          startRedirectTimer("https://us.livehealth.solutions/crm/#/web/book-package/self-testing-kit-for-covid-19-pre-book-your-order-999256");
          break;
        default:
          // Show a different message and button for cases not listed
          setRedirectMessage("This location/service is currently unavailable. Please take a look at our at-home test kits or Mobile Testing for supplemental services");
          setShowButton(true); // Show the button
          break;
      }
    } else {
      // Fallback message and button if no title is found
      setRedirectMessage("This location/service is currently unavailable. Please take a look at our at-home test kits or Mobile Testing for supplemental services");
      setShowButton(true); // Show the button
    }
  }, [data, countdown]);

  const startRedirectTimer = (url) => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown > 1) {
          return prevCountdown - 1;
        } else {
          clearInterval(timer);
          window.location.href = url;
          return 0;
        }
      });
    }, 1000);
  };

  const handleButtonClick = () => {
    navigate('/covid-test-locations');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold py-10">
        {redirectMessage}
      </div>
      {showButton && (
        <RoundedSlideButton 
          onClick={handleButtonClick} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          See Available Tests
        </RoundedSlideButton>
      )}
    </div>
  );
};

export default ConfirmBooking;
