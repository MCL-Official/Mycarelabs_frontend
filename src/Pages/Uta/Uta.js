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
import { SlideInAuth } from '../../Components/Contact/SlideInAuth'
import UtaComp from "../../Components/UTA-Comp/UtaComp"

const Uta = () => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      {/* <br></br> */}
      {/*<Hero/>*/}
      <UtaComp />
      <SubElement />
      <SubElement1 />
      <SubElement2 />
      <OutlineCards />
      <SubElement3 />
      {/* <SlidePricing/> */}
      <InsuranceAccepted />
      <FaqWellness />
      <SlideInAuth />

    </div>
  )
}

export default Uta
