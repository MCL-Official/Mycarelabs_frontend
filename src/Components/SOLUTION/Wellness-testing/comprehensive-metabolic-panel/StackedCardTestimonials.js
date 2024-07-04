import { useState } from "react";
import { motion } from "framer-motion";

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-white py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-5xl text-slate-800 font-semibold">What is a Comprehensive Metabolic Panel (CMP) Test?</h3>
        <p className="text-slate-500 my-4">
          The CMP test is a blood test that provides valuable insights into your body’s overall health. It evaluates multiple aspects, 
          including glucose levels, electrolyte balance, kidney function, liver health, and more.
          It comprises a series of blood tests conducted concurrently, offering a comprehensive overview of your metabolic health.
        </p>
        <SelectBtns
          numTracks={cmpTestData.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={cmpTestData}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: "0%",
                }}
                animate={{
                  width: "100%",
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? "100%" : "0%",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

const Cards = ({ testimonials, selected, setSelected }) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

const Card = ({
  image,
  title,
  points,
  position,
  selected,
  setSelected,
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
  const background = position % 2 ? "black" : "white";
  const color = position % 2 ? "white" : "black";

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: "left bottom",
        background,
        color,
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <img src={image} alt={`${title} image`} className="w-24 h-24 mx-auto object-cover rounded-full" />
      <h4 className="text-2xl font-semibold mt-4">{title}</h4>
      {points.map((point, index) => (
        <div key={index} className="my-2">
          <h5 className="text-lg font-semibold text-left">{point.heading}</h5>
          <p className="text-base text-left">{point.content}</p>
        </div>
      ))}
    </motion.div>
  );
};

export default StackedCardTestimonials;

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
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-174.jpg"
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
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-176.jpg"
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
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-175.jpg"
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
    //   {
    //     heading: 'Results Delivery:',
    //     content: 'Expect timely and confidential delivery of your CMP test results once the analysis is complete.'
    //   }
    ],
    image:  "https://mycarelabs.com/wp-content/uploads/2024/01/image-177.jpg"
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
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-179.jpg"
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
    //   {
    //     heading: 'Kidney Function Tests (Blood Urea Nitrogen and Creatinine):',
    //     content: 'These tests measure the levels of blood urea nitrogen and creatinine in the blood, providing insights into kidney function.'
    //   },
    //   {
    //     heading: 'Liver Function Tests (Alkaline Phosphatase, Alanine Aminotransferase, Aspartate Aminotransferase, and Bilirubin):',
    //     content: 'These tests measure the levels of specific enzymes and bilirubin in the blood, providing insights into liver function.'
    //   }
    ],
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-178.jpg"
  }
];

const testimonials1 = [
  {
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-174.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Jane Dodson",
    title: "Marketing Director, Nike",
  },
  {
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-176.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Johnathan Rodriguez",
    title: "UX Research, Atlassian",
  },
  {
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-175.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Phil Heath",
    title: "Staff Engineer, Dribbble",
  },
  {
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-177.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Andrea Beck",
    title: "Marketing Manager, GrubHub",
  },
  {
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-178.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Daniel Henderson",
    title: "Engineering Manager, Kaggle",
  },
  {
    image: "https://mycarelabs.com/wp-content/uploads/2024/01/image-179.jpg",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sequi cupiditate harum repellendus ipsum dignissimos? Officiis ipsam dolorum magnam assumenda.",
    name: "Anderson Lima",
    title: "Product Manager, Slack",
  },
];
