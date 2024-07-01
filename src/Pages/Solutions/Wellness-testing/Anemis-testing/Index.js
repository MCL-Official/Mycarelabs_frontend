import React from 'react';
import AnemiaTesting from '../Anemis-testing/Anemia';
import GetStartedCard from '../../../../Components/GetStartedCard/Getstarted';

const anemiaTestData = [
  {
    stepNumber: 1,
    title: 'Why Are Anemia Profile Tests Done?',
    points: [
      {
        heading: 'Identifying the Type of Anemia:',
        content: 'One of the primary reasons for conducting Anemia Profile Tests is to identify the specific type of anemia. The test assesses red blood cell parameters, helping healthcare providers distinguish between diverse types such as iron-deficiency anemia, vitamin deficiency anemia, or hemolytic anemia.'
      },
      {
        heading: 'Assessing Iron Levels:',
        content: 'The Anemia Profile Test includes the evaluation of iron levels in the blood. This is crucial for identifying iron-deficiency anemia, a common type caused by insufficient iron necessary for hemoglobin production.'
      },
      {
        heading: 'Pinpointing Underlying Causes:',
        content: 'Anemia Profile Tests help in pinpointing the underlying causes of anemia. Whether it is nutritional deficiencies, chronic diseases, or genetic factors, a comprehensive assessment aids healthcare providers in designing targeted treatment plans.'
      }
    ],
    image: 'data:image/jpeg;base64,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'
  },
  {
    stepNumber: 2,
    title: 'Understanding the Anemia Profile Test:',
    points: [
      {
        heading: 'Key Test Components:',
        content: 'The primary focus of the Anemia Profile Test is to evaluate red blood cell parameters, iron levels, and other factors crucial for identifying the specific type and cause of anemia.'
      }
    ],
    image: 'data:image/jpeg;base64,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'
  },
  {
    stepNumber: 3,
    title: 'Why Choose Care Labs for Anemia Profile Testing?',
    points: [
      {
        heading: 'Accurate and Reliable Results:',
        content: 'Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable Anemia Profile Test results.'
      },
      {
        heading: 'Experienced Professionals:',
        content: 'At Care Labs, our team includes experienced pathologists and laboratory technicians dedicated to maintaining the highest standards of quality in anemia assessments.'
      },
      {
        heading: 'Convenient Location:',
        content: 'Situated in Fremont, California, our lab is easily accessible, providing convenience for individuals seeking Anemia Profile testing.'
      },
      {
        heading: 'Innovative Facilities:',
        content: 'My Care Labs are equipped with modern facilities, adhering to the latest advancements in medical technology for efficient and accurate testing.'
      }
    ],
    image: 'data:image/jpeg;base64,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'
  },
  {
    stepNumber: 4,
    title: 'The Anemia Profile Testing Process:',
    points: [
      {
        heading: 'Scheduling:',
        content: 'Schedule your Anemia Profile Test at Care Labs by booking an appointment. We offer flexible scheduling to accommodate your convenience.'
      },
      {
        heading: 'Sample Collection:',
        content: 'Our skilled phlebotomists will collect a small blood sample using advanced and minimally invasive techniques for your comfort.'
      },
      {
        heading: 'Laboratory Analysis:',
        content: 'The collected sample undergoes comprehensive laboratory analysis using innovative technology to assess red blood cell parameters, iron levels, and other relevant factors.'
      },
      {
        heading: 'Results Delivery:',
        content: 'Expect timely and confidential delivery of your Anemia Profile Test results once the analysis is complete.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3bC8Jmv97IwoXpnVtFDfTwTc6O9kzknMlA&s'
  },
  {
    stepNumber: 5,
    title: 'Educational Resources',
    points: [
      {
        heading: '',
        content: 'For additional information on the Anemia Profile Test, we recommend referring to reputable sources such as My Care Labs. Understanding the test and its implications is crucial for identifying and addressing anemia effectively.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeWXk66idkQXp44bMIZy7gI1XM3hEJKwTbZA&s'
  },
  {
    stepNumber: 6,
    title: 'Iron Deficiency Anemia Profile',
    points: [
      {
        heading: 'Assessing Iron Levels:',
        content: 'The Anemia Profile Test includes an evaluation of iron levels in the blood, providing insights into whether iron deficiency is a contributing factor to anemia.'
      },
      {
        heading: 'Identifying Red Blood Cell Parameters:',
        content: 'This comprehensive profile assesses red blood cell parameters, including size, shape, and hemoglobin content, helping healthcare providers pinpoint specific types of anemia.'
      }
    ],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IHPcrZxLarXvqvCt3E4XSX-kKQo74F7pmA&s'
  }
];

const Index = () => {
  return (
    <div>
      {anemiaTestData.map((data, index) => (
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
