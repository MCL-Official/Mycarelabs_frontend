import React from 'react'
import { Index } from '../../../../Components/SOLUTION/Infectious-desiase/School/Index'
import BookAppointment from '../../../../Components/BookAppointment'
import BookTestDetails from '../../../BookMyTest/BookDetails'
import DateTimePicker from '../../../../Components/Booking/DateTimePicker'
import Faq from '../../../Faq/Faq'
import InsuranceAccepted from '../../../../Components/InsuranceAccepted'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'
import { Helmet } from "react-helmet";


const TestingSchool = () => {
  return (
    <div>
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <br></br>
      <Index/>
      <div className="container">
<h1>
  Book Your appointment
  </h1>
      {/* <DateTimePicker/> */}
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
