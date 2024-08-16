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
    callout: "Why Are Lipid Profile Tests Important?",
    title: "Understanding Cholesterol Levels",
    description:
      "Lipid Profile Tests are crucial for assessing cholesterol levels in your body. They help determine the risk of cardiovascular diseases by evaluating HDL, LDL, and triglycerides, providing a comprehensive view of your lipid health.",
    contentPosition: "r",
    imageUrl:
      "https://i.ibb.co/pvBkRYq/2.png",
    // Icon: FiEye,
  },
  {
    id: 2,
    callout: "Components of the Lipid Profile Test:",
    title: "Key Measurements",
    description:
      "The Lipid Profile Test measures total cholesterol, high-density lipoprotein (HDL), low-density lipoprotein (LDL), and triglycerides to give a complete picture of your lipid profile.",
    contentPosition: "l",
    imageUrl:
      "https://i.ibb.co/gjbJTny/3.png",
    // Icon: FiSearch,
  },
  {
    id: 3,
    callout: "Why Choose Care Labs for Lipid Profile Testing?",
    title: "Accurate and Reliable Results",
    description:
      "Care Labs offers state-of-the-art equipment and skilled technicians to ensure precise and dependable Lipid Profile Test results, helping you monitor and manage your heart health effectively.",
    contentPosition: "r",
    imageUrl:
      "https://i.ibb.co/cJ654jq/Untitled-1280-x-720-px-1300-x-1000-px.png",
    Icon: FiPlay,
  },
  {
    id: 4,
    callout: "The Lipid Profile Testing Process:",
    title: "How It Works",
    description:
      "Book your Lipid Profile Test at Care Labs for convenient scheduling. Our phlebotomists will collect a blood sample using advanced techniques to provide accurate assessments of your cholesterol and triglyceride levels.",
    contentPosition: "l",
    imageUrl:
      "https://i.ibb.co/b79svsR/4.png",
    Icon: FiDollarSign,
  },
  {
    id: 5,
    callout: "Educational Resources on Lipid Health:",
    title: "Learn More About Lipids",
    description:
      "Visit My Care Labs for detailed resources on the Lipid Profile Test. Understanding your lipid levels is key to maintaining cardiovascular health and preventing related diseases.",
    contentPosition: "r",
    imageUrl:
      "https://i.ibb.co/XXmTtnP/5.png",
    Icon: FiEye,
  },
  {
    id: 6,
    callout: "The Lipid Profile Testing Process:",
    title: "Comprehensive Analysis",
    description:
      "Our comprehensive analysis includes detailed lipid profiling to help you understand your heart health better and make informed decisions for a healthier lifestyle.",
    contentPosition: "l",
    imageUrl:
      "https://i.ibb.co/vXYfRC6/6.png",
    Icon: FiSearch,
  },
];
