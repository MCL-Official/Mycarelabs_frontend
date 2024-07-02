import React from 'react'
import { Index } from '../../../../Components/SOLUTION/Infectious-desiase/School/Index'
import BookAppointment from '../../../../Components/BookAppointment'
import BookTestDetails from '../../../BookMyTest/BookDetails'
import DateTimePicker from '../../../../Components/Booking/DateTimePicker'
import Faq from '../../../Faq/Faq'
import InsuranceAccepted from '../../../../Components/InsuranceAccepted'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'

const TestingSchool = () => {
  return (
    <div>
      
      <br></br>
      <Index/>
      <div className="container">
<h1>
  Book Your appointment
  </h1>
      <DateTimePicker/>
      </div>
      <BookAppointment/>
      <Faq/>
      <InsuranceAccepted/>
      <BlogPostCarousel/>
      <br></br>
    </div>
  )
}

export default TestingSchool
