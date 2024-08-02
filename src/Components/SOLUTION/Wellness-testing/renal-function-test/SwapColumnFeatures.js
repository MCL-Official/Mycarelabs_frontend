import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiEye, FiPlay, FiSearch } from "react-icons/fi";

const Example = () => {
  return (
    <>
      <div className="flex h-48 flex-col items-center justify-center bg-slate-900">
        <span className="font-semibold uppercase text-white">Scroll down</span>
        <span className="mt-2 block rounded-full bg-indigo-600 px-4 py-1 text-center font-medium text-white md:hidden">
          Note: This is much cooler on desktop 😊
        </span>
      </div>
      <SwapColumnFeatures />
      <div className="flex h-48 items-center justify-center bg-indigo-600">
        <span className="font-semibold uppercase text-white">Scroll up</span>
      </div>
    </>
  );
};

const SwapColumnFeatures = () => {
  const [featureInView, setFeatureInView] = useState(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl">
      <SlidingFeatureDisplay featureInView={featureInView} />

      {/* Offsets the height of SlidingFeatureDisplay so that it renders on top of Content to start */}
      <div className="-mt-[100vh] hidden md:block" />

      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
};

const SlidingFeatureDisplay = ({ featureInView }) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <ExampleFeature featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-indigo-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold">{featureInView.title}</p>
          <p className="text-slate-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <ExampleFeature featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const ExampleFeature = ({ featureInView }) => {
  return (
    <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="p-2">
        <p className="font-mono text-sm text-slate-200">
          <span className="text-green-300">~</span> Show a part of your product
          that explains what{" "}
          <span className="inline-block rounded bg-indigo-600 px-1 font-semibold">
            "{featureInView.title}"
          </span>{" "}
          means.
        </p>
      </div>

      <img
        src={featureInView.imageUrl}
        alt={featureInView.title}
        className="absolute left-[50%] top-[50%] h-full w-full object-cover -translate-x-[50%] -translate-y-[50%]"
      />
    </div>
  );
};

export default SwapColumnFeatures;

const features = [
  {
    id: 1,
    callout: "Why Are Anemia Profile Tests Done?",
    title: "Identifying the Type of Anemia:",
    description:
      "One of the primary reasons for conducting Anemia Profile Tests is to identify the specific type of anemia. The test assesses red blood cell parameters, helping healthcare providers distinguish between diverse types such as iron-deficiency anemia, vitamin deficiency anemia, or hemolytic anemia.",
    contentPosition: "r",
    imageUrl: "https://img.freepik.com/free-vector/blood-research-concept-illustration_114360-24763.jpg?t=st=1719954685~exp=1719958285~hmac=796ba3b38bdae9308915de0e3a4bd4791914c7fb5e57eeab14ba4006957a0974&w=1800", // Replace with your image URL
    // Icon: FiEye,
  },
  {
    id: 2,
    callout: "Understanding the Anemia Profile Test:",
    title: "Key Test Components:",
    description:
      "The primary focus of the Anemia Profile Test is to evaluate red blood cell parameters, iron levels, and other factors crucial for identifying the specific type and cause of anemia.",
    contentPosition: "l",
    imageUrl: "https://img.freepik.com/free-photo/front-view-asian-women-working-together-chemical-project_23-2148776747.jpg?t=st=1719954992~exp=1719958592~hmac=aca523616acc66080469fbcee673438a6c98008479540d75dfe351a03d11686d&w=2000", // Replace with your image URL
    // Icon: FiSearch,
  },
  {
    id: 3,
    callout: "Why Choose Care Labs for Anemia Profile Testing?",
    title: "Accurate and Reliable Results:",
    description:
      'Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable Anemia Profile Test results.At Care Labs, our team includes experienced pathologists and laboratory technicians dedicated to maintaining the highest standards of quality in anemia assessments.',
    contentPosition: "r",
    imageUrl: "https://img.freepik.com/free-photo/skillful-nurse-is-doing-blood-test-woman-clinic-gilr-sitting-near-table_1157-48562.jpg?t=st=1722633320~exp=1722636920~hmac=3962718496859f442df985b5dde99b8487bc9ba57ee86fca0b6c746850594ebf&w=2000", // Replace with your image URL
    Icon: FiPlay,
  },
  {
    id: 4,
    callout: "The Anemia Profile Testing Process:",
    title: "Scheduling",
    description:
      'Schedule your Anemia Profile Test at Care Labs by booking an appointment. We offer flexible scheduling to accommodate your convenience.Our skilled phlebotomists will collect a small blood sample using advanced and minimally invasive techniques for your comfort.The collected sample undergoes comprehensive laboratory analysis using innovative technology to assess red blood cell parameters, iron levels, and other relevant factors.'
 ,    contentPosition: "l",
    imageUrl: "https://img.freepik.com/free-photo/coronavirus-test-assortment-lab_23-2149107257.jpg?t=st=1719954931~exp=1719958531~hmac=9d043decf6673000fa1c4ca424bac760d5782668f55c05b2caa7d4e406db2622&w=2000", // Replace with your image URL
    Icon: FiDollarSign,
  },
  {
    id: 5,
    callout: "The Anemia Profile Testing Process:",
    title: "Educational Resources",
    description:
      'For additional information on the Anemia Profile Test, we recommend referring to reputable sources such as My Care Labs. Understanding the test and its implications is crucial for identifying and addressing anemia effectively.'
,    contentPosition: "r",
    imageUrl:  'https://img.freepik.com/free-photo/medical-technologist-doing-blood-draw-services-patient-lab-assistant-with-sterile-rubber-gloves-taking-blood-sample-from-patient_657921-350.jpg?t=st=1722633264~exp=1722636864~hmac=ecf3acd29c9347fb3c93ee80e140899a4d48e72af4cb6bff985d840f8369e1e6&w=2000', // Replace with your image URL
    Icon: FiDollarSign,
  },
  {
    id: 6,
    callout: "The Anemia Profile Testing Process:",
    title: "Educational Resources",
    description:
      'For additional information on the Anemia Profile Test, we recommend referring to reputable sources such as My Care Labs. Understanding the test and its implications is crucial for identifying and addressing anemia effectively.'
,    contentPosition: "l",
    imageUrl:  'https://img.freepik.com/free-photo/medical-technologist-doing-blood-draw-services-patient-lab-assistant-with-sterile-rubber-gloves-taking-blood-sample-from-patient_657921-350.jpg?t=st=1722633264~exp=1722636864~hmac=ecf3acd29c9347fb3c93ee80e140899a4d48e72af4cb6bff985d840f8369e1e6&w=2000', // Replace with your image URL
    Icon: FiDollarSign,
  },
];
