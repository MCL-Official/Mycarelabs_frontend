import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import { AnemiaTest } from '../../../../Components/SOLUTION/Wellness-testing/anemia/AnemiaTest';
import SwapColumnFeatures from '../../../../Components/SOLUTION/Wellness-testing/anemia/SwapColumnFeatures';
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel';

const Index = () => {
  return (
    <div>
      <br></br>
      {/* <br></br> */}
      
      <AnemiaTest/>
<SwapColumnFeatures/>
      <BlogPostCarousel/>
      <GetStartedCard />
    </div>
  );
};

export default Index;
