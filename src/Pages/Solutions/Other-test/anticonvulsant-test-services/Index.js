import React from 'react'
import { HeroAnti } from '../../../../Components/SOLUTION/Other-solution/anticonvulsant-test-services/HeroAnti'
import CardCarousel from '../../../../Components/HoverCard/CardCarousel'
import AccordionSolutions from '../../../../Components/SOLUTION/Other-solution/anticonvulsant-test-services/AccordionSolutions'
import { Helmet } from "react-helmet";


const Index = () => {
  return (
    <div>
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <HeroAnti/>
      <AccordionSolutions/>
      <CardCarousel/>
    </div>
  )
}

export default Index
