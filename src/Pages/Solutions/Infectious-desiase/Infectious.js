import React from 'react'
import Content from '../../../Components/content/Content'
import Workwithus from '../../../Components/Workwithus/Workwithus'
import Featuresection from '../../../Components/Workwithus/Featuresection'
import Video from '../../../Components/Video/Video'
import { HorizontalCard } from '../../../Components/Horizantal-Card/HorizontalCard'
import { Stats } from '../../../Components/Stats/Stats'
import FeatureComponent from '../../../Components/Accordain/FeatureComponent'
import { FeatureSection } from '../../../Components/Feature/FeatureSection'
import SocialLinks from '../../../Components/Animation-Components/Hover-Animation-sociallinks/SocialLinks'
import ThemeSwitch from '../../../Components/Animation-Components/Theme-ChangeSwitch/ThemeSwitch'
import ButtonComponent from '../../../Components/Animation-Components/Submit-Button/ButtonComponent'
import GetStartedCard from '../../../Components/GetStartedCard/Getstarted'
import { Helmet } from "react-helmet";
import HoverCards1 from '../../../Components/HoverCard/HoverCards1'


const Infectious = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <Content />
      <HoverCards1 />
      <HorizontalCard />
      <Video />
      <GetStartedCard />
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
