import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import DateTimePicker from '../../Components/Booking/DateTimePicker';
import { useLocation } from 'react-router-dom';

const BookTestDetails = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState();
  const location = useLocation();
  const cardData = location.state?.cardData;
  console.log(cardData);

  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center h-[75vh]"
        style={{ backgroundImage: `url(${cardData?.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-4xl font-bold mb-2">{cardData?.title}</h1>
          <p className="text-lg font-bold">{cardData?.shortDescription}</p>
          <p className="text-lg mt-2">{cardData?.longDescription}</p>
        </div>
      </div>
      <div className="relative container mx-auto z-15" style={{ marginTop: '-29.5vh' }}>
        {/* <div className="bg-white p-8 shadow-lg rounded-lg" style={{ background: 'none' }}> */}
          <DateTimePicker />
          <div className="flex justify-center mt-5">
            <div className="text-center">
              <p>Get in Touch</p>
              <p>support@mycarelabs.com</p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default BookTestDetails;
