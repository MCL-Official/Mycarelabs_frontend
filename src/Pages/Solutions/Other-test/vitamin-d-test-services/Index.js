import React from 'react'
import { HeroTestingSanple, NeuHero } from '../../../../Components/SOLUTION/Other-solution/vitamin-d-test-services/hero/HeroTestingSanple'
import { Copy } from '../../../../Components/SOLUTION/Other-solution/vitamin-d-test-services/Copy'
import { Supports } from '../../../../Components/SOLUTION/Other-solution/vitamin-d-test-services/Supports'
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel'
// import Hero from '../../../../Components/SOLUTION/Other-solution/vitamin-d-test-services/hero/HeroTestingSanple'

export default function Index() {
  return (
    <div>
     <NeuHero/>
     <Supports/>
     <BlogPostCarousel/>

{/* <div class="px-4 container mt-16 mb-16 sm:mt-24">
    <div class="text-center">
        <h1 class="text-4xl font-extrabold tracking-tight text-gray-200 sm:text-5xl md:text-6xl font-title">
            <span class="block">My Care Labs is a certified BBB accredited business member.</span>
        </h1>
        <p class="text-base text-gray-300">
        My Care Labs offers quick, hassle-free, and accurate COVID-19 RT-PCR testing. With same day results or within 24 hours, we have testing on-site at our laboratory and at pop-ups throughout California. My Care Labs takes your health seriously. We are a CLIA-certified laboratory, part of the California Covid Task Force, partner with CDPH, and report directly to CDC.
        </p>
       
    </div>
</div> */}
</div>
   
  )
}
