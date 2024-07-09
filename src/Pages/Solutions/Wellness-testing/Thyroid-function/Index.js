import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import { TextParallaxContentExample } from '../../../../Components/Scroll_Animation/TextParallaxContent';
import Samplehover from '../Anemis-testing/Samplehover';
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel';
import { Helmet } from "react-helmet";


const thyroidTestData = [
  {
    stepNumber: 1,
    title: 'Why Are Thyroid Profile Tests Done?',
    points: [
      {
        heading: 'Identifying Thyroid Disorders:',
        content: 'Thyroid Profile Tests are essential for diagnosing thyroid disorders such as hypothyroidism, hyperthyroidism, and autoimmune thyroid diseases. These tests evaluate the levels of thyroid hormones in the blood.'
      },
      {
        heading: 'Monitoring Thyroid Function:',
        content: 'Regular thyroid testing helps in monitoring the function of the thyroid gland, ensuring that it produces hormones within the normal range, which is crucial for metabolic processes in the body.'
      },
      {
        heading: 'Assessing Treatment Efficacy:',
        content: 'For individuals undergoing treatment for thyroid disorders, these tests are vital in assessing the effectiveness of the prescribed medication and making necessary adjustments.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 2,
    title: 'Understanding the Thyroid Profile Test:',
    points: [
      {
        heading: 'Key Test Components:',
        content: 'The primary focus of the Thyroid Profile Test is to measure levels of thyroid hormones such as T3, T4, and TSH in the blood to identify any abnormalities.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 3,
    title: 'Why Choose Our Lab for Thyroid Profile Testing?',
    points: [
      {
        heading: 'Accurate and Reliable Results:',
        content: 'Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable Thyroid Profile Test results.'
      },
      {
        heading: 'Experienced Professionals:',
        content: 'Our team includes experienced pathologists and laboratory technicians dedicated to maintaining the highest standards of quality in thyroid assessments.'
      },
      {
        heading: 'Convenient Location:',
        content: 'Situated in a prime location, our lab is easily accessible, providing convenience for individuals seeking Thyroid Profile testing.'
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
    title: 'The Thyroid Profile Testing Process:',
    points: [
      {
        heading: 'Scheduling:',
        content: 'Schedule your Thyroid Profile Test by booking an appointment. We offer flexible scheduling to accommodate your convenience.'
      },
      {
        heading: 'Sample Collection:',
        content: 'Our skilled phlebotomists will collect a small blood sample using advanced and minimally invasive techniques for your comfort.'
      },
      {
        heading: 'Laboratory Analysis:',
        content: 'The collected sample undergoes comprehensive laboratory analysis using innovative technology to assess thyroid hormone levels and other relevant factors.'
      },
      {
        heading: 'Results Delivery:',
        content: 'Expect timely and confidential delivery of your Thyroid Profile Test results once the analysis is complete.'
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
        content: 'For additional information on the Thyroid Profile Test, we recommend referring to reputable sources. Understanding the test and its implications is crucial for identifying and addressing thyroid disorders effectively.'
      }
    ],
    image: 'https://via.placeholder.com/150'
  },
  {
    stepNumber: 6,
    title: 'Common Thyroid Tests',
    points: [
      {
        heading: 'TSH (Thyroid Stimulating Hormone):',
        content: 'This test measures the level of TSH in the blood and is used to evaluate thyroid function and diagnose thyroid disorders.'
      },
      {
        heading: 'T3 and T4 (Triiodothyronine and Thyroxine):',
        content: 'These tests measure the levels of the thyroid hormones T3 and T4 in the blood, providing insights into thyroid function.'
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
      <Samplehover/>
      <TextParallaxContentExample/>
      {/* {thyroidTestData.map((data, index) => (
        <AnemiaTesting
          key={index}
          stepNumber={data.stepNumber}
          title={data.title}
          points={data.points}
          image={data.image}
          
          reverse={data.stepNumber % 2 === 0}
        />
      ))} */}
      <BlogPostCarousel/>
      <GetStartedCard />
    </div>
  );
};

export default Index;
