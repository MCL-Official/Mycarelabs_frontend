import React from 'react'
import { Sampletest } from '../../Components/Team/Sampletest'
import { ContactForm } from '../../Components/Team/ContactForm'
import { CountUpStats } from '../../Components/Team/CountUpStats'
import DragShuffleHero from '../../Components/Team/DragShuffleHero'
import CollapseCardFeatures from '../../Components/Team/CollapseCardFeatures'
import { Helmet } from "react-helmet";


// import Teamsample from '../../Components/Team/Teamsample'

const Team2 = () => {
  return (
    <div>
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      {/* <Teamsample/> */}
      <br></br>
      <br></br>
      <Sampletest/>
      <CollapseCardFeatures/>
      <CountUpStats/>
      <DragShuffleHero/>
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
