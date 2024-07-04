import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const VerticalSlideFeatures = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-6 bg-white px-4 py-12 md:flex-row md:gap-12 md:px-8">
      <AnimatePresence mode="wait">
        {basicMetabolicPanelData.map((tab, index) => {
          return selected === index ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              key={index}
              className="w-full"
            >
              <Feature {...tab} />
            </motion.div>
          ) : null;
        })}
      </AnimatePresence>
      <Tabs selected={selected} setSelected={setSelected} />
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="w-full shrink-0 overflow-scroll md:w-fit">
      {basicMetabolicPanelData.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, title, setSelected, tabNum }) => {
  return (
    <div className="group relative w-full md:w-fit">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full border-l-[6px] border-slate-200 p-4 transition-colors group-hover:border-slate-300 md:flex-col md:border-l-8 md:p-6"
      >
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xl font-bold transition-colors md:text-2xl ${
            selected
              ? "text-violet-500"
              : "text-slate-400 group-hover:text-slate-500"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="vertical-slide-feature-slider"
          className="absolute bottom-0 left-0 top-0 z-10 w-[6px] bg-violet-500 md:w-2"
        />
      )}
    </div>
  );
};

const Feature = ({ title, points, image }) => (
  <div className="flex flex-col md:flex-row items-center w-full">
    <div className="relative h-[250px] w-full md:h-[500px] md:w-1/2 rounded-xl bg-slate-800 shadow-xl">
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover rounded-xl"
        />
      )}
      <div className="absolute top-0 left-0 p-4 bg-black bg-opacity-50 text-white w-full rounded-t-xl">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
    <div className="w-full md:w-1/2 p-6">
      {points.map((point, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{point.heading}</h3>
          <p className="text-slate-600">{point.content}</p>
        </div>
      ))}
    </div>
  </div>
);

export default VerticalSlideFeatures;

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
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-165.jpg"
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
