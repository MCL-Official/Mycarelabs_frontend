import React from "react";
import Hero from "../../Components/LandingPagesComps/Hero";
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions from "../../Components/LandingPagesComps/HealthSoultions";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";

const B2b = () => {
  const points = [
    "Mobile Phlebotomy",
    "24-48 Hour Turnaround Time on UTI Testing",
    "Labs Open Monday to Friday",
   "Accurate & Reliable Results "    
  ]
  return (
    <div>
      <Hero title={"Partner with My Care Labs"} subTitle={"What Sets Us Apart in Diagnostic Excellence:"} points={points}/>
      <ServiceSection />
      <HealthSolutions/>
      <WeServe/>
      <ContactForm/>
    </div>
  );
};

export default B2b;
