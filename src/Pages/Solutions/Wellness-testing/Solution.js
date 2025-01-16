import React from 'react'
import TabsFeatures from '../../../Components/SOLUTION/Other-solution/magnisui-test/TabsFeatures'
import ShuffleHero1 from '../../../Components/SOLUTION/Wellness-testing/ShuffleHero1'
import BookAppointment from '../../../Components/BookAppointment'
import DateTimePicker from '../../../Components/Booking/DateTimePicker'
import BlogPostCarousel from '../../../Components/HoverCard/BlogPostCarousel'
import TabsFeatures1 from '../../../Components/SOLUTION/Wellness-testing/TabsFeatures1'
import GetStartedCard from '../../../Components/GetStartedCard/Getstarted'
import FaqWellness from '../../Faq/FaqWellness'
import FaqWellness2 from '../../Faq/FaqWellness2'
import HoverCards1 from '../../../Components/HoverCard/HoverCards1'

const Solution = () => {
  return (
    <div>
      <br></br>
      <br></br>

      <ShuffleHero1 />
      {/* <DateTimePicker/> */}
      <HoverCards1 />
      <TabsFeatures1 />
      <FaqWellness2 />
      <FaqWellness />
      <BlogPostCarousel />
      <GetStartedCard />
      {/* ddsdsdw */}
    </div>
  )
}

export default Solution
