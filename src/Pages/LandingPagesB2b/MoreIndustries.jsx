
import Hero from '../../Components/LandingPagesComps/Hero'
import ServiceSection from "../../Components/LandingPagesComps/ServiceSection";
import HealthSolutions2 from "../../Components/LandingPagesComps/HealthSolutions2";
import WeServe from "../../Components/LandingPagesComps/WeServe";
import ContactForm from "../../Components/LandingPagesComps/ContactForm";
import ls1 from "../../Assets/B2B IMAGES/Lab Services for Schools, Treatment Centers & More/Services for Schools 1.webp";
import ls2 from "../../Assets/B2B IMAGES/Lab Services for Schools, Treatment Centers & More/Services for Schools 2.webp";
import ls3 from "../../Assets/B2B IMAGES/Lab Services for Schools, Treatment Centers & More/Services for Schools 3.webp";
import ls4 from "../../Assets/B2B IMAGES/Lab Services for Schools, Treatment Centers & More/Services for Schools 4.webp"
import heroImg from "../../Assets/B2B IMAGES/Lab Services for Schools, Treatment Centers & More/Services for Schools.webp"

const MoreIndustries = () => {

    const points = [
      "Efficient COVID/Flu Testing for Students",
       "On-Campus Mobile Testing Services",
       "Timely Results for Large Groups",
       "Customized Testing Packages for Educational Institutions",
        ]
        const features = [
              {
                img:ls1,
                title:"Schools & Universities"
              },
              {
                img:ls2,
                title:"Nursing Homes"
              },
              {
                img:ls3,
                title:"Long-Term Acute Care Facilities"
              },
              {
                img:ls4,
                title:"Drug & Substance Treatment Centers"
              },
          
            ]
      return (
        <div>
          <Hero heroImg={heroImg} title={"Lab Services for Schools, Treatment Centers & More"} subTitle={"Do you need help with these challenges?"} points={points}/>
          <ServiceSection />
          <HealthSolutions2 features={features} title={"Your Industry"}/>
          <WeServe/>
          <ContactForm/>
        </div>
      )
}

export default MoreIndustries

