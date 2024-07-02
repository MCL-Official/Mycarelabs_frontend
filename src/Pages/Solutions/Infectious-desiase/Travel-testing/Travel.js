import React from 'react'
import { BackgroundBlogCard } from '../../../../Components/SOLUTION/Travel/BackgroundBlogCard'
import InsuranceAccepted from '../../../../Components/InsuranceAccepted'
import { Hero } from '../../../../Components/SOLUTION/Travel/Hero-section/Hero'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'

const Travel = () => {
  return (
    <div>    
        <Hero/>       
      <BackgroundBlogCard/>
    <InsuranceAccepted/>
    <BlogPostCarousel/>
    </div>
  )
}

export default Travel
