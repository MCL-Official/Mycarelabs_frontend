import { FiMonitor, FiSave, FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const TabsFeatures1 = () => {
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
        <h2 className="text-2xl font-bold mb-4">1. Wellness Testing</h2>
        <p className="mb-4">
        My Care Labs brings the lab to you with our mobile testing. Organizations such as senior care homes, hospices, etc can simply book their scheduled testing day and our medical staff will be dispatched to your facility for and easy collection.
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
        <h2 className="text-2xl font-bold mb-4">2. Men’s Wellness Panels</h2>
        <p className="mb-4">
        Comprehensive metabolic panel (CMP): This panel measures glucose levels, electrolyte balance, liver and kidney function, and other important indicators of overall health.
        </p>
        <p className="mb-4">
        Lipid panel: This panel measures cholesterol levels and triglycerides, which are important indicators of heart health.   
        </p>
        <p className="mb-4">
        Complete blood count (CBC): This panel measures various components of the blood, including red and white blood cells, platelets, and hemoglobin levels.    
        </p>
        <p className="mb-4">
        Testosterone panel: This panel measures testosterone levels, which can be important for men’s reproductive health and overall well-being.     
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
      <h2 className="text-2xl font-bold mb-4">3. Women’s Wellness Panels</h2>
      <p className="mb-4">Comprehensive metabolic panel (CMP): This panel measures glucose levels, electrolyte balance, liver and kidney function, and other important indicators of overall health</p>
      <p className="mb-3">
      Lipid panel: This panel measures cholesterol levels and triglycerides, which are important indicators of heart health. 
      </p>
      <p className="mb-3">
      Complete blood count (CBC): This panel measures various components of the blood, including red and white blood cells, platelets, and hemoglobin levels.    </p>
    
      <p className="mb-3">
      Hormone panel: This panel measures various hormones, including estrogen and progesterone, which can be important for women’s reproductive health and overall well-being.    </p>
    </div>
    <div className="w-full md:w-1/2">
      <ExampleFeature3 Icon={FiMonitor} />
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
        <ExampleFeature4 Icon={FiSave} />
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
        <ExampleFeature2 Icon={FiMonitor} />
      </div>
    </div>
  );


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
    title: "Wellness Testing",
    Icon: FiSearch,
    Feature: Feature1,
  },
  {
    title: "Men’s Wellness Panels",
    Icon: FiSave,
    Feature: Feature2,
  },
  {
    title: "Interpreting Magnesium Blood Test Results",
    Icon: FiMonitor,
    Feature: Feature3,
  },

];

export default TabsFeatures1;
