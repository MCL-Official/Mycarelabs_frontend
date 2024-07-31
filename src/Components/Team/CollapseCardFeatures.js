import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiArrowUp,
  FiChevronLeft,
  FiChevronRight,
  FiLink,
  FiTarget,
  FiTool,
  FiUpload,
} from "react-icons/fi";

const CollapseCardFeatures = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-neutral-100 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex justify-between gap-4">
          <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl">
            We're good. <span className="text-neutral-400">Here's why.</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-black p-4 text-2xl text-white transition-colors hover:bg-neutral-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, description, Icon }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-black text-white" : " bg-white"
      }`}
    >
      <Icon className="absolute right-2 top-2 text-7xl opacity-20" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default CollapseCardFeatures;

const features = [
  {
    title: "On Demand",
    Icon: FiUpload,
    description:
      "The most caring companies deploy My Care Labs’ health testing to increase employee retention and business stability.",
    
  },
  {
    title: "Team On Location",
    Icon: FiArrowUp,
    description:
      "Public entities trusted by their communities trust My Care Labs to power their public health initiatives.",
  },
  {
    title: "Medical Assistant",
    Icon: FiTarget,
    description:
      "Testing, tracking, and vaccine programs to keep kids and their families safe and healthy for a bright future.",
  },
  {
    title: "No Cost With Insurance",
    Icon: FiLink,
    description:
      "My Care Labs works hand-in-glove with California Department of Public Health, CalREDIE, and CDC.",
  },
  // {
  //   title: "Modern tooling",
  //   Icon: FiTool,
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, saepe quo!",
  // },
];