import React, { useEffect, useState } from "react";
// import DoctorVideo from "../Assets/hometop.mp4"; // Ensure you have the video file in the specified path
// import DoctorVideo from ".././hometop.mp4"; // Ensure you have the video file in the specified path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  const words = ['Book Your Test', 'Book Your Appointments', 'Check Test Results', 'Book Our Home Test Kits'];
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        // Typing mode: Add one letter at a time
        if (letterIndex < words[wordIndex].length) {
          setDisplayText(prevText => prevText + words[wordIndex][letterIndex]);
          setLetterIndex(prevIndex => prevIndex + 1);
        } else {
          // End of word: Switch to backspacing mode
          setIsTyping(false);
        }
      } else {
        // Backspacing mode: Remove one letter at a time
        if (displayText.length > 0) {
          setDisplayText(prevText => prevText.slice(0, -1));
        } else {
          // End of backspacing: Switch to next word or loop back
          setWordIndex(prevIndex => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
          setLetterIndex(0);
          setIsTyping(true);
        }
      }
    }, 150); // Adjust typing speed here

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [displayText, wordIndex, letterIndex, isTyping, words]);


  // useEffect(() => {
  //   const cursorInterval = setInterval(() => {
  //     setShowCursor(prevShowCursor => !prevShowCursor);
  //   }, 500); // Cursor blink speed

  //   return () => clearInterval(cursorInterval);
  // }, []);
  return (
    <div className="section-container">
      <div className="hero-section">
        <video className="hero-video" src={"https://appinventiv.com/wp-content/themes/twentynineteen-child/new-images/video/home-video-new.mp4"} autoPlay muted loop playsInline />
        <div className="text-section">
          <p className="text-headline">Welcome to </p>
          <h2 className="sample text-2xl">
            My Care Labs
          </h2>
          <p className="text-description">
            Discover Compherensive Health Solutions at My Care
            Labs. From infectious deseases to wellness and 
            Toxicology , we're here for your well-being.
          </p>
            <h1>{displayText}</h1>
            {/* <h1>{displayText}{showCursor && '|'}</h1> */}
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
