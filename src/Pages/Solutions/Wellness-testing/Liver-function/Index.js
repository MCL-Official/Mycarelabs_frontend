import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import CardCarousel from '../../../../Components/HoverCard/CardCarousel';
import { DisappearingFeatures } from '../../../../Components/SOLUTION/Wellness-testing/liver-function-tests/DisappearingFeatures';
import Sample from '../../../../Components/SOLUTION/Wellness-testing/liver-function-tests/Sample';

import { Helmet } from "react-helmet";
import { FiftyFiftyHero } from '../../../../Components/SOLUTION/Wellness-testing/liver-function-tests/FiftyFiftyHero';


const liverFunctionalityTestData = [
  {
    stepNumber: 1,
    title: 'Why Are Liver Functionality Tests Done?',
    points: [
      {
        heading: 'Assessing Liver Health:',
        content: 'Liver Functionality Tests are essential for evaluating the overall health of the liver. These tests help detect inflammation, infection, or damage to the liver tissues.'
      },
      {
        heading: 'Diagnosing Liver Diseases:',
        content: 'These tests are crucial in diagnosing various liver diseases such as hepatitis, cirrhosis, and liver cancer by measuring different enzymes and proteins in the blood.'
      },
      {
        heading: 'Monitoring Treatment Progress:',
        content: 'Liver Functionality Tests help in monitoring the effectiveness of treatment for liver diseases, ensuring that the treatment plan is working and adjusting it as necessary.'
      }
    ],
    image: 'https://mycarelabs.com/wp-content/uploads/2024/01/image-203.jpg'
  },
  {
    stepNumber: 2,
    title: 'Understanding the Liver Functionality Test:',
    points: [
      {
        heading: 'Key Test Components:',
        content: 'The primary focus of Liver Functionality Tests is to measure enzymes like ALT and AST, and proteins such as albumin, which are critical indicators of liver health.'
      }
    ],
    image: 'https://mycarelabs.com/wp-content/uploads/2024/01/image-204.jpg'
  },
  {
    stepNumber: 3,
    title: 'Why Choose Care Labs for Liver Functionality Testing?',
    points: [
      {
        heading: 'Accurate and Reliable Results:',
        content: 'Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable Liver Functionality Test results.'
      },
      {
        heading: 'Experienced Professionals:',
        content: 'At Care Labs, our team includes experienced pathologists and laboratory technicians dedicated to maintaining the highest standards of quality in liver assessments.'
      },
      {
        heading: 'Convenient Location:',
        content: 'Situated in Fremont, California, our lab is easily accessible, providing convenience for individuals seeking Liver Functionality testing.'
      },
      {
        heading: 'Innovative Facilities:',
        content: 'My Care Labs are equipped with modern facilities, adhering to the latest advancements in medical technology for efficient and accurate testing.'
      }
    ],
    image: 'https://mycarelabs.com/wp-content/uploads/2024/01/image-205.jpg'
  },
  {
    stepNumber: 4,
    title: 'The Liver Functionality Testing Process:',
    points: [
      {
        heading: 'Scheduling:',
        content: 'Schedule your Liver Functionality Test at Care Labs by booking an appointment. We offer flexible scheduling to accommodate your convenience.'
      },
      {
        heading: 'Sample Collection:',
        content: 'Our skilled phlebotomists will collect a small blood sample using advanced and minimally invasive techniques for your comfort.'
      },
      {
        heading: 'Laboratory Analysis:',
        content: 'The collected sample undergoes comprehensive laboratory analysis using innovative technology to assess liver enzyme levels and other relevant factors.'
      },
      {
        heading: 'Results Delivery:',
        content: 'Expect timely and confidential delivery of your Liver Functionality Test results once the analysis is complete.'
      }
    ],
    image: 'https://mycarelabs.com/wp-content/uploads/2024/01/image-206.jpg'
  },
  {
    stepNumber: 5,
    title: 'Educational Resources',
    points: [
      {
        heading: '',
        content: 'For additional information on the Liver Functionality Test, we recommend referring to reputable sources such as My Care Labs. Understanding the test and its implications is crucial for identifying and addressing liver-related issues effectively.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWXk66idkQXp44bMIZy7gI1XM3hEJKwTbZA&s'
  },
  {
    stepNumber: 6,
    title: 'Liver Enzyme Profile',
    points: [
      {
        heading: 'Assessing Enzyme Levels:',
        content: 'The Liver Functionality Test includes an evaluation of enzyme levels in the blood, providing insights into the liver’s functioning and identifying any abnormalities.'
      },
      {
        heading: 'Identifying Liver Health Indicators:',
        content: 'This comprehensive profile assesses liver health indicators, including ALT, AST, and albumin levels, helping healthcare providers pinpoint specific liver conditions.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IHPcrZxLarXvqvCt3E4XSX-kKQo74F7pmA&s'
  }
];


const Index = () => {
  return (
    <div>
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <Sample/>
      <FiftyFiftyHero/>
      {/* <DisappearingFeatures/> */}
      {/* {liverFunctionalityTestData.map((data, index) => (
        <AnemiaTesting
          key={index}
          stepNumber={data.stepNumber}
          title={data.title}
          points={data.points}
          image={data.image}
          
          reverse={data.stepNumber % 2 === 0}
        />
      ))} */}
      <GetStartedCard />
      <CardCarousel/>
    </div>
  );
};

export default Index;
