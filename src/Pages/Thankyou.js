import React from 'react'
import logo1 from "../Assets/Logo1.png";
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const Thankyou = () => {
    // console.log(appointmentDetails,"sdkjvkjvdsjvdsvjk");
    const location = useLocation();
    const { appointmentDetails } = location.state || {}; // Fallback in case state is not passed
  // Safely handle appointment details with default values
  const firstName = appointmentDetails?.firstName || 'Guest';
  const locationName = appointmentDetails?.Employee || 'our lab';
  const service = appointmentDetails?.Service || '';
  
  // Format date and time
  const formattedDate = appointmentDetails?.date 
      ? format(new Date(appointmentDetails.date), 'MM/dd/yyyy') 
      : 'N/A';
  const formattedTime = appointmentDetails?.time || 'N/A';
    console.log(appointmentDetails, "Received appointmentDetails");
    
  return (
    <div>
       <div class="flex items-center justify-center h-screen">
    <div class="p-6 rounded shadow-lg ring ring-indigo-600/50">
        <div class="flex flex-col items-center space-y-4">
            <img src={logo1} className="h-24" alt="Flowbite Logo" />
            <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <h1 className="text-4xl font-bold">Thank You, {firstName}!</h1>
                        <p>Thank you for choosing My Care Labs for your testing needs. We look forward to seeing you at {formattedTime} on {formattedDate} at {locationName}.</p>
                       <a
                class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span class="text-sm font-medium">
                    Home
                </span>
            </a>
        </div>
    </div>
</div>
    </div>
  )
}

export default Thankyou
