import React from 'react'
import { Index } from '../../../../Components/SOLUTION/Infectious-desiase/Group/Index'
import { Feature } from '../../../../Components/SOLUTION/Infectious-desiase/Group/Feature'
import { Testimonials } from '../../../../Components/SOLUTION/Infectious-desiase/Group/Testimonials'
import DateTimePicker from '../../../../Components/Booking/DateTimePicker'
import Faq1 from '../../../Faq/Faq1'
import Faq from '../../../Faq/Faq'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'

const TestingGroup = () => {
  return (
    <div>
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
