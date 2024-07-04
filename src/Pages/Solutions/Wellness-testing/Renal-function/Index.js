import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import { RenalTest } from '../../../../Components/SOLUTION/Wellness-testing/renal-function-test/RenalTest';
import SwapColumnFeatures from '../../../../Components/SOLUTION/Wellness-testing/renal-function-test/SwapColumnFeatures';
import CardCarousel from '../../../../Components/HoverCard/CardCarousel';

const renalTestData = [
  {
    stepNumber: 1,
    title: 'Understanding the Renal Function Panel Test',
    points: [
      {
        heading: 'Overview:',
        content: 'A Renal Function Panel Test is designed to assess how well the kidneys are working. It includes a variety of tests that measure different aspects of kidney function.'
      },
      {
        heading: 'Components:',
        content: 'The panel typically includes tests for blood urea nitrogen (BUN), creatinine, and the glomerular filtration rate (GFR), among others.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TfXr4BHT8O0UUGq5XB7v3IpF_kb5ZJmfiQ&s'
  },
  {
    stepNumber: 2,
    title: 'Importance of the Renal Function Panel Test',
    points: [
      {
        heading: 'Detecting Kidney Disorders:',
        content: 'This test helps in identifying kidney disorders at an early stage, enabling timely intervention and treatment.'
      },
      {
        heading: 'Monitoring Chronic Conditions:',
        content: 'It is crucial for monitoring chronic conditions such as diabetes and hypertension, which can affect kidney function over time.'
      },
      {
        heading: 'Evaluating Kidney Function:',
        content: 'The test provides valuable information on how well the kidneys are filtering waste from the blood.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJotc2THLVKKXXS6eIldhU8jH-yOpu0l1Q3w&s'
  },
  {
    stepNumber: 3,
    title: 'Preparation for the Test',
    points: [
      {
        heading: 'Fasting Requirements:',
        content: 'Some components of the Renal Function Panel may require fasting. It is essential to follow the instructions provided by your healthcare provider.'
      },
      {
        heading: 'Medications:',
        content: 'Inform your doctor about any medications you are taking, as certain drugs can affect the test results.'
      },
      {
        heading: 'Hydration:',
        content: 'Drink plenty of water before the test unless advised otherwise by your healthcare provider.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKl8zKClNP_dYfFtY0zN6QsI2emx5c7KuT9g&s'
  },
  {
    stepNumber: 4,
    title: 'The Testing Process',
    points: [
      {
        heading: 'Sample Collection:',
        content: 'A blood sample will be collected from a vein in your arm. This procedure is quick and typically involves minimal discomfort.'
      },
      {
        heading: 'Laboratory Analysis:',
        content: 'The collected blood sample will be analyzed in a laboratory to measure the levels of various substances that reflect kidney function.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78SeFHFt3YHLtnIkG1AjoHn_5KtsJBl0ayQ&s'
  },
  {
    stepNumber: 5,
    title: 'Interpreting the Results',
    points: [
      {
        heading: 'Understanding Your Numbers:',
        content: 'Your healthcare provider will explain what the different components of the Renal Function Panel mean and how they relate to your kidney health.'
      },
      {
        heading: 'Follow-Up Tests:',
        content: 'Depending on the results, additional tests may be required to further investigate or confirm a diagnosis.'
      },
      {
        heading: 'Actionable Insights:',
        content: 'The test results can help guide treatment plans, dietary changes, and other interventions to support kidney health.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKuFt6AxuVUnPj3dhOY2E_k9tNq9IM6V2zUw&s'
  },
  {
    stepNumber: 6,
    title: 'Educational Resources',
    points: [
      {
        heading: '',
        content: 'For more information on Renal Function Panel Tests, refer to trusted medical resources or consult with your healthcare provider to better understand the significance of the test and how it pertains to your health.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3EJOt8cfqD-Q1uAL_fQsOQ8ULm5y1msNKA&s'
  }
];


const Index = () => {
  return (
    <div>
      <RenalTest/>
      <SwapColumnFeatures/>
      {/* {renalTestData.map((data, index) => (
        <AnemiaTesting
          key={index}
          stepNumber={data.stepNumber}
          title={data.title}
          points={data.points}
          image={data.image}
          
          reverse={data.stepNumber % 2 === 0}
        />
      ))} */}
      <CardCarousel/>
      <GetStartedCard />
    </div>
  );
};

export default Index;
