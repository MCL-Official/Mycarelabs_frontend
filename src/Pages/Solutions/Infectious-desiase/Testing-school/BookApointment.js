import React from 'react';
import { FaUserMd, FaAmbulance, FaHeadset, FaCheckCircle } from 'react-icons/fa'; // Importing the icons

const BookApointment = () => {
    return (
        <>
          <h1 className='text-center text-5xl font-bold mb-8'>
  Why Choose <span className="text-blue-400">My Care Labs</span>
</h1>
            <div className='max-w-screen-xl mx-auto px-4 py-12 gap-12 text-gray-600 md:px-8 flex flex-col items-center xl:flex-row xl:items-center'>
                <div className='flex justify-center'>
                    <div className='max-w-xl'>
                        <img src="https://i.ibb.co/SfdTKn6/1.png" className="rounded-lg w-full h-max" alt="Hospital" />
                    </div>
                </div>
                <div className='max-w-2xl xl:pl-12 mt-8 xl:mt-0 text-center xl:text-left'>
  <p className='text-xl mb-14 text-left'>
    Discover the reasons to choose My Care Labs for your healthcare needs. Experience expert care, convenience, and personalized solutions, making your well-being our top priority. Join us on a journey to better health and a happier life.
  </p>

  <div className='grid grid-cols-2 gap-5 items-center xl:items-start'>
    <div className="flex items-center space-x-3 text-lg font-bold">
      <FaUserMd className="text-red-500 text-4xl" />
      <span>Best Professional Doctors</span>
    </div>
    <div className="flex items-center space-x-3 text-lg font-bold">
      <FaAmbulance className="text-blue-500 text-4xl" />
      <span>Emergency Care</span>
    </div>
    <div className="flex items-center space-x-3 text-lg font-bold">
      <FaHeadset className="text-red-500 text-4xl" />
      <span>24/7 Support Live Chat</span>
    </div>
    <div className="flex items-center space-x-3 text-lg font-bold">
      <FaCheckCircle className="text-blue-500 text-4xl" />
      <span>Enrollment Easy and Quick</span>
    </div>
  </div>
</div>

            </div>
        </>
    );
}

export default BookApointment;
