import React from 'react'
import Hero from './Hero'
import SubElement from './SubElement'
import SubElement1 from './SubElement1'
import SubElement2 from './SubElement2'
import SubElement3 from './SubElement3'
import InsuranceAccepted from '../../Components/InsuranceAccepted'
import FaqWellness from './FaqWellness'
import SubElement4 from './SubElement4'
import { OutlineCards } from './OutlineCards'
import SlidePricing from './SliderPricing'

const Uta = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      {/* <br></br> */}
      <Hero/>
      <SubElement/>
      <SubElement1/>
      <SubElement2/>
      <OutlineCards/>
      <SubElement3/>
      <SlidePricing/>
      <InsuranceAccepted />
      <FaqWellness/>

    </div>
  )
}

export default Uta
