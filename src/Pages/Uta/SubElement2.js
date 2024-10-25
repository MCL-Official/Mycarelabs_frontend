import React from 'react';
import leftImage from '../../Assets/uti2.png'; // Make sure to replace with your actual image path

const SubElement2 = () => {
    return (<>
    
  <h1 className="text-2xl lg:text-6xl text-center font-bold text-gray-800 mb-2 ">What is a UTI?</h1>
      <div className="flex flex-col md:flex-row items-center rounded-lg overflow-hidden">
        {/* Image Container */}
        <div className="md:w-1/2">
          <img src="https://i.ibb.co/VCns6N8/UTI-Potrait-1.png" alt="Description" className="w-full h-50 object-contain"/>
        </div>
        
        {/* Text Content Container */}
        <div className="md:w-1/2 w-p-4 md:p-8">
  <p className="text-gray-600 text-lg text-left pt-5">
    A urinary tract infection (UTI) is a common condition that occurs when bacteria enter the urinary system, causing infection in any part of the urinary tract. This includes the kidneys, bladder, ureters, and urethra. UTIs can affect anyone but are more common in women. Symptoms often include a burning sensation during urination, frequent urges to urinate, and cloudy or strong-smelling urine. Left untreated, a UTI can lead to more serious health issues, including kidney infections. Early detection and treatment are key to preventing complications and ensuring a swift recovery.
  </p>

  {/* UTI Symptoms Section */}
  <h2 className="text-3xl font-semibold text-gray-800 mt-8 text-left">UTI Infection: Symptoms and Its Prevention</h2>

  {/* Symptoms */}
  <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-left">Symptoms:</h3>
  <ul className="list-disc list-inside text-gray-600 text-lg mt-3 text-left">
    <li>Frequent urination: Needing to urinate more often than usual.</li>
    {/* <li>Burning and pain when urinating: A painful or uncomfortable sensation during urination.</li> */}
    <li>Blood or dark urine: Noticeable changes in urine color, often due to blood.</li>
    <li>Loss of bladder control: Difficulty in controlling the urge to urinate.</li>
    {/* <li>Fever, nausea, fatigue: Feeling generally unwell, with symptoms like tiredness and a fever.</li> */}
    <li>Mental disorientation: Confusion or difficulty thinking clearly.</li>
    <li>Pain in kidneys/lower bladder region: Aches in the back or lower abdomen.</li>
  </ul>

  {/* Prevention */}
  <h3 className="text-2xl font-semibold text-gray-800 mt-6 text-left">Prevention:</h3>
  <ul className="list-disc list-inside text-gray-600 text-lg mt-3 text-left"> 
    <li>Urinating frequently: Don’t hold urine to prevent bacterial growth.</li>
    <li>Avoid tight-fitting underwear: Loose clothing reduces moisture and bacteria.</li>
    <li>Urinating after sexual activity: Flush bacteria from the urinary tract.</li>
    <li>Avoid public toilets: These may harbor a lot of bacteria.</li>
  </ul>
</div>

      </div>
      </>
    )
  }

export default SubElement2;
