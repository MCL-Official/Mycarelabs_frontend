import React from 'react'
import DateTimePicker from '../../../Components/Booking/DateTimePicker'
import InsuranceAccepted from '../../../Components/InsuranceAccepted'
import Faq from '../../Faq/Faq'
import HoverCards from '../../../Components/HoverCard/HoverCards'
import GetStartedCard from '../../../Components/GetStartedCard/Getstarted'
import cancerScreeningImage from '../../../Assets/doctor-group.png';
import BookTestDetails from '../../BookMyTest/BookDetails'
import { Helmet } from "react-helmet";


const Index = () => {
  const cardData = [
    {
      stepNumber: 1,
      title: "Men's & Women's Wellness Testing Solutions",
      longDescription:"Attention wellness testing patients: If you are registering for any of the following panels (Renal Function, CMP, BMP, or Lipid), please make sure you are fasting for a minimum of 8 hours before your appointment. Water is permitted during the fasting period. Additionally, please consult with your doctor if you should avoid taking any medication for our wellness test.",
      image: 'https://i.ibb.co/b79svsR/4.png'
    },]
  return (
    <>
    
     <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
    <div className='sm:mt-5 mt-20'>
    {console.log(cardData,"sdkjvdsn")}
     <div
        className="relative bg-cover bg-center h-[30rem]"
        style={{ backgroundImage: `url(${cardData?.[0]?.image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <h1 className="md:text-4xl text-3xl font-bold mb-2">{cardData?.[0]?.title}</h1>
          <p className="text-lg font-bold">{cardData?.shortDescription}</p>
          <p className="md:text-lg text-base mt-2">{cardData?.[0]?.longDescription}</p>
        </div>
      </div>
      {/* <div className="relative container mx-auto z-15" style={{ marginTop: '-4.5rem' }}>
          <DateTimePicker cardData={cardData} />

        </div> */}
      <div className="text-center py-8 mt-5">
      <p className="text-blue-500 font-semibold">We Ensure Safe Testing</p>
      <h2 className="text-2xl font-bold mt-2">
        Same Day Results <span className="text-red-500">For Groups,</span> individuals, Travelers
      </h2>
      <div className="flex md:flex-row flex-col justify-center mt-8 md:space-x-8">
        <div className="text-center">
          <img src="data:image/png;base64,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" alt="Same Day Results" className="mx-auto mb-2" />
          <h3 className="font-bold">Same Day Results</h3>
          <p className="text-gray-600">Rapid same-day results: My Care Labs, your trusted healthcare partner.</p>
        </div>
        <div className="text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS33DokwOKVAsSta31ChXAIEDsG8h9HCxZq7Q&s" alt="No Cost for Insurance" className="mx-auto mb-2" />
          <h3 className="font-bold">No Cost for Insurance</h3>
          <p className="text-gray-600">Our services are offered at no cost for patients with insurance.</p>
        </div>
        <div className="text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQku1aRWzS_2RMk9x8RuPck4kmFPFiM09YsLw&s" alt="No Appointments Needed" className="mx-auto mb-2" />
          <h3 className="font-bold">No Appointments Needed, Walk-Ins Welcome!</h3>
          <p className="text-gray-600">Walk-in tests: Swift results at My Care Labs for your convenience.</p>
        </div>
        <div className="text-center">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOf0xSP_XDEwVaaT2loSbLvpf132zy51qTSQ&s  " alt="Trusted by Millions of People" className="mx-auto mb-2" />
          <h3 className="font-bold">Trusted by Millions of People</h3>
          <p className="text-gray-600">We adhere to HIPAA standards and guarantee the confidentiality of all information.</p>
        </div>
      </div>
    </div>
      <div className="flex flex-col md:flex-row items-center p-4 mb-8 mt-5">
      <div className="md:w-1/2">
        <img
          src={cancerScreeningImage}
          alt="Cancer Screening"
          className="w-full h-auto rounded-2xl "
        />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">
          My Care Labs cancer screening - coming soon
        </h2>
        <ul className="list-none space-y-2">
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>602,350 Americans died of cancer in 2020.</span>
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>
              Cancer screening aids in early detection and treatment of
              aggressive cancers.
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-orange-500 mr-2">&#10003;</span>
            <span>Call Or Text 800-790-4550</span>
          </li>
        </ul>
      </div>
    </div>
        <InsuranceAccepted/>
      <Faq/>
      <HoverCards/>
      <GetStartedCard/>
    </div>
    </>
  )
}

export default Index
