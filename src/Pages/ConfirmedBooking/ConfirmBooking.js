import React, { useState, useEffect } from 'react';

const ConfirmBooking = () => {
  const [countdown, setCountdown] = useState(5);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use 'smooth' for smooth scrolling, 'auto' for instant scrolling
    });
  };

  useEffect(() => {
    scrollToTop(); // Scroll to the top when the component mounts

    const timer = setInterval(() => {
      setCountdown(prevCountdown => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      window.location.href = 'https://us.crelio.solutions/crm/#/web/book-package/online-self-registration';
    }

    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold">Redirecting in {countdown} seconds...</div>
    </div>
  );
}

export default ConfirmBooking;
