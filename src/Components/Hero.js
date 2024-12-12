import React, { useEffect, useState } from "react";
import DoctorVideo from "../Assets/myvid1.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../Styles/Hero.css";

import logo1 from "../Assets/Logo1.png";

const Logo = ({ color = "white" }) => {
  return (
    <Link to="/" className="flex justify-center items-center  lg:mb-0 lg:mr-5">
      <img
        src="https://i.ibb.co/L12cxJP/logo.png"
        className="max-w-[200px] max-h-[200px] lg:max-w-[450px] lg:max-h-[460px]"
        alt="My care Labs"
      />
    </Link>
  );
};

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
        if (letterIndex < words[wordIndex].length) {
          setDisplayText(
            (prevText) => prevText + words[wordIndex][letterIndex]
          );
          setLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsTyping(false);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText((prevText) => prevText.slice(0, -1));
        } else {
          setWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
          setLetterIndex(0);
          setIsTyping(true);
        }
      }
    }, 150);

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
        <p className="text-4xl font-bold pt-20">Test With </p>
          <Logo />
          {/* <h1 className="h-14 text-headline">{displayText}</h1> */}
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>50k+</p>
              <p>Patients Tested</p>
            </div>

            <div className="text-stats-container">
              <p>7 days a Week</p>
              <p>Days Open</p>
            </div>

            <div className="text-stats-container">
              <p>24-hour Results</p>
              <p>Turnaround Time</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div> */}
    </div>
  );
}

export default Hero;
