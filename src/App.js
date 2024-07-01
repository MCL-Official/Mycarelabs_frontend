import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

import Footer from "./Components/Footer/Footer";
import Travel from "./Pages/Solutions/Infectious-desiase/Travel-testing/Travel";
import Covid19 from "./Pages/Solutions/Infectious-desiase/At-home-test/Covid19";
import TestingGroup from "./Pages/Solutions/Infectious-desiase/Testing-for-group/TestingGroup";
import TestingSchool from "./Pages/Solutions/Infectious-desiase/Testing-school/TestingSchool";
import Anemia from "./Pages/Solutions/Wellness-testing/Anemis-testing/Index";
import Basic from "./Pages/Solutions/Wellness-testing/Basic-metabolic/Index";
import CMP from "./Pages/Solutions/Wellness-testing/Comprensive-metabolic/Index";
import Liver from "./Pages/Solutions/Wellness-testing/Liver-function/Index";
import Renal from "./Pages/Solutions/Wellness-testing/Renal-function/Index";
import Thyroid from "./Pages/Solutions/Wellness-testing/Thyroid-function/Index";
import Oncology from "./Pages/Solutions/Oncology-testing/Index";
import Toxicology from "./Pages/Solutions/Toxicology-testing/Index";
import TestingNurcing from "./Pages/Solutions/Infectious-desiase/Nurcing-home-test/TestingNurcing";
import Index from "./Pages/Solutions/Other-test/creatine-kinase/Index";
import Index1 from "./Pages/Solutions/Other-test/crp-tests/Index";
import Index2 from "./Pages/Solutions/Other-test/free-psa-testing/Index";


function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
        {/* <Navbar2/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route path="/faq" element={<Faq/>} />
          <Route path="/bookTest" element={<BookTest />} />
          <Route path="/bookTest/:id" element={<BookTestDetails />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/readBlog/:id" element={<ReadBlog />} />
          <Route path="/infectious-disease-testing" element={<Infectious/>} />
          <Route path="/travel-pcr-testing" element={<Travel/>} />
          <Route path="/home-pcr-test-kit" element={<Covid19/>} />
          <Route path="/group-testing" element={<TestingGroup/>} />
          <Route path="/school-testing" element={<TestingSchool/>} />
          <Route path="/nursing-home-testing" element={<TestingNurcing/>} />
          <Route path="/testing-solutions/wellness-testing" element={<TestingSchool/>} />
          <Route path="/testing-solutions/anemia-profile-test" element={<Anemia/>} />
          <Route path="/testing-solutions/basic-metabolic-panel" element={<Basic/>} />
          <Route path="/testing-solutions/liver-function-tests" element={<Liver/>} />
          <Route path="/testing-solutions/renal-function-test" element={<Renal/>} />
          <Route path="/testing-solutions/thyroid-function-test" element={<Thyroid/>} />
          <Route path="/testing-solutions/comprehensive-metabolic-panel" element={<CMP/>} />
          <Route path="/testing-solutions/oncology-testing-solutions" element={<Oncology/>} />
          <Route path="/testing-solutions/toxicology-testing-solutions" element={<Toxicology/>} />
          <Route path="/creatine-kinase" element={<Index/>} />
          <Route path="/crp-tests" element={<Index1/>} />
          <Route path="/free-psa-testing" element={<Index2/>} />
          <Route path="/magnesium-test-in-blood" element={<TestingSchool/>} />
          <Route path="/anticonvulsant-test-services" element={<TestingSchool/>} />
          <Route path="/vitamin-d-test-services" element={<TestingSchool/>} />
          <Route path="/total-psa-test-services" element={<TestingSchool/>} />












          {/* <Route path="/booking" element={<DateTimePicker />} /> */}
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>Radhe shyam</h1>
//     </div>
//   )
// }

// export default App
