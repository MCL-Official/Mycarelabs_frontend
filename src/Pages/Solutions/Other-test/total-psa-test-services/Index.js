import React from 'react'
import Hero12 from '../../../../Components/SOLUTION/Other-solution/total-psa-test-services/Hero12'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'
import { Helmet } from "react-helmet";
import ContextHero from '../../../../Components/SOLUTION/Other-solution/total-psa-test-services/ContextHero';


const Index = () => {
  return (
   <>
     <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
   <Hero12/>
   <ContextHero/>
   <BlogPostCarousel/>
   </>
  )
}

export default Index
