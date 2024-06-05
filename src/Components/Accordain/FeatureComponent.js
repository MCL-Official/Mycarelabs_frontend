import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";

const features = {
  Toxicology: {
    title: "Toxicology",
    description: "MyCare Labs offers comprehensive toxicology testing services, ensuring accurate and timely results for various needs. Their state-of-the-art facilities and experienced professionals provide reliable screening for drugs, alcohol, and other substances.",
    buttonText: `BOOK TEST FOR Toxicology `,
    image: img1,
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">John Smith</span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">Beth Davis</span>
        <h2 className="text-xl font-bold mt-2">Issues Management Proposal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo a officiis. Mollitia architecto sed debitis laboriosam repellat repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi inventore blanditiis laboriosam?</p>
      </>
    ),
  },
  InfectiousDisease: {
    title: "Title for Kanban feature",
    description: "MyCare Labs provides top-tier testing solutions for infectious diseases,featuring an all-in-one swab for COVID-19, Influenza A/B, and RSV. Discover comprehensive and advanced diagnostics with MyCare Labs' reliable services.",
    buttonText: `BOOK TEST FOR InfectiousDisease`,
    image: img3,
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">John Smith</span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">Beth Davis</span>
        <h2 className="text-xl font-bold mt-2">Kanban Management Proposal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo a officiis. Mollitia architecto sed debitis laboriosam repellat repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi inventore blanditiis laboriosam?</p>
      </>
    ),
  },
  WellnessTesting: {
    title: "Title for Gantt feature",
    description: "MyCare Labs provides the best testing solutions, prioritizing your well-being with comprehensive wellness testing services.Take proactive steps towards a healthier, happier you with MyCare Labs' advanced diagnostics.",
    buttonText: `BOOK TEST FOR WellnessTesting`,
    image: img,
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">John Smith</span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">Beth Davis</span>
        <h2 className="text-xl font-bold mt-2">Gantt Chart Management Proposal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo a officiis. Mollitia architecto sed debitis laboriosam repellat repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi inventore blanditiis laboriosam?</p>
      </>
    ),
  },
  MobileTesting: {
    title: "Title for Documentation feature",
    description: " MyCare Labs provides the solution of mobile testing, allowing you to test from the comfort of your home. Explore the convenience and ease by scheduling your test where it suits you best.",
    buttonText: `Book Test For Mobile Testing`,
    image: img4,
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">John Smith</span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">Beth Davis</span>
        <h2 className="text-xl font-bold mt-2">AWS Migration Technical Proposal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo a officiis. Mollitia architecto sed debitis laboriosam repellat repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi inventore blanditiis laboriosam?</p>
      </>
    ),
  },
  ATHomeTestKits: {
    title: "Title for Documentation feature",
    description: "Our At-home Test Kits offer a convenient way to monitor your health. Order now for peace of mind.",
    buttonText: `BOOK TEST FOR AT HOME TEST KITS`,
    image: img5,
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">John Smith</span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">Beth Davis</span>
        <h2 className="text-xl font-bold mt-2">AWS Migration Technical Proposal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo a officiis. Mollitia architecto sed debitis laboriosam repellat repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi inventore blanditiis laboriosam?</p>
      </>
    ),
  },
};

function FeatureComponent() {
  const [selectedFeature, setSelectedFeature] = useState('MobileTesting');
  const [previousFeature, setPreviousFeature] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (feature) => {
    setIsAnimating(true);
    setPreviousFeature(selectedFeature);
    setSelectedFeature(feature);
  };

  const imageVariants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 20 : -20,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -20 : 20,
      transition: { duration: 0.3 },
    }),
  };

  const textVariants = {
    initial: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -20 : 20,
    }),
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 20 : -20,
      transition: { duration: 0.3 },
    }),
  };

  const direction = selectedFeature && previousFeature && Object.keys(features).indexOf(selectedFeature) > Object.keys(features).indexOf(previousFeature) ? 1 : -1;

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full lg:w-4/5" style={{ maxWidth: '75%' }}>
        <h3 className="flex justify-center text-2xl font-bold bg-transparent">
          <div className="relative inline-block bg-transparent text-center">
            <span className="text-blue-600 text-6xl font-bold mr-2">Solutions</span>
            <span className="text-orange-600 text-6xl font-bold">We Provide</span>
            <p className="info-description mt-4">
              My Care Labs offers quick, easy, and accurate RT-PCR testing for COVID-19, RSV, and Influenza A/B. We provide on-site testing at our lab and pop-up locations throughout California, with results available the same day or within 24 hours.
            </p>
          </div>
        </h3>
        <div className="flex justify-center flex-wrap gap-3 mb-6">
          {Object.keys(features).map((feature) => (
            <div className="flex items-center justify-center" key={feature}>
              <button
                className={`rounded-2xl border-2 min-w-[150px] md:min-w-[200px] border-black px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-4xl ${
                  selectedFeature === feature ? 'bg-blue-500 text-white' : 'bg-white'
                }`}
                onClick={() => handleClick(feature)}
              >
                {feature}
              </button>
            </div>
          ))}
        </div>
        <div className="rounded-2xl border-2 p-6 bg-white flex flex-col lg:flex-row mt-6 h-auto lg:h-[40rem] transition-all shadow-[3px_3px_0px_black] hover:translate-x-[3px] hover:translate-y-[3px] ${selectedFeature === feature ? 'border-blue-600 text-blue-600' : 'border-gray-300'}">
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={features[selectedFeature].image}
              src={features[selectedFeature].image}
              alt={features[selectedFeature].title}
              className="w-full lg:w-1/2 h-64 lg:h-96 object-cover mb-4 lg:mb-0 rounded-2xl"
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              variants={imageVariants}
            />
          </AnimatePresence>
          <div className="flex-grow lg:pl-4 mt-1 flex flex-col justify-between">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={features[selectedFeature].title}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                variants={textVariants}
              >
                <h2 className="text-4xl font-bold">{features[selectedFeature].title}</h2>
                <p className="mb-8 pt-7 font-semibold">{features[selectedFeature].description}</p>
              </motion.div>
            </AnimatePresence>
            <motion.button
              key={features[selectedFeature].buttonText}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={direction}
              variants={textVariants}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {features[selectedFeature].buttonText}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureComponent;
