import React from 'react'
import Hero from '../../../../Components/SOLUTION/Infectious-desiase/Nurcing/Hero';
import BookAppointment from '../../../../Components/BookAppointment';
import DateTimePicker from '../../../../Components/Booking/DateTimePicker';
import { Content } from '../../../../Components/SOLUTION/Infectious-desiase/Nurcing/Content';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel';

const TestingNurcing = () => {
  return (
    <div>
      <Hero />
      <DateTimePicker />
      <Content />
      <div className="flex justify-center items-center my-8">
        <img 
          src="https://mycarelabs.com/wp-content/uploads/2023/11/Nursing-Homes-1187x1536-1.jpg" 
          className="md:max-w-lg sm:rounded-lg" 
          alt="Nursing Homes" 
        />
      </div>
      <BlogPostCarousel/>
      <GetStartedCard />
    </div>
  )
}

export default TestingNurcing
