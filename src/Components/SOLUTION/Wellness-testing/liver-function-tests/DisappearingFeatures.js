import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const DisappearingFeatures = () => {
  return (
    <>
      <div className="relative h-fit bg-indigo-50">
        <Features />
      </div>

      <div className="h-[50vh] bg-white" />
    </>
  );
};

const Features = () => {
  return (
    <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <Copy />
      <Carousel />
    </div>
  );
};

const Copy = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
      <span className="w-fit rounded-full bg-indigo-500 px-4 py-2 text-sm uppercase text-indigo-100">
        Lorem ipsum dolor
      </span>
      {basicMetabolicPanelData.map((item, index) => (
        <FeatureText
          key={index}
          scrollYProgress={scrollYProgress}
          position={index + 1}
          numItems={basicMetabolicPanelData.length}
          title={item.title}
          points={item.points}
        />
      ))}
    </div>
  );
};

const FeatureText = ({ scrollYProgress, position, numItems, title, points }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const translateY = useTransform(scrollYProgress, [start, end], ["0%", "50%"]);

  return (
    <motion.div
      style={{
        opacity,
        translateY,
      }}
      className="mb-8"
    >
      <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
        {title}
      </h2>
      {points.map((point, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{point.heading}</h3>
          <p className="text-indigo-950">{point.content}</p>
        </div>
      ))}
    </motion.div>
  );
};

const Carousel = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div className="relative w-full">
      <Gradient />

      <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">
        {basicMetabolicPanelData.map((item, index) => (
          <CarouselItem
            key={index}
            scrollYProgress={scrollYProgress}
            position={index + 1}
            numItems={basicMetabolicPanelData.length}
            image={item.image}
          />
        ))}
      </div>

      <Buffer />
    </div>
  );
};

const CarouselItem = ({ scrollYProgress, position, numItems, image }) => {
  const stepSize = 1 / numItems;
  const end = stepSize * position;
  const start = end - stepSize;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
      }}
      className="grid aspect-video w-full shrink-0 place-content-center rounded-2xl bg-neutral-900"
    >
      <img
        src={image}
        alt={`Feature ${position}`}
        className="w-full h-full object-cover rounded-2xl"
      />
    </motion.div>
  );
};

const Gradient = () => (
  <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;

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
    image: "/mnt/data/image.png"
  },
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
    image: ""
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
