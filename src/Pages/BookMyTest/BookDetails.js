import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../../Components/Navbar';
import DateTimePicker from '../../Components/Booking/DateTimePicker';

const BookTestDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-5">
           <DateTimePicker/>
 
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
