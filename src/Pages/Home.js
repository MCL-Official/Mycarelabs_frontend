import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import InsuranceAccepted from "../Components/InsuranceAccepted";
import HoverCards from "../Components/HoverCard/HoverCards";
import { TextParallaxContentExample } from "../Components/Scroll_Animation/TextParallaxContent";
import BookAppointment from "../Components/BookAppointment";
// import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer/Footer";
// import ScrollAnimation from "../Components/Animation/CaseStudyScroller";
// import TestMenu from "../Components/TestMenu/TestMenu";// In Home.js
// import CaseStudyScroller from "../Components/Animation/CaseStudyScroller";
import ShuffleHero from "../Components/shuffel/SuffleHero";
import { ClipPathLinks } from "../Components/Insurance/ClipPathLinks";
import FeatureComponent from "../Components/Accordain/FeatureComponent";
import ImageContainer from "../Components/Form/ImageContainer";
import { Helmet } from "react-helmet";
import { SlideInAuth } from "../Components/Contact/SlideInAuth";


function Home() {
  return (
    <div className="home-section">
      
     <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      {/* <Navbar /> */}
      <Hero />
      <FeatureComponent />
      <HoverCards />
      <InsuranceAccepted />
      <Info />
      <SlideInAuth/>
      {/* <ImageContainer/> */}
      {/* <Footer /> */}

      {/* <TextParallaxContentExample/> */}
      {/* <ShuffleHero/>
      <ClipPathLinks/> */}
      {/* <ShuffleHero /> */}
      {/* <About /> */}
      {/* <BookAppointment /> */}
      {/* <Doctors /> */}
      {/* <div className="card-container"> */}
      {/* </div> */}

      {/* 
      <Reviews />
      */}
    </div>
  );
}

export default Home;
