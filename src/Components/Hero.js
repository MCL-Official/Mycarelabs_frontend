import React, { useEffect, useState } from "react";
import DoctorVideo from "../Assets/myvid.mp4"; // Ensure you have the video file in the specified path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/covid-test-locations");
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

  const words = [
    "Book Your Test",
    "Book Your Appointments",
    "Check Test Results",
    "Book Our Home Test Kits",
  ];
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTyping) {
        // Typing mode: Add one letter at a time
        if (letterIndex < words[wordIndex].length) {
          setDisplayText(
            (prevText) => prevText + words[wordIndex][letterIndex]
          );
          setLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          // End of word: Switch to backspacing mode
          setIsTyping(false);
        }
      } else {
        // Backspacing mode: Remove one letter at a time
        if (displayText.length > 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
        } else {
          // End of backspacing: Switch to next word or loop back
          setWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
          setLetterIndex(0);
          setIsTyping(true);
        }
      }
    }, 150); // Adjust typing speed here

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [displayText, wordIndex, letterIndex, isTyping, words]);

  return (
    <div className="section-container">
      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      
      <div className="hero-section">
        <video
          className="hero-video"
          src={DoctorVideo}
          autoPlay
          muted
          loop
          playsInline
          title="Welcome to My Care Labs"
        />
        <div className="text-section">
          <p className="text-4xl pt-28">Welcome to </p>
          <h2 className="sample text-6xl">My Care Labs</h2>
          <p className="text-description mb-2">
            Discover Comprehensive Health Solutions at My Care Labs. From
            infectious diseases to wellness and toxicology, we're here for your
            well-being.
          </p>
          <h1 className="h-14">{displayText}</h1>
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
