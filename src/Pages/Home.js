import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import InsuranceAccepted from "../Components/InsuranceAccepted";
import HoverCards from "../Components/HoverCard/HoverCards";
import TestMenu from "../Components/TestMenu/TestMenu";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <HoverCards />
      {/* <TestMenu/> */}
      {/* <InsuranceAccepted/>
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
