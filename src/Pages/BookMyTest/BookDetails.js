import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../../Components/Navbar';

const BookTestDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold text-center mb-5">Booking Details for Test ID: {id}</h1>
        <div className="flex justify-center">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Date & Time</h2>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
            <div className="mt-4">
              <button className="bg-orange-500 text-white py-2 px-4 rounded">Continue</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Information</h2>
            {/* Add form fields here */}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="text-center">
            <p>Get in Touch</p>
            <p>support@mycarelabs.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTestDetails;
