import React from 'react'
import { BackgroundBlogCard } from '../../../../Components/SOLUTION/Travel/BackgroundBlogCard'
import InsuranceAccepted from '../../../../Components/InsuranceAccepted'
import { Hero } from '../../../../Components/SOLUTION/Travel/Hero-section/Hero'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'
import { Helmet } from "react-helmet";


const Travel = () => {
  return (
    <div>    
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
        <Hero/>       
      <BackgroundBlogCard/>
    <InsuranceAccepted/>
    <BlogPostCarousel/>
    </div>
  )
}

export default Travel
