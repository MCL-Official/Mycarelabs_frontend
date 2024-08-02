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
        <h2 className="text-2xl font-bold mb-4">1. PCR Testing in Fremont, California</h2>
        <p className="mb-4">
        At My Care Labs, we are committed to providing top-tier PCR testing services in Fremont, California, offering a wide range of testing options to meet your needs. Whether you require a PCR test for travel purposes, have symptoms, or simply need the peace of mind that comes with a COVID test, we have gotten you covered. We understand that getting tested quickly and conveniently is crucial, and that is why we offer same-day testing services. 
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
        <h2 className="text-2xl font-bold mb-4">2. Same-Day Testing Services for Your Convenience</h2>
        <p className="mb-4">
        One of the key advantages of choosing My Care Labs for your PCR testing needs is our commitment to delivering fast and reliable results. When you choose us for your PCR test, you can expect to receive your test results on the same day if you are tested before 4:00 PM. For those tested after 4:00 PM, rest assured that your results will be available the following day before 06:30 PM. We understand the urgency that often accompanies the need for a PCR test, and we aim to alleviate any stress by providing timely results. 
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <ExampleFeature2 Icon={FiSave} />
      </div>
    </div>
  );
  

const Feature3 = () => (
  <div className="flex flex-col md:flex-row items-center p-4">
    <div className="w-full md:w-1/2  md:ml-4 mb-4 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">3. Flexible Appointment Options</h2>
      <p className="mb-4 text-left">We understand that scheduling a PCR test should be a straightforward and convenient process. That is why My Care Labs offers multiple options to book your appointment: </p>
      <p className="mb-3 text-left">
      1 Schedule Online: You can easily schedule your PCR test through our website. This option allows you to choose a convenient time slot and ensures a hassle-free experience. 
      </p>
      <p className="mb-3 text-left">
     2 Walk-In: For those who prefer a more immediate approach, you can walk into our testing center without an appointment. Our team is ready to assist you on the spot.    </p>
      <p className="mb-3 text-left">
     3 Toll-Free Number: +1-800-790-4550 If you prefer to speak with one of our representatives, you can call our Toll-Free Number to book an appointment. We are here to provide the support and guidance you need.   </p>
    </div>
    <div className="w-full md:w-1/2">
      <ExampleFeature3 Icon={FiMonitor} />
    </div>
  </div>
);


// const Feature4 = () => (
//     <div className="flex flex-col md:flex-row-reverse items-center p-4 text-left">
//       <div className="w-full md:w-1/2 md:ml-4 mb-4 md:mb-0">
//         <h2 className="text-2xl font-bold mb-4">4. Tips for Maintaining Optimal Magnesium Levels</h2>
//         <p className="mb-4">
//         Maintaining adequate magnesium levels is essential for overall health. Incorporating magnesium-rich foods into your diet, such as almonds, spinach, and avocados, can be beneficial. Additionally, avoiding excessive alcohol consumption and managing stress can contribute to maintaining a healthy magnesium balance.       </p>
//       </div>
//       <div className="w-full md:w-1/2">
//         <ExampleFeature4 Icon={FiSave} />
//       </div>
//     </div>
//   );


  
// const Feature5 = () => (
//     <div className="flex flex-col md:flex-row items-center p-4">
//       <div className="w-full md:w-1/2  md:ml-4 mb-4 md:mb-0">
//         <h2 className="text-2xl font-bold mb-4">5.How My Care Labs can help with Magnesium Blood Tests</h2>
//         <p className="mb-4">My Care Labs plays a crucial role in facilitating Magnesium Blood Tests, providing a convenient and accessible solution for individuals seeking insights into their magnesium levels.
//         Through our streamlined services, individuals can easily schedule and undergo blood tests to assess magnesium levels in the comfort of their preferred location. </p>
//         <p className="mb-3">Our efficient process ensures accurate results, aiding in the identification of potential magnesium deficiencies or imbalances. By offering a user-friendly platform for ordering, conducting, and receiving test results, My Care Labs empowers individuals to proactively manage their health and make informed decisions regarding magnesium intake and supplementation
//         </p>
//             </div>
//       <div className="w-full md:w-1/2">
//         <ExampleFeature2 Icon={FiMonitor} />
//       </div>
//     </div>
//   );


const ExampleFeature = ({ Icon }) => (
  <div className="w-full px-0 py-8 md:px-8">
     <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm  h-70 w-96" src="https://img.freepik.com/free-vector/family-protected-from-virus_23-2148554386.jpg?w=740&t=st=1719925251~exp=1719925851~hmac=614929ff6522b239b5e664386d8644a8f30651b89224d1b30310a09a2959b9bb" alt="billboard image" />
  </div>
);
const ExampleFeature2 = ({ Icon }) => (
  <div className="w-full px-0 py-8 md:px-8">
      <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm  h-70 w-96 space-between" src="https://img.freepik.com/free-vector/virus-cure-concept-illustration_23-2148496475.jpg?w=740&t=st=1719925320~exp=1719925920~hmac=461d7f3a8e8bb8a51bf1f22d319362bc5c13f4c70ef46c62272f309fe8ea07b9" alt="billboard image" />
      </div>
);
const ExampleFeature3 = ({ Icon }) => (
  <div className="w-full px-0 py-8 md:px-8">
      <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm  h-70 w-96" src="https://img.freepik.com/free-vector/school-new-normal_23-2148674219.jpg?w=740&t=st=1719924545~exp=1719925145~hmac=59efbfe70ee10aa861026d127565bd330a54636deb2729599ae0c76535a5abdd" alt="billboard image" />

</div>
);
const ExampleFeature4 = ({ Icon }) => (
  <div className="w-full px-0 py-8 md:px-8">
     <img class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm  h-70 w-96" src="https://img.freepik.com/free-vector/family-protected-from-virus_23-2148554386.jpg?w=740&t=st=1719925251~exp=1719925851~hmac=614929ff6522b239b5e664386d8644a8f30651b89224d1b30310a09a2959b9bb" alt="billboard image" />
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
  // {
  //   title: "Tips for Maintaining Optimal Magnesium Levels",
  //   Icon: FiMonitor,
  //   Feature: Feature4,
  // },
  // {
  //   title: "How My Care Labs can help with Magnesium Blood Tests",
  //   Icon: FiMonitor,
  //   Feature: Feature5,
  // },
];

export default TabsFeatures;
