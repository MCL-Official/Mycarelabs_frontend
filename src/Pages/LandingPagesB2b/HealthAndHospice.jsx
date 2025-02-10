import React from 'react'
import Hero from '../../Components/LandingPagesComps/Hero'
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/B2B IMAGES/Home Health & Hospices Page/Home Health & Hospices Page 1.webp";
import ls2 from "../../Assets/B2B IMAGES/Home Health & Hospices Page/Home Health & Hospices Page 2.webp";
import ls3 from "../../Assets/B2B IMAGES/Home Health & Hospices Page/Home Health & Hospices Page 3.webp";
import heroImg from "../../Assets/B2B IMAGES/Home Health & Hospices Page/Home Health & Hospices Page.webp"

const HealthAndHospice = () => {

    const points = [
        "MFlexible Scheduling for Blood Draws",
 "Timely and Reliable Lab Results",
 "Patient-Centric Testing Services",
 "Convenient Mobile Testing Options",
        ]
        const features = [
              {
                img:ls1,
                title:"Mobile Sample Collection"
              },
              {
                img:ls2,
                title:"Rapid Diagnostic Testing"
              },
              {
                img:ls3,
                title:"End-of-Life Care Support"
              },
          
            ]
      return (
        <div>
          <Hero heroImg={heroImg} title={"Home Health & Hospice Lab Services"} subTitle={"Are you seeking solutions to these common issues?"} points={points}/>
          <ServiceSection />
          <HealthSolutions2 features={features} title={"Home Health & Hospices"}/>
          <WeServe/>
          <ContactForm/>
        </div>
      )
}

export default HealthAndHospice
