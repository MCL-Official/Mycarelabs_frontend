import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import { Helmet } from "react-helmet";
import santaImg from "../../Assets/santaImg.webp";
import bellBorder from "../../Assets/bellBorder2.webp"

const features = {
  "Infectious Disease": {
    title: "Infectious Disease",
    description:
      "My Care Labs provides top-tier testing solutions for infectious diseases by using an all-in-one swab for COVID-19, Influenza A/B, and RSV. Learn more about our reliable services and wide array of diagnostic options.",
    image: img3,
    route: "/testing-solutions/infectious-disease-testing-solutions",
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">
          John Smith
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">
          Beth Davis
        </span>
        <h2 className="text-xl font-bold mt-2">Kanban Management Proposal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo
          a officiis. Mollitia architecto sed debitis laboriosam repellat
          repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi
          inventore blanditiis laboriosam?
        </p>
      </>
    ),
  },
  Toxicology: {
    title: "Toxicology",
    description:
      "My Care Labs offers Therapeutic Drug Monitoring and Drugs of Abuse testing for various needs. Our facility and medical professionals provide reliable screening for drugs, alcohol, and other substances.",
    buttonText: `BOOK TEST FOR Toxicology `,
    image: "https://i.ibb.co/ypgvFHc/2.png", // Direct image URL
    route: "/testing-solutions/toxicology-testing-solutions/",
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">
          John Smith
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">
          Beth Davis
        </span>
        <h2 className="text-xl font-bold mt-2">Issues Management Proposal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo
          a officiis. Mollitia architecto sed debitis laboriosam repellat
          repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi
          inventore blanditiis laboriosam?
        </p>
      </>
    ),
  },
  "Wellness Testing": {
    title: "Wellness Testing",
    description:
      "My Care Labs provides the quickest and most accurate testing solutions, prioritizing your well-being with our wellness testing services. Take proactive steps towards a healthier, happier you with My Care Labs.",
    buttonText: `BOOK TEST FOR Wellness Testing`,
    image: "https://i.ibb.co/ZGvGrV5/Untitled-1280-x-720-px-1300-x-1000-px.png", // Direct image URL
    route: "/testing-solutions/wellness-testing-solutions/",
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">
          John Smith
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">
          Beth Davis
        </span>
        <h2 className="text-xl font-bold mt-2">
          Gantt Chart Management Proposal
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo
          a officiis. Mollitia architecto sed debitis laboriosam repellat
          repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi
          inventore blanditiis laboriosam?
        </p>
      </>
    ),
  },
  "Mobile Testing": {
    title: "Mobile Testing",
    description:
      "My Care Labs offers mobile testing, allowing you to test from the comfort of your home. This service is available for patients within 10-15 miles of our Fremont Laboratory.",
    buttonText: `Book Test For Mobile Testing`,
    image: "https://i.ibb.co/v4HJHzc/MOBILE-TESTING.png", // Direct image URL
    route: "/covid-test-locations",
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">
          John Smith
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">
          Beth Davis
        </span>
        <h2 className="text-xl font-bold mt-2">
          AWS Migration Technical Proposal
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo
          a officiis. Mollitia architecto sed debitis laboriosam repellat
          repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi
          inventore blanditiis laboriosam?
        </p>
      </>
    ),
  },
  "AT Home Test Kits": {
    title: "AT Home Test Kits",
    description:
      "Our At-home Test Kits offer a convenient way to monitor your health. Order now for peace of mind.",
    buttonText: `BOOK TEST FOR AT HOME TEST KITS`,
    image: img5,
    route: "/covid-test-locations",
    content: (
      <>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-blue-600 mr-2">
          John Smith
        </span>
        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-green-600">
          Beth Davis
        </span>
        <h2 className="text-xl font-bold mt-2">
          AWS Migration Technical Proposal
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicta hic quo
          a officiis. Mollitia architecto sed debitis laboriosam repellat
          repudiandae veniam quidem nesciunt beatae quis. Esse placeat quasi
          inventore blanditiis laboriosam?
        </p>
      </>
    ),
  },
};

function FeatureComponent() {
  const [selectedFeature, setSelectedFeature] = useState("Toxicology");
  const [previousFeature, setPreviousFeature] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = useNavigate();
  const scrollToRef = useRef(null); // Create a ref for the section to scroll to

  const handleClick = (feature) => {
    setIsAnimating(true);
    setPreviousFeature(selectedFeature);
    setSelectedFeature(feature);
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
    }
  };

  const handleButtonClick = () => {
    const route = features[selectedFeature].route;
    navigate(route);
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

  const direction =
    selectedFeature &&
      previousFeature &&
      Object.keys(features).indexOf(selectedFeature) >
      Object.keys(features).indexOf(previousFeature)
      ? 1
      : -1;

  return (
    <>
      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta
          name="description"
          content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being."
        />
        <meta
          name="keywords"
          content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits"
        />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <div className="flex justify-center items-center pt-2 xl:pt-10 2xl:pt-20 min-h-screen bg-white relative">
        <img src={bellBorder} style={{ width: "100%" }} alt="" className="absolute top-0 h-48 max-[1000px]:h-32" />
        <div className="w-full xl:w-4/5 2xl:max-w-[1440px] mx-auto overflow-hidden mt-40">
          <h3 className="flex justify-center text-2xl font-bold bg-transparent">
            <div className="relative inline-block bg-transparent text-center mb-4">
              <span ref={scrollToRef} className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 3xl:text-8xl 4xl:text-8xl  font-bold mr-2">
                Solutions
              </span>
              <span className="text-red-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 3xl:text-8xl font-bold"> We Provide
              </span>
            </div>
          </h3>

          <div className="flex justify-center flex-wrap gap-3 lg:gap-8 mb-6 lg:mb-64 xl:mb-24 2xl:mb-32">
            {Object.keys(features).map((feature) => (
              <div className="flex items-center justify-center" key={feature}>
                <button
                  className={`w-full rounded-2xl text-xs md:text-lg xl:text-xl border-2 min-w-[120px] md:min-w-[200px] border-black px-2 py-2 md:px-4 md:py-48 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-4xl ${selectedFeature === feature
                    ? "bg-green-500 text-black"
                    : "bg-white"
                    }`}
                  onClick={() => handleClick(feature)}
                >
                  {feature}
                </button>
              </div>
            ))}
            <div className="info-description  mt-4 sm:text-sm md:text-xl lg:text-xl  font-normal">
              My Care Labs offers quick, easy, and accurate RT-PCR testing for
              COVID-19, RSV, and Influenza A/B. We provide on-site testing at
              our lab and pop-up locations throughout California, with results
              available the same day or within 24 hours.
            </div>
          </div>


          {/*some css add for christmas
            relative , max-[1000px]:mt-32 , 
            */
          }
          <div
            className="rounded-2xl relative max-[1000px]:mt-32 bg-gradient-to-l from-red-500 to-white border-2 p-6 lg:pb-12 bg-white 
            flex flex-col lg:flex-row mt-6 h-auto lg:h-[40rem] xl:h-[45rem] 2xl:h-[50rem] transition-all 
            shadow-[3px_3px_0px_black] hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.img
                key={features[selectedFeature].image}
                src={features[selectedFeature].image}
                alt={features[selectedFeature].title}
                className="w-full lg:w-1/2 h-64 lg:h-full object-contain mb-4 lg:mb-0 rounded-2xl"
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                variants={imageVariants}
              />
            </AnimatePresence>
            <div className="flex-grow lg:pl-4 mt-1 flex flex-col justify-between md:w-1/2">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={features[selectedFeature].title}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={direction}
                  variants={textVariants}
                  className="h-full"
                >

                  <h2 className="text-4xl font-bold text-white">
                    {features[selectedFeature].title}
                  </h2>
                  <p className="text-2xl h-full flex items-center">
                    {features[selectedFeature].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <img src={santaImg} alt="" className="absolute -top-32 w-64 " />
          </div>


        </div>


      </div>
    </>
  );
}

export default FeatureComponent;

