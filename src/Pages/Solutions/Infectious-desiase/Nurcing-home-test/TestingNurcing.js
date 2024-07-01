import React from 'react'
import Hero from '../../../../Components/SOLUTION/Infectious-desiase/Nurcing/Hero';
import BookAppointment from '../../../../Components/BookAppointment';
import DateTimePicker from '../../../../Components/Booking/DateTimePicker';
import { Content } from '../../../../Components/SOLUTION/Infectious-desiase/Nurcing/Content';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';


const TestingNurcing = () => {
  return (
    <div>
      <Hero/>
      <DateTimePicker/>
      <Content/>
      <GetStartedCard/>
     
      
    </div>
  )
}

export default TestingNurcing
