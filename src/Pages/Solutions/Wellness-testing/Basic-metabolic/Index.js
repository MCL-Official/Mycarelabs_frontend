import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';
import VerticalSlideFeatures from '../../../../Components/SOLUTION/Wellness-testing/basic-metabolic-panel/VerticalSlideFeatures';
import Sample from '../../../../Components/SOLUTION/Wellness-testing/basic-metabolic-panel/Sample';
import BlogPostCarousel from '../../../../Components/HoverCard/BlogPostCarousel';

const basicMetabolicPanelData = [
  {
    stepNumber: 1,
    title: 'What is a Basic Metabolic Panel (BMP)?',
    points: [
      {
        heading: 'Overview:',
        content: 'A Basic Metabolic Panel (BMP) is a blood test that measures your glucose level, electrolyte and fluid balance, and kidney function. It provides important information about your body’s metabolism.'
      },
      {
        heading: 'Components of BMP:',
        content: 'The BMP includes tests for glucose, calcium, sodium, potassium, carbon dioxide (CO2), chloride, blood urea nitrogen (BUN), and creatinine.'
      }
    ],
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-165.jpg"  },
  {
    stepNumber: 2,
    title: 'Why is the BMP Important?',
    points: [
      {
        heading: 'Monitoring Health:',
        content: 'The BMP is crucial for monitoring your body’s chemical balance and metabolism, especially for individuals with conditions such as hypertension, diabetes, or kidney disease.'
      },
      {
        heading: 'Early Detection:',
        content: 'It helps in early detection of issues like kidney disease, respiratory problems, and complications related to diabetes and other chronic conditions.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9S7GtqKvnS8LPRy_tBFHMFfBNAWuzssNdw&s'
  },
  {
    stepNumber: 3,
    title: 'Preparing for a BMP Test',
    points: [
      {
        heading: 'Fasting Requirements:',
        content: 'You may be required to fast for 8-12 hours before the test. Follow your healthcare provider’s instructions regarding fasting.'
      },
      {
        heading: 'Medication Guidance:',
        content: 'Inform your healthcare provider about any medications or supplements you are taking, as some can affect the test results.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVU1wwVBhG3gySS0sh5xukZTod9p8BDkqS2Q&s'
  },
  {
    stepNumber: 4,
    title: 'The BMP Testing Process',
    points: [
      {
        heading: 'Sample Collection:',
        content: 'A healthcare professional will draw a small sample of blood from a vein in your arm. This process is quick and minimally invasive.'
      },
      {
        heading: 'Laboratory Analysis:',
        content: 'The blood sample is analyzed in a laboratory to measure the levels of various components, including glucose, calcium, and electrolytes.'
      },
      {
        heading: 'Results Interpretation:',
        content: 'Your healthcare provider will interpret the results and explain what they mean for your health. Abnormal levels may indicate a need for further testing or treatment.'
      }
    ],
    image: ""  },
  {
    stepNumber: 5,
    title: 'Understanding BMP Results',
    points: [
      {
        heading: 'Normal Ranges:',
        content: 'Your results will include levels for glucose, calcium, sodium, potassium, CO2, chloride, BUN, and creatinine. Each component has a normal range that indicates healthy function.'
      },
      {
        heading: 'Abnormal Results:',
        content: 'Abnormal results may require further investigation. For example, high glucose levels could indicate diabetes, while abnormal BUN or creatinine levels may suggest kidney issues.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IHPcrZxLarXvqvCt3E4XSX-kKQo74F7pmA&s'
  },
  {
    stepNumber: 6,
    title: 'Follow-Up and Next Steps',
    points: [
      {
        heading: 'Discussing with Your Doctor:',
        content: 'Schedule a follow-up appointment to discuss your BMP results with your healthcare provider. They will guide you on any necessary lifestyle changes or treatments.'
      },
      {
        heading: 'Regular Monitoring:',
        content: 'If you have a chronic condition, regular BMP testing may be recommended to monitor your health and adjust your treatment plan as needed.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3bC8Jmv97IwoXpnVtFDfTwTc6O9kzknMlA&s'
  }
];


const Index = () => {
  return (
    <div>

      <br></br>
      <Sample/>
      <VerticalSlideFeatures/>
      <BlogPostCarousel/>
      {/* {basicMetabolicPanelData.map((data, index) => (
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
    </div>
  );
};

export default Index;
