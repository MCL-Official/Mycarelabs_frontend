import React from 'react'
import Hero from '../../../../Components/SOLUTION/Infectious-desiase/Nurcing/Hero';
import BookAppointment from '../../../../Components/BookAppointment';
import DateTimePicker from '../../../../Components/Booking/DateTimePicker';
import { Content } from '../../../../Components/SOLUTION/Infectious-desiase/Nurcing/Content';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel';
import { Helmet } from "react-helmet";


const TestingNurcing = () => {
  return (
    <div>
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <Hero />
      {/* <DateTimePicker /> */}
      <Content />
      {/* <div className="flex justify-center items-center my-8">
        <img 
          src="https://mycarelabs.com/wp-content/uploads/2023/11/Nursing-Homes-1187x1536-1.jpg" 
          className="md:max-w-lg sm:rounded-lg" 
          alt="Nursing Homes" 
        />
      </div> */}
      <BlogPostCarousel/>
      <GetStartedCard />
    </div>
  )
}

export default TestingNurcing
