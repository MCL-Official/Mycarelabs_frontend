import React from 'react'
import Hero from '../../Components/LandingPagesComps/Hero'
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/B2B IMAGES/Reference Lab Services/_Reference Lab Services 1.webp";
import ls2 from "../../Assets/B2B IMAGES/Reference Lab Services/_Reference Lab Services 2.webp";
import ls3 from "../../Assets/B2B IMAGES/Reference Lab Services/_Reference Lab Services 3.webp";
import heroImg from "../../Assets/B2B IMAGES/Reference Lab Services/Reference Lab Services.webp"

const RefrenceLabService = () => {
  
    const points = [
        "Cost-Effective and Scalable Lab Solutions",
    "Extensive Test Menu Availability",
     "Accurate Reporting with Rapid Turnaround",
        "Reliable Support for High Testing Volumes",
        ]
        const features = [
              {
                img:ls1,
                title:"High-Throughput Testing Services"
              },
              {
                img:ls2,
                title:"Advanced Equipment Support"
              },
              {
                img:ls3,
                title:"Quality Assurance Programs"
              },
          
            ]
      return (
        <div>
          <Hero heroImg={heroImg} title={"Reference Lab Services"} subTitle={"Are you addressing these needs effectively?"} points={points}/>
          <ServiceSection />
          <HealthSolutions2 features={features} title={"Refrence lab"}/>
          <WeServe/>
          <ContactForm/>
        </div>
      )
}

export default RefrenceLabService
