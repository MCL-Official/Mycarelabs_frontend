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
import Navbar from "./Components/Navbar";
import DateTimePicker from "./Components/Booking/DateTimePicker";
import Content from "./Components/content/Content";
import Navbar2 from "./Components/Navbar/Navbar2";
import Infectious from "./Pages/Solutions/Infectious";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Faq from "./Pages/Faq/Faq";



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
          {/* <Route path="/booking" element={<DateTimePicker />} /> */}
          {/* <Route path="/appointment" element={<Appointment />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
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
