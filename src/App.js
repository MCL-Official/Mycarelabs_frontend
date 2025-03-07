import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
// import Legal from "./Pages/Legal";
// import NotFound from "./Pages/NotFound";
// import Appointment from "./Pages/Appointment";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmptyPage from "./Pages/EmptyPage/EmptyPage";
import BookTest from "./Pages/BookMyTest/BookTest";
import BookTestDetails from "./Pages/BookMyTest/BookDetails";
import Blogs from "./Components/Blog/Blogs";
import ReadBlog from "./Components/Blog/ReadBlog ";
import Navbar from "./Components/Navbar/Navbar";
import DateTimePicker from "./Components/Booking/DateTimePicker";
import Content from "./Components/content/Content";
import Navbar2 from "./Components/Navbar/Navbar2";
import Infectious from "./Pages/Solutions/Infectious-desiase/Infectious";
// import '@fortawesome/fontawesome-free/css/all.min.css';
import Faq from "./Pages/Faq/Faq";
import { trackPageView } from './analytics';
import Footer from "./Components/Footer/Footer";
import Travel from "./Pages/Solutions/Infectious-desiase/Travel-testing/Travel";
import Covid19 from "./Pages/Solutions/Infectious-desiase/At-home-test/Covid19";
import TestingGroup from "./Pages/Solutions/Infectious-desiase/Testing-for-group/TestingGroup";
import TestingSchool from "./Pages/Solutions/Infectious-desiase/Testing-school/TestingSchool";
import Anemia from "./Pages/Solutions/Wellness-testing/Anemis-testing/Index";
import Solution from "./Pages/Solutions/Wellness-testing/Solution";
import Basic from "./Pages/Solutions/Wellness-testing/Basic-metabolic/Index";
import CMP from "./Pages/Solutions/Wellness-testing/Comprensive-metabolic/Index";
import Lipid from "./Pages/Solutions/Wellness-testing/Lipid-testing/Index";
import Liver from "./Pages/Solutions/Wellness-testing/Liver-function/Index";
import Renal from "./Pages/Solutions/Wellness-testing/Renal-function/Index";
import Thyroid from "./Pages/Solutions/Wellness-testing/Thyroid-function/Index";
import Oncology from "./Pages/Solutions/Oncology-testing/Index";
import Toxicology from "./Pages/Solutions/Toxicology-testing/Index";
import TestingNurcing from "./Pages/Solutions/Infectious-desiase/Nurcing-home-test/TestingNurcing";
import Index from "./Pages/Solutions/Other-test/creatine-kinase/Index";
import Index1 from "./Pages/Solutions/Other-test/crp-tests/Index";
import Index2 from "./Pages/Solutions/Other-test/free-psa-testing/Index";
import Index3 from "./Pages/Solutions/Other-test/magnesium-test-in-blood/Index";
import Index4 from "./Pages/Solutions/Other-test/anticonvulsant-test-services/Index";
import Index5 from "./Pages/Solutions/Other-test/vitamin-d-test-services/Index";
import Index6 from "./Pages/Solutions/Other-test/total-psa-test-services/Index";
import Team from "./Pages/Company/Team2";
import ConfirmBooking from "./Pages/ConfirmedBooking/ConfirmBooking";
import { SlideInAuth } from "./Components/Contact/SlideInAuth";
import FeatureComponent from "./Components/Accordain/FeatureComponent";
import HoverCards from "./Components/HoverCard/HoverCards";
import NeumorphismButton from "./Components/button/Button";
import DrawerButton from "./Components/Custome_Modal/DrawerButton";
import Example from "./Components/Navbar/FlyoutNavbar";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import NotFound from "./Pages/NotFound";
import PrivacyNotice from "./Pages/PrivacyNotice ";
import GoogleStories from "./Pages/GoogleStories ";
import Careers from "./Pages/Careers/Careers";
import JobApplicationForm from "./Components/Careers/JobApplicationForm";
import JobDetail from "./Components/Careers/JobDetail";
import JobListings from "./Components/Careers/JobListings";
import ApplyPage from "./Components/Careers/ApplyPage";
import SuccessPage from "./Components/Careers/SuccessPage";
import Uta from "./Pages/Uta/Uta.js";
import Thankyou from "./Pages/Thankyou.js";
import AboutCompany from "./Pages/Company/AboutCompany.js";
import Banner from "./Components/Navbar/Banner.js";
import Bannerreact from "./Components/Navbar/Bannerreact.js";
import B2b from "./Pages/LandingPagesB2b/B2b.jsx";
import AssitedLiving from "./Pages/LandingPagesB2b/AssitedLiving.jsx";
import HealthAndHospice from "./Pages/LandingPagesB2b/HealthAndHospice.jsx";
import SkilledNursing from "./Pages/LandingPagesB2b/SkilledNursing.jsx";
import PhysicianAndHospital from "./Pages/LandingPagesB2b/PhysicianAndHospital.jsx";
import RefrenceLabService from "./Pages/LandingPagesB2b/RefrenceLabService.jsx";
import MoreIndustries from "./Pages/LandingPagesB2b/MoreIndustries.jsx";
import UrgentCare from "./Pages/LandingPagesB2b/UrgentCare.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";
import ThankyouFormSubmit from "./Pages/LandingPagesB2b/ThankyouFormSubmit.jsx";

const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
};

function App() {
  return (
    <div className="App">
      <Router >
        <PageViewTracker />
        {/* <Navbar /> */}
        {/* <Exampl */}
        {/* <Banner/> */}
        <Example />
        {/* <Navbar2/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route path="/uti" element={<Uta />} />
          <Route path="/industries/overview" element={<B2b />} />
          <Route path="/industries/assisted-living" element={<AssitedLiving/>}/>
          <Route path="/industries/home-health-hospices" element={<HealthAndHospice/>}/>
          <Route path="/industries/skilled-nursing" element={<SkilledNursing/>}/>
          <Route path="/industries/physician-offices-hospitals" element={<PhysicianAndHospital/>}/>
          <Route path="/industries/reference-labs" element={<RefrenceLabService/>}/>
          <Route path="/industries/urgent-care" element={<UrgentCare/>}/>
          <Route path="/industries/more" element={<MoreIndustries/>}/>
          {/* <Route path="/form-submission-thank-you" element={<ThankyouFormSubmit/>}/> */}
          <Route path="/stories" element={<GoogleStories />} />
          <Route path="/hipaa-information" element={<PrivacyNotice />} />
          <Route path="/success" element={<SuccessPage />} />
          {/* <Route path="/careers" element={<Careers />} /> */}
          <Route path="/careers" element={<JobListings />} />
          <Route path="/careers/:id" element={<JobDetail />} />
          <Route path="/Apply" element={<ApplyPage />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/riverside-mobile-testing-thank-you" element={<Thankyou />} />
          <Route path="/bay-area-testing-thank-you" element={<Thankyou />} />
          <Route path="/fremont-laboratory-thank-you" element={<Thankyou />} />
          <Route path="/california-mobile-testing-thank-you" element={<Thankyou />} />
          <Route path="/riverside-gurdwara-thank-you" element={<Thankyou />} />
          <Route path="/athome-testing-thank-you" element={<Thankyou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/covid-test-locations" element={<BookTest />} />
          <Route path="/bookingcompletion/:id" element={<ConfirmBooking />} />
          <Route path="/covid-test-locations/:id" element={<BookTestDetails />} />
          {/* <Route path="/bookings" element={<BookTestDetails />} /> */}
          <Route path="/covid-test-locations" element={<DrawerButton />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<ReadBlog />} />
          <Route path="/testing-solutions/infectious-disease-testing-solutions" element={<Infectious />} />
          <Route path="/travel-testing/" element={<Travel />} />
          <Route path="/covid-rt-pcr-home-test-kit/" element={<Covid19 />} />
          <Route path="/group-covid-testing/" element={<TestingGroup />} />
          <Route path="/testing-for-schools/" element={<TestingSchool />} />
          <Route path="/testing-for-nursing-homes/" element={<TestingNurcing />} />
          <Route path="/testing-solutions/wellness-testing-solutions/" element={<Solution />} />
          <Route path="/testing-solutions/wellness-testing-solutions/anemia-profile-test/" element={<Anemia />} />
          <Route path="/testing-solutions/wellness-testing-solutions/basic-metabolic-panel/" element={<Basic />} />
          <Route path="/testing-solutions/wellness-testing-solutions/liver-function-panel-tests/" element={<Liver />} />
          <Route path="/testing-solutions/wellness-testing-solutions/renal-function-panel-test/" element={<Renal />} />
          <Route path="/testing-solutions/wellness-testing-solutions/thyroid-function-panel-test/" element={<Thyroid />} />
          <Route path="/testing-solutions/wellness-testing-solutions/comprehensive-metabolic-panel-cmp-test/" element={<CMP />} />
          <Route path="/testing-solutions/wellness-testing-solutions/lipid-profile-test/" element={<Lipid />} />
          <Route path="/testing-solutions/oncology-testing-solutions/" element={<Oncology />} />
          <Route path="/testing-solutions/toxicology-testing-solutions/" element={<Toxicology />} />
          <Route path="/creatine-kinase" element={<Index />} />
          <Route path="/crp-tests" element={<Index1 />} />
          <Route path="/free-psa-testing" element={<Index2 />} />
          <Route path="/magnesium-test-in-blood" element={<Index3 />} />
          <Route path="/anticonvulsant-test-services" element={<Index4 />} />
          <Route path="/vitamin-d-test-services" element={<Index5 />} />
          <Route path="/total-psa-test-services" element={<Index6 />} />
          <Route path="/about" element={<Team />} />
          <Route path="/management-team" element={<AboutCompany />} />
          {/* <Route path="/contact" element={<SlideInAuth />} /> */}
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/testing-solutions" element={<FeatureComponent />} />
          <Route path="/testingLoc" element={<HoverCards />} />
          <Route path="loc" element={<DateTimePicker />} />
          {/* <Route path="/booking" element={<DateTimePicker />} /> */}
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
