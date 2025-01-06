import React from 'react'
import Hero from '../../../../Components/Hero'
import ShuffleHero from '../../../../Components/shuffel/SuffleHero'
import TabsFeatures from '../../../../Components/SOLUTION/Other-solution/magnisui-test/TabsFeatures'
import HoverCards from '../../../../Components/HoverCard/HoverCards'
import { Helmet } from "react-helmet";
import HoverCards1 from "../../../../Components/HoverCard/HoverCards1"


const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <ShuffleHero />

      <TabsFeatures />
      <HoverCards />





      <div class="container flex items-center bg-blue-900 rounded-full	 my-5">

        <div class="container overflow-hidden flex items-center bg-blue-900 rounded-full my-4">

          <div class="px-4 container mt-12 mb-16 sm:mt-20">
            <div class="text-center">
              <h1 class="text-xl font-extrabold tracking-tight text-gray-200 sm:text-4xl md:text-5xl font-title">
                <span class="block">My Care Labs is a certified BBB accredited business member.</span>
              </h1>
              <p class="text-sm sm:text-2xl text-gray-300">
                My Care Labs offers quick, hassle-free, and accurate COVID-19 RT-PCR testing. With same day results or within 24 hours, we have testing on-site at our laboratory and at pop-ups throughout California. My Care Labs takes your health seriously. We are a CLIA-certified laboratory, part of the California Covid Task Force, partner with CDPH, and report directly to CDC.
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Index
