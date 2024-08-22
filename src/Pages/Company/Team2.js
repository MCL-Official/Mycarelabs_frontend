import React from 'react'
import { Sampletest } from '../../Components/Team/Sampletest'
import { ContactForm } from '../../Components/Team/ContactForm'
import { CountUpStats } from '../../Components/Team/CountUpStats'
import DragShuffleHero from '../../Components/Team/DragShuffleHero'
import CollapseCardFeatures from '../../Components/Team/CollapseCardFeatures'
import { Helmet } from "react-helmet";
import { Index } from '../Careers/Index'
import ScrollingTestimonials from '../../Components/ScrollingTestimonials'


// import Teamsample from '../../Components/Team/Teamsample'

const Team2 = () => {
  return (
    <div>
        <Helmet>
        <title>        About Us | My Care Labs - Trusted Diagnostic Services</title>
        <meta name="description" content="
Learn about My Care Labs, your trusted partner in diagnostic testing. Discover our commitment to quality, reliability, and exceptional patient care." />
        <meta name="keywords" content="diagnostic services, My Care Labs, quality lab testing" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      {/* <Teamsample/> */}
      <br></br>
      <br></br>
      <Sampletest/>
      <CollapseCardFeatures/>
      <CountUpStats/>
      {/* <Index/> */}
      <ScrollingTestimonials/>
      {/* <DragShuffleHero/> */}
      <ContactForm/>
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      sksd */}
    </div>
  )
}

export default Team2
