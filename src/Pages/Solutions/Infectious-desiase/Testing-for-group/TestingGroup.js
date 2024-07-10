import React from 'react'
import { Index } from '../../../../Components/SOLUTION/Infectious-desiase/Group/Index'
import { Feature } from '../../../../Components/SOLUTION/Infectious-desiase/Group/Feature'
import { Testimonials } from '../../../../Components/SOLUTION/Infectious-desiase/Group/Testimonials'
import DateTimePicker from '../../../../Components/Booking/DateTimePicker'
import Faq1 from '../../../Faq/Faq1'
import Faq from '../../../Faq/Faq'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'
import { Helmet } from "react-helmet";


const TestingGroup = () => {
  return (
    <div>
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Index/>
      <DateTimePicker/>
      <Feature/>
      <Testimonials/>
      <Faq/>
      <BlogPostCarousel/>
      <br></br>
    </div>
  )
}

export default TestingGroup
