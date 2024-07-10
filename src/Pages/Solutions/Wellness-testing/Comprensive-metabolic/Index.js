import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import StackedCardTestimonials from '../../../../Components/SOLUTION/Wellness-testing/comprehensive-metabolic-panel/StackedCardTestimonials';
import { ImageTrailHero } from '../../../../Components/SOLUTION/Wellness-testing/comprehensive-metabolic-panel/ImageTrailHero';
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel';
import { Helmet } from "react-helmet";


const cmpTestData = [
  {
    stepNumber: 1,
    title: 'Why Are Comprehensive Metabolic Panel (CMP) Tests Done?',
    points: [
      {
        heading: 'Assessing Organ Function:',
        content: 'CMP tests are essential for assessing the function of key organs such as the liver, kidneys, and heart by measuring various substances in the blood.'
      },
      {
        heading: 'Diagnosing Conditions:',
        content: 'These tests help diagnose a wide range of conditions, including diabetes, liver disease, and kidney disease, by evaluating glucose levels, electrolytes, and kidney and liver enzymes.'
      },
      {
        heading: 'Monitoring Chronic Diseases:',
        content: 'CMP tests are vital for monitoring chronic conditions like diabetes and hypertension, helping healthcare providers manage and adjust treatment plans effectively.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 2,
    title: 'Understanding the CMP Test:',
    points: [
      {
        heading: 'Key Test Components:',
        content: 'The CMP test measures several components in the blood, including glucose, calcium, proteins, electrolytes, and enzymes, providing a comprehensive overview of metabolic and organ function.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 3,
    title: 'Why Choose Our Lab for CMP Testing?',
    points: [
      {
        heading: 'Accurate and Reliable Results:',
        content: 'Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable CMP test results.'
      },
      {
        heading: 'Experienced Professionals:',
        content: 'Our team includes experienced pathologists and laboratory technicians dedicated to maintaining the highest standards of quality in metabolic assessments.'
      },
      {
        heading: 'Convenient Location:',
        content: 'Situated in a prime location, our lab is easily accessible, providing convenience for individuals seeking CMP testing.'
      },
      {
        heading: 'Innovative Facilities:',
        content: 'Our lab is equipped with modern facilities, adhering to the latest advancements in medical technology for efficient and accurate testing.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 4,
    title: 'The CMP Testing Process:',
    points: [
      {
        heading: 'Scheduling:',
        content: 'Schedule your CMP test by booking an appointment. We offer flexible scheduling to accommodate your convenience.'
      },
      {
        heading: 'Sample Collection:',
        content: 'Our skilled phlebotomists will collect a small blood sample using advanced and minimally invasive techniques for your comfort.'
      },
      {
        heading: 'Laboratory Analysis:',
        content: 'The collected sample undergoes comprehensive laboratory analysis using innovative technology to assess various components in the blood.'
      },
      {
        heading: 'Results Delivery:',
        content: 'Expect timely and confidential delivery of your CMP test results once the analysis is complete.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 5,
    title: 'Educational Resources',
    points: [
      {
        heading: '',
        content: 'For additional information on the CMP test, we recommend referring to reputable sources. Understanding the test and its implications is crucial for identifying and addressing metabolic and organ function issues effectively.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 6,
    title: 'Common Components of a CMP Test',
    points: [
      {
        heading: 'Glucose:',
        content: 'This test measures the level of glucose in the blood, providing insights into blood sugar regulation and potential diabetes.'
      },
      {
        heading: 'Calcium:',
        content: 'This test measures the level of calcium in the blood, which is essential for bone health, muscle function, and nerve signaling.'
      },
      {
        heading: 'Proteins (Albumin and Total Protein):',
        content: 'These tests measure the levels of albumin and total protein in the blood, which are important for various bodily functions, including tissue repair and immune function.'
      },
      {
        heading: 'Electrolytes (Sodium, Potassium, Carbon Dioxide, and Chloride):',
        content: 'These tests measure the levels of key electrolytes in the blood, which are crucial for maintaining fluid balance, nerve function, and muscle function.'
      },
      {
        heading: 'Kidney Function Tests (Blood Urea Nitrogen and Creatinine):',
        content: 'These tests measure the levels of blood urea nitrogen and creatinine in the blood, providing insights into kidney function.'
      },
      {
        heading: 'Liver Function Tests (Alkaline Phosphatase, Alanine Aminotransferase, Aspartate Aminotransferase, and Bilirubin):',
        content: 'These tests measure the levels of specific enzymes and bilirubin in the blood, providing insights into liver function.'
      }
    ],
    image: 'https://via.placeholder.com/150'
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
      {/* {cmpTestData.map((data, index) => (
        <AnemiaTesting
          key={index}
          stepNumber={data.stepNumber}
          title={data.title}
          points={data.points}
          image={data.image}
          reverse={data.stepNumber % 2 === 0}
        />
      ))} */}
      <ImageTrailHero/>
      <StackedCardTestimonials/>
      <BlogPostCarousel/>
      <GetStartedCard />
    </div>
  );
};

export default Index;
