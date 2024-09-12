import React from 'react';
import leftImage from '../../Assets/uti2.png'; // Make sure to replace with your actual image path

const SubElement2 = () => {
    return (
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="md:w-1/2">
          <img src={leftImage} alt="Description" className="w-full h-50 object-contain"/>
        </div>
        
        {/* Text Content Container */}
        <div className="md:w-1/2 p-4 md:p-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2 text-left">What is a UTI?</h1>
          <p className="text-gray-600 text-lg  text-left pt-5">
          A urinary tract infection (UTI) is a common condition that occurs when bacteria enter the urinary system, causing infection in any part of the urinary tract. This includes the kidneys, bladder, ureters, and urethra. UTIs can affect anyone but are more common in women. Symptoms often include a burning sensation during urination, frequent urges to urinate, and cloudy or strong-smelling urine. Left untreated, a UTI can lead to more serious health issues, including kidney infections. Early detection and treatment are key to preventing complications and ensuring a swift recovery.           </p>
        </div>
      </div>
    )
  }

export default SubElement2;
