import React from 'react'
import { Sampletest } from '../../Components/Team/Sampletest'
import { ContactForm } from '../../Components/Team/ContactForm'
import { CountUpStats } from '../../Components/Team/CountUpStats'
import DragShuffleHero from '../../Components/Team/DragShuffleHero'
import CollapseCardFeatures from '../../Components/Team/CollapseCardFeatures'

// import Teamsample from '../../Components/Team/Teamsample'

const Team2 = () => {
  return (
    <div>
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
