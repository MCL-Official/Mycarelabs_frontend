import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';

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
    image: 'data:image/jpeg;base64,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'
  },
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
      {basicMetabolicPanelData.map((data, index) => (
        <AnemiaTesting
          key={index}
          stepNumber={data.stepNumber}
          title={data.title}
          points={data.points}
          image={data.image}
          
          reverse={data.stepNumber % 2 === 0}
        />
      ))}
      <GetStartedCard />
    </div>
  );
};

export default Index;
