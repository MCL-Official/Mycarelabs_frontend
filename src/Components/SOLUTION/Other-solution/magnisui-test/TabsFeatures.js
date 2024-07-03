import { FiMonitor, FiSave, FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TabsFeatures = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="p-4">
      <div className="mx-auto max-w-5xl">
        <Tabs selected={selected} setSelected={setSelected} />

        <AnimatePresence mode="wait">
          {FEATURES.map((tab, index) => {
            return selected === index ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                key={index}
              >
                <tab.Feature />
              </motion.div>
            ) : undefined;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

const Tabs = ({ selected, setSelected }) => {
  return (
    <div className="flex overflow-x-scroll">
      {FEATURES.map((tab, index) => {
        return (
          <Tab
            key={index}
            setSelected={setSelected}
            selected={selected === index}
            Icon={tab.Icon}
            title={tab.title}
            tabNum={index}
          />
        );
      })}
    </div>
  );
};

const Tab = ({ selected, Icon, title, setSelected, tabNum }) => {
  return (
    <div className="relative w-full">
      <button
        onClick={() => setSelected(tabNum)}
        className="relative z-0 flex w-full flex-row items-center justify-center gap-4 border-b-4 border-slate-200 bg-white p-6 transition-colors hover:bg-slate-100 md:flex-col"
      >
        <span
          className={`rounded-lg bg-gradient-to-br from-indigo-700 from-10% to-indigo-500 p-3 text-2xl text-white shadow-indigo-400 transition-all duration-300 ${
            selected
              ? "scale-100 opacity-100 shadow-lg"
              : "scale-90 opacity-50 shadow"
          }`}
        >
          <Icon />
        </span>
        <span
          className={`min-w-[150px] max-w-[200px] text-start text-xs text-slate-600 transition-opacity md:text-center ${
            selected ? "opacity-100" : "opacity-50"
          }`}
        >
          {title}
        </span>
      </button>
      {selected && (
        <motion.span
          layoutId="tabs-features-underline"
          className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-indigo-600"
        />
      )}
    </div>
  );
};

// Feature components with different layouts
const Feature1 = () => (
    <div className="flex flex-col md:flex-row items-center p-4 text-left">
      <div className="w-full md:w-1/2  md:ml-4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">1. Signs and Symptoms of Magnesium Deficiency</h2>
        <p className="mb-4">
          Given its diverse roles, a deficiency in magnesium can lead to various health issues. Understanding the signs and symptoms is crucial for timely intervention. Symptoms may include muscle cramps, fatigue, nausea, and abnormal heart rhythms. Chronic magnesium deficiency has been linked to more severe conditions like osteoporosis, diabetes, and cardiovascular diseases.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <ExampleFeature Icon={FiSearch} />
      </div>
    </div>
  );
  

  const Feature2 = () => (
    <div className="flex flex-col md:flex-row-reverse items-center p-4 text-left">
      <div className="w-full md:w-1/2 md:ml-4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">2. Why Opt for a Magnesium Blood Test?</h2>
        <p className="mb-4">
          A magnesium blood test, also known as a serum magnesium test, measures the amount of magnesium present in your blood. This test provides valuable insights into your magnesium status, helping healthcare professionals identify deficiencies or excess levels. Common reasons for opting for a magnesium blood test include unexplained muscle weakness, irregular heart rhythms, or symptoms suggesting magnesium deficiency.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <ExampleFeature Icon={FiSave} />
      </div>
    </div>
  );
  

const Feature3 = () => (
  <div className="flex flex-col md:flex-row items-center p-4">
    <div className="w-full md:w-1/2  md:ml-4 mb-4 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">3. Interpreting Magnesium Blood Test Results</h2>
      <p className="mb-4">Understanding the results of a magnesium blood test requires a closer look at the reference ranges provided by the laboratory. Normal magnesium levels typically fall between 1.7 and 2.2 milligrams per deciliter (mg/dL). Levels outside this range may indicate an imbalance that needs attention.</p>
      <p className="mb-3">
      1 Low Magnesium Levels: This may suggest a deficiency, which can be caused by inadequate dietary intake, certain medications, or medical conditions affecting magnesium absorption.
      </p>
      <p className="mb-3">
     2 High Magnesium Levels: Elevated levels can be indicative of kidney problems, dehydration, or excessive magnesium supplementation.      </p>
    </div>
    <div className="w-full md:w-1/2">
      <ExampleFeature Icon={FiMonitor} />
    </div>
  </div>
);


const Feature4 = () => (
    <div className="flex flex-col md:flex-row-reverse items-center p-4 text-left">
      <div className="w-full md:w-1/2 md:ml-4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">4. Tips for Maintaining Optimal Magnesium Levels</h2>
        <p className="mb-4">
        Maintaining adequate magnesium levels is essential for overall health. Incorporating magnesium-rich foods into your diet, such as almonds, spinach, and avocados, can be beneficial. Additionally, avoiding excessive alcohol consumption and managing stress can contribute to maintaining a healthy magnesium balance.       </p>
      </div>
      <div className="w-full md:w-1/2">
        <ExampleFeature Icon={FiSave} />
      </div>
    </div>
  );


  
const Feature5 = () => (
    <div className="flex flex-col md:flex-row items-center p-4">
      <div className="w-full md:w-1/2  md:ml-4 mb-4 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">5.How My Care Labs can help with Magnesium Blood Tests</h2>
        <p className="mb-4">My Care Labs plays a crucial role in facilitating Magnesium Blood Tests, providing a convenient and accessible solution for individuals seeking insights into their magnesium levels.
        Through our streamlined services, individuals can easily schedule and undergo blood tests to assess magnesium levels in the comfort of their preferred location. </p>
        <p className="mb-3">Our efficient process ensures accurate results, aiding in the identification of potential magnesium deficiencies or imbalances. By offering a user-friendly platform for ordering, conducting, and receiving test results, My Care Labs empowers individuals to proactively manage their health and make informed decisions regarding magnesium intake and supplementation
        </p>
            </div>
      <div className="w-full md:w-1/2">
        <ExampleFeature Icon={FiMonitor} />
      </div>
    </div>
  );


const ExampleFeature = ({ Icon }) => (
  <div className="w-full px-0 py-8 md:px-8">
    <div className="relative h-96 w-full rounded-xl bg-slate-800 shadow-xl">
      <div className="flex w-full gap-1.5 rounded-t-xl bg-slate-900 p-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="space-y-2 p-2">
        <p className="font-mono text-sm text-slate-200">
          <span className="text-green-300">~</span> Replace this with a demo of
          your product 🚀
        </p>
      </div>

      <span className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] text-9xl text-slate-700">
        <Icon />
      </span>
    </div>
  </div>
);

const FEATURES = [
  {
    title: "Signs and Symptoms of Magnesium Deficiency",
    Icon: FiSearch,
    Feature: Feature1,
  },
  {
    title: "Why Opt for a Magnesium Blood Test?",
    Icon: FiSave,
    Feature: Feature2,
  },
  {
    title: "Interpreting Magnesium Blood Test Results",
    Icon: FiMonitor,
    Feature: Feature3,
  },
  {
    title: "Tips for Maintaining Optimal Magnesium Levels",
    Icon: FiMonitor,
    Feature: Feature4,
  },
  {
    title: "How My Care Labs can help with Magnesium Blood Tests",
    Icon: FiMonitor,
    Feature: Feature5,
  },
];

export default TabsFeatures;
