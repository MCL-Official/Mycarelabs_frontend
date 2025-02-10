import React from 'react'
import Hero from '../../Components/LandingPagesComps/Hero'
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/B2B IMAGES/ASSISTED LIVING/Assisted living 1.webp";
import ls2 from "../../Assets/B2B IMAGES/ASSISTED LIVING/Assisted living 2.webp";
import ls3 from "../../Assets/B2B IMAGES/ASSISTED LIVING/Assisted living 3.webp";
import heroImg from "../../Assets/B2B IMAGES/ASSISTED LIVING/Assisted living.webp"

const AssitedLiving = () => {

    const points = [
	"Dependable Mobile Phlebotomy Services",
 "Fast and Accurate Blood Test Results",
 "Specialized UTI, Wound, and Nail Testing",
 "Comprehensive Support for Assisted Living Facilities"
    ]
    const features = [
      {
        img:ls1,
        title:"On-site and Mobile Phlebotomy Services"
      },
      {
        img:ls2,
        title:"Routine Testing Panels for Chronic Conditions"
      },
      {
        img:ls3,
        title:"Wellness and Preventive Care Diagnostics"
      },
  
    ]
  return (
    <div>
      <Hero heroImg={heroImg} title={"Assisted Living Lab Services"} subTitle={"Are you looking for solutions to these challenges"} points={points}/>
      <ServiceSection />
      <HealthSolutions2 features={features} title={"Assisted Living"}/>
      <WeServe/>
      <ContactForm/>
    </div>
  )
}

export default AssitedLiving
