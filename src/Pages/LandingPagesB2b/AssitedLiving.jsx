import React from 'react'
import Hero from '../../Components/LandingPagesComps/Hero'
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";

const AssitedLiving = () => {

    const points = [
	"Mobile Phlebotomy for Residents",
	"Customized Testing Panels for Senior Care",
	"Reliable 48-Hour Turnaround on UTI Tests",
	"Accurate and Reliable Results"
    ]
  return (
    <div>
      <Hero title={"Assisted Living Lab Services"} subTitle={"Tailored Diagnostics for Assisted Living Communities:"} points={points}/>
      <ServiceSection />
      <HealthSolutions2/>
      <WeServe/>
      <ContactForm/>
    </div>
  )
}

export default AssitedLiving
