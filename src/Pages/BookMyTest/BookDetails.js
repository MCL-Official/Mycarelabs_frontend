import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import DateTimePicker from '../../Components/Booking/DateTimePicker';
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Footer';
import HoverDevCards from '../../Components/Seetings/HoverDevCards';
import { DivOrigami } from '../../Components/LogoOrigami/DivOrigami';

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
          <div className="flex justify-center mt-5 bg-gradient-to-r from-blue-500 to-white p-10  rounded border-[1px]">
  <div className="text-center flex items-center">
    <div className="mr-5 text-white">
      <h2 className="text-2xl font-bold">Work with the best</h2>
      <p className="mt-2 text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, ullam tenetur quam debitis illo nemo aliquid animi ad provident?</p>
      <a href="#" className="text-blue-500 hover:underline mt-4 inline-block">SEE CASE STUDIES →</a>
    </div>
    <div>
      <DivOrigami/>
    </div>
  </div>
</div>







        </div>
        <HoverDevCards/>
          <Footer/>
      {/* </div> */}
    </>
  );
};

export default BookTestDetails;
