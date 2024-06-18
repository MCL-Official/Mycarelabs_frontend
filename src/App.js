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


function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route path="/bookTest" element={<BookTest />} />
          <Route path="/bookTest/:id" element={<BookTestDetails />} />
          {/* <Route path="/legal" element={<Legal />} /> */}
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
