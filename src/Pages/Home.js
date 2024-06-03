import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import InsuranceAccepted from "../Components/InsuranceAccepted";
import HoverCards from "../Components/HoverCard/HoverCards";
import { TextParallaxContentExample } from '../Components/Scroll_Animation/TextParallaxContent';
// import BookAppointment from "../Components/BookAppointment";
// import Reviews from "../Components/Reviews";
// import Doctors from "../Components/Doctors";
// import Footer from "../Components/Footer";
// import ScrollAnimation from "../Components/Animation/CaseStudyScroller";
// import TestMenu from "../Components/TestMenu/TestMenu";// In Home.js
// import CaseStudyScroller from "../Components/Animation/CaseStudyScroller";
import ShuffleHero from "../Components/shuffel/SuffleHero";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      {/* <ShuffleHero/> */}
      <HoverCards />
      <TextParallaxContentExample/>
              {/* <InsuranceAccepted/> */}
      {/* <ShuffleHero /> */}
      {/* <div className="card-container"> */}
      {/* </div> */}
      {/*
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer /> */}
    </div>
  );
}

export default Home;
