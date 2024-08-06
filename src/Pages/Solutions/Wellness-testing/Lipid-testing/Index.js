import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import { AnemiaTest } from '../../../../Components/SOLUTION/Wellness-testing/lipid-profile-test/AnemiaTest';
import SwapColumnFeatures from '../../../../Components/SOLUTION/Wellness-testing/lipid-profile-test/SwapColumnFeatures';
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel';
import { Helmet } from "react-helmet";


const Index = () => {
  return (
    <div>
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
      <meta 
        name="description" 
        content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." 
      />
      <meta 
        name="keywords" 
        content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" 
      />
      <meta 
        name="author" 
        content="My Care Labs" 
      />
      <meta 
        property="og:title" 
        content="Welcome to My Care Labs | Comprehensive Health Solutions" 
      />
      </Helmet>
      <br></br>
      <br></br>
   
      <AnemiaTest/>
<SwapColumnFeatures/>
      <BlogPostCarousel/>
      <GetStartedCard />
      
    </div>
  );
};

export default Index;
