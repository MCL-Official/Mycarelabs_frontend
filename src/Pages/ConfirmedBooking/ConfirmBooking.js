import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ConfirmBooking = () => {
  const [countdown, setCountdown] = useState(2);
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

    const timer = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown > 1) {
          return prevCountdown - 1;
        } else {
          handleClick();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = () => {
    console.log(data.cardData, "dskjsnnjsnsdnsdn");

    // Conditionally navigate based on the title
    if (data && data?.cardData) {
      switch (data?.cardData?.title) {
        case 'Fremont Laboratory':
          window.location.href = "https://us.livehealth.solutions/crm/#/web/book-package/online-self-registration";
          break;
        case 'Riverside Mobile Testing':
          window.location.href = "https://us.livehealth.solutions/crm/#/web/book-package/riverside-mobile-testing";
          break;
        case 'SF Bay Area / Silicon Valley Mobile Testing':
          window.location.href = "https://us.livehealth.solutions/crm/#/web/book-package/mobile-testing-and-at-home-test-kits";
          break;
        case 'Riverside Gurdwara':
          window.location.href = "https://us.livehealth.solutions/crm/#/web/book-package/book-your-smart-combo-test-norcal";
          break;
        case 'PCR COVID-19, RSV, and Influenza A/B Test Kit':
          window.location.href = "https://us.livehealth.solutions/crm/#/web/book-package/self-testing-kit-for-covid-19-pre-book-your-order-999256";
          break;
        // Add more cases for other titles
        default:
          // navigate(`/default-route`, { state: { data } }); // Fallback route
          break;
      }
    } else {
      // navigate(`/default-route`, { state: { data } }); // Fallback route if no title is found
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold">
        Redirecting to HIPAA compliant patient registration page in {countdown} seconds...
      </div>
    </div>
  );
};

export default ConfirmBooking;
