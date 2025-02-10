import React from "react";
import Hero from "../../Components/LandingPagesComps/Hero";
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/B2B IMAGES/B2B Urgent Care Centers Page/ucc1.webp";
import ls2 from "../../Assets/B2B IMAGES/B2B Urgent Care Centers Page/ucc2.webp";
import ls3 from "../../Assets/B2B IMAGES/B2B Urgent Care Centers Page/ucc3.webp";
import heroImg from "../../Assets/B2B IMAGES/B2B Urgent Care Centers Page/UCCHero.webp";

const UrgentCare = () => {
  const points = [
    "Rapid Diagnostic Testing Solutions",
 "Fast and Reliable UTI and Flu Testing",
 "Efficient Support for High Patient Volumes",
 "Tailored Solutions for Urgent Care Centers",
  ];
  const features = [
    {
      img: ls1,
      title: "Stat Testing for Critical Cases",
    },
    {
      img: ls2,
      title: "COVID/Flu/RSV Panels for Seasonal Illnesses",
    },
    {
      img: ls3,
      title: "Seamless Reporting and Communication Systems",
    },
  ];
  return (
    <div>
      <Hero
        heroImg={heroImg}
        title={"Lab Services for Urgent Care Centers"}
        subTitle={
          "Are these concerns impacting your practice?"
        }
        points={points}
      />
      <ServiceSection />
      <HealthSolutions2 features={features} title={"Urgent Care Centers"} />
      <WeServe />
      <ContactForm />
    </div>
  );
};

export default UrgentCare;
