import React from "react";
import Hero from "../../Components/LandingPagesComps/Hero";
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/B2B IMAGES/Nursing/Nursing Page 1.webp";
import ls2 from "../../Assets/B2B IMAGES/Nursing/Nursing Page 2.webp";
import ls3 from "../../Assets/B2B IMAGES/Nursing/Nursing Page .webp";
import heroImg from "../../Assets/B2B IMAGES/Nursing/Nursing Page.webp";

const SkilledNursing = () => {
  const points = [
    "On-Site Mobile Lab Support",
 "Quick Results for Critical Patient Care",
 "Streamlined Communication with Providers",
 "Customized Testing Solutions for Skilled Nursing Facilities",
  ];
  const features = [
    {
      img: ls1,
      title: "Routine and Specialty Lab Testing",
    },
    {
      img: ls2,
      title: "Chronic Condition Monitoring",
    },
    {
      img: ls3,
      title: "Infection Control Panels",
    },
  ];
  return (
    <div>
      <Hero
      heroImg={heroImg}
        title={"Skilled Nursing Lab Services"}
        subTitle={
          "Do you need solutions for these challenges?"
        }
        points={points}
      />
      <ServiceSection />
      <HealthSolutions2 features={features} title={"Skilled Nursing Lab Services"}/>
      <WeServe />
      <ContactForm />
    </div>
  );
};

export default SkilledNursing;
