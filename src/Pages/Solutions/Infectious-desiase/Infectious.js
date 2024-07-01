import React from 'react'
import Content from '../../Components/content/Content'
import Workwithus from '../../Components/Workwithus/Workwithus'
import Featuresection from '../../Components/Workwithus/Featuresection'
import Video from '../../Components/Video/Video'
import { HorizontalCard } from '../../Components/Horizantal-Card/HorizontalCard'
import { Stats } from '../../Components/Stats/Stats'
import FeatureComponent from '../../Components/Accordain/FeatureComponent'
import { FeatureSection } from '../../Components/Feature/FeatureSection'
import SocialLinks from '../../Components/Animation-Components/Hover-Animation-sociallinks/SocialLinks'
import ThemeSwitch from '../../Components/Animation-Components/Theme-ChangeSwitch/ThemeSwitch'
import ButtonComponent from '../../Components/Animation-Components/Submit-Button/ButtonComponent'
import GetStartedCard from '../../Components/GetStartedCard/Getstarted'

const Infectious = () => {
  return (
    <div>
      <Content/>
      <HorizontalCard/>
      <Video/>
      <GetStartedCard/>
      {/* <SocialLinks/>
      <ThemeSwitch/>
      <ButtonComponent/> */}
      {/* <Stats/> */}
      {/* <FeatureSection/> */}
      {/* <Workwithus/> */}
      {/* <Featuresection/> */}

    </div>
  )
}

export default Infectious
