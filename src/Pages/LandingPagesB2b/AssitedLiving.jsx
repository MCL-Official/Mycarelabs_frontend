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
	"Mobile Phlebotomy for Residents",
	"Customized Testing Panels for Senior Care",
	"Reliable 24-48 Hour Turnaround on UTI Tests",
	"Accurate and Reliable Results"
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
      <Hero heroImg={heroImg} title={"Assisted Living Lab Services"} subTitle={"Tailored Diagnostics for Assisted Living Communities:"} points={points}/>
      <ServiceSection />
      <HealthSolutions2 features={features} title={"Assisted Living"}/>
      <WeServe/>
      <ContactForm/>
    </div>
  )
}

export default AssitedLiving
