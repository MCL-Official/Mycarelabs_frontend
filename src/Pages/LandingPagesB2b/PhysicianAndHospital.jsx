import React from 'react'
import Hero from '../../Components/LandingPagesComps/Hero'
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/B2B IMAGES/Physician & Hospital Lab Services/Physician & Hospital Lab Services 1.webp";
import ls2 from "../../Assets/B2B IMAGES/Physician & Hospital Lab Services/Physician & Hospital Lab Services 2.webp";
import ls3 from "../../Assets/B2B IMAGES/Physician & Hospital Lab Services/Physician & Hospital Lab Services 3.webp";
import heroImg from "../../Assets/B2B IMAGES/Physician & Hospital Lab Services/Physician & Hospital Lab Services.webp"

const PhysicianAndHospital = () => {

    const points = [
        "Same-Day Mobile Phlebotomy Services",
 "Rapid and Accurate Test Results",
 "Comprehensive Support for Specialty Tests",
 "Seamless Integration with Medical Practices",
        ]
        const features = [
              {
                img:ls1,
                title:"Inpatient and Outpatient Testing"
              },
              {
                img:ls2,
                title:"Emergency Diagnostics"
              },
              {
                img:ls3,
                title:"Specialized Panels for Complex Cases"
              },
          
            ]
      return (
        <div>
          <Hero heroImg={heroImg} title={"Physician & Hospital Lab Services"} subTitle={"Looking for better solutions to these problems?"} points={points}/>
          <ServiceSection />
          <HealthSolutions2 features={features} title={"Physicians & Hospitals"}/>
          <WeServe/>
          <ContactForm/>
        </div>
      )
}

export default PhysicianAndHospital
