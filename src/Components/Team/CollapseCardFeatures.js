import { icon } from "@fortawesome/fontawesome-svg-core";
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
            We're good. <span className="text-blue-300">Here's why.</span>
          </h2>
          <div className="flex gap-2">
            <button
              className="h-fit bg-blue-500 p-4 text-2xl text-white transition-colors hover:bg-blue-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit bg-blue-500 p-4 text-2xl text-white transition-colors hover:bg-blue-700"
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

const Feature = ({ position, index, title, description, iconSrc }) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[250px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden p-8 shadow-lg md:w-3/5 ${index % 2 ? "bg-blue-300 text-white" : " bg-white"
        }`}
    >
      <img src={iconSrc} alt={title} className="absolute right-2 top-2 w-16 h-16 opacity-100" />
      <h3 className="mb-8 text-3xl font-bold text-black">{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default CollapseCardFeatures;

const features = [
  {
    title: "On Demand",
    iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUc-cAjLTSr4KfkbseHVM8Btu7oTdqOGYQA&s",
    description:
      "The most caring companies deploy My Care Labs’ health testing to increase employee retention and business stability.",

  },
  {
    title: "Team On Location",
    iconSrc: "https://png.pngtree.com/png-vector/20191024/ourlarge/pngtree-team-icon-isolated-on-abstract-background-png-image_1855162.jpg",
    description:
      "Public entities trusted by their communities trust My Care Labs to power their public health initiatives.",
  },
  {
    title: "Medical Assistant",
    iconSrc: "https://media.istockphoto.com/id/1384892983/vector/first-aid-icon-healthcare-and-medicine-humanitarian-aid-medical-cross-symbol.jpg?s=612x612&w=0&k=20&c=Ki3lHkF4eFxUbMdYAWfR1rtuKDao57rRB6EWhk_XyMc=",
    description:
      "Testing, tracking, and vaccine programs to keep kids and their families safe and healthy for a bright future.",
  },
  {
    title: "We accept most major insurances",
    iconSrc: "https://as1.ftcdn.net/v2/jpg/02/73/32/80/1000_F_273328038_pBxXai6PVN1eLXnH65ZVgy954nzAEMSt.jpg",
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