import React from 'react'
import { Index } from '../../../../Components/SOLUTION/Infectious-desiase/School/Index'
import BookAppointment from '../../../../Components/BookAppointment'
import BookTestDetails from '../../../BookMyTest/BookDetails'
import DateTimePicker from '../../../../Components/Booking/DateTimePicker'
import Faq from '../../../Faq/Faq'

const TestingSchool = () => {
  return (
    <div>
      
      <br></br>
      <Index/>
      <DateTimePicker/>
      <div className="container">
Book Your appointment
      <BookAppointment/>
      </div>
      <Faq/>
      <br></br>
      ddsdsdw
    </div>
  )
}

export default TestingSchool
