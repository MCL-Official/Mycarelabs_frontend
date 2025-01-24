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
        "Seamless Integration with Your Workflow",
        "Support for High-Volume Testing",
        "Advanced Analytical Equipment",
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
          <Hero heroImg={heroImg} title={"Reference Lab Services"} subTitle={"Partnering for Advanced Diagnostic Capabilities"} points={points}/>
          <ServiceSection />
          <HealthSolutions2 features={features} title={"Refrence lab"}/>
          <WeServe/>
          <ContactForm/>
        </div>
      )
}

export default RefrenceLabService
