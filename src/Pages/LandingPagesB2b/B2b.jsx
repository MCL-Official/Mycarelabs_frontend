import React from "react";
import Hero from "../../Components/LandingPagesComps/Hero";
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions from "../../Components/LandingPagesComps/HealthSoultions";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";

const B2b = () => {
  return (
    <div>
      <Hero />
      <ServiceSection />
      <HealthSolutions/>
      <WeServe/>
      <ContactForm/>
    </div>
  );
};

export default B2b;
