import React, { useEffect, useRef, useState } from "react";
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
import {FeatureToggles} from "../Components/feature-toggles/FeatureToggles";
import ImageContainer from "../Components/Form/ImageContainer";
import { Helmet } from "react-helmet";
import { SlideInAuth } from "../Components/Contact/SlideInAuth";
import axios from "axios";
import HoverCards1 from "../Components/HoverCard/HoverCards1";
import Video from "../Components/Video/Video";
import { Testimonials } from "../Components/SOLUTION/Infectious-desiase/Group/Testimonials";
import BlogPostCarousel from "../Components/Blog/BlogPostCarousel";
import Caontact from "../Components/Accordain/Caontact";
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


function Home() {
  const authSectionRef = useRef(null);

  const scrollToAuth = () => {
    if (authSectionRef.current) {
      authSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
console.log(location,"adatsag");
useEffect(() => {
  const fetchGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation((prevLocation) => ({
            ...prevLocation,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }));
        },
        (error) => {
          console.error('Geolocation error:', error);
          fetchIpLocation();
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      fetchIpLocation();
    }
  };

  const fetchIpLocation = async () => {
    try {
      const response = await axios.get('https://ipapi.co/json/');
      console.log(response.data,"dskvhbdsvhbdv")
      setLocation({
        latitude: null,
        longitude: null,
        city: response.data.city,
        region: response.data.region,
        country: response.data.country_name,
      });
    } catch (error) {
      console.error('IP Location error:', error);
      setError('Unable to fetch location information.');
    }
  };

  fetchGeolocation();
}, []);
  return (
    <div className="home-section">
      
     <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      {/* <Navbar /> */}
      {/* <Hero /> */}
      {/* <FeatureToggles/> */}
      <HoverCards1 />
      <Info scrollToAuth={scrollToAuth} />
      <FeatureComponent />
      <BlogPostCarousel/>
      <InsuranceAccepted />
      <Video/>
      <Testimonials/>
      {/* <HoverCards /> */}
      <Caontact/>
      <div ref={authSectionRef}>
        <SlideInAuth />
      </div>
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
