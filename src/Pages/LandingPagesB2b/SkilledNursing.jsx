import React from 'react'
import Hero from '../../Components/LandingPagesComps/Hero'
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/ls1.webp";
import ls2 from "../../Assets/ls2.webp";
import ls3 from "../../Assets/ls3.webp";

const SkilledNursing = () => {

    const points = [
        "Customized Testing Panels for Complex Cases",
        "On-site Mobile Phlebotomy Services",
        "Quick Turnaround Times for Critical Results",
        ]
        const features = [
                      {         
                        img:ls1,
                        title:"Routine and Specialty Lab Testing"
                      },
                      {
                        img:ls2,
                        title:"Chronic Condition Monitoring"
                      },
                      {
                        img:ls3,
                        title:"Infection Control Panels"
                      },
                  
                    ]
      return (
        <div>
          <Hero title={"Skilled Nursing Lab Services"} subTitle={"Reliable and Efficient Diagnostics for Skilled Nursing Facilities"} points={points}/>
          <ServiceSection />
          <HealthSolutions2 features={features}/>
          <WeServe/>
          <ContactForm/>
        </div>
      )
}

export default SkilledNursing
