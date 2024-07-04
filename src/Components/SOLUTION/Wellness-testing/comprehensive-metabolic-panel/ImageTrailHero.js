import { useAnimate } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowDownCircle, FiDollarSign } from "react-icons/fi";
import { SiApple } from "react-icons/si";

export const ImageTrailHero = () => {
  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "https://img.freepik.com/free-photo/statue-rainbow-bridge-night-tokyo-japan_335224-8.jpg?t=st=1719954263~exp=1719957863~hmac=08690e59529a0bc028e23fda8e4fa0f44750548434c108235e7e0f403667f131&w=2000",
        "https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?t=st=1719954266~exp=1719957866~hmac=73b10f4318bceabf068b52ec1650bbd1fdcf461ce06775a0c40acc3b63049a1a&w=2000",
        "https://img.freepik.com/free-photo/tokyo-skyline-with-tokyo-tower-rainbow-bridge_1339-6783.jpg?t=st=1719954311~exp=1719957911~hmac=ff2ae36d9febf6279c18ecf7a75458fbd9fc36f59d6bcc3e1f6ca036b808d532&w=2000",
        "https://img.freepik.com/free-photo/empire-state-building-daylight_23-2150897493.jpg?t=st=1719954413~exp=1719958013~hmac=426c13ce93779b5ca5b1a8752df1adf6adb8ed2f2af97d96269c72c8a60af5b3&w=900",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
        // "/imgs/active/6.jpg",
        // "/imgs/active/7.jpg",
        // "/imgs/active/8.jpg",
        // "/imgs/active/9.jpg",
        // "/imgs/active/10.jpg",
        // "/imgs/active/11.jpg",
        // "/imgs/active/12.jpg",
        // "/imgs/active/13.jpg",
        // "/imgs/active/14.jpg",
        // "/imgs/active/15.jpg",
        // "/imgs/active/16.jpg",
      ]}
    >
      <section className="h-screen bg-slate-200">
        {/* <NavBar /> */}
        <Copy />
        <WatermarkWrapper />
      </section>
    </MouseImageTrail>
  );
};

const NavBar = () => {
  return (
    <nav className="absolute left-0 right-0 top-0 z-[99999999]">
      <div className="bg-slate-900 text-center">
        <p className="flex items-center justify-center gap-1 py-0.5 text-sm font-medium uppercase text-slate-100">
          <FiDollarSign className="text-indigo-300" />
          <span>20% off through December</span>
          <FiDollarSign className="text-indigo-300" />
        </p>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:p-6">
        {/* Temp logo from logoipsum */}
        <svg
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 fill-slate-900"
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            stopColor="#000000"
          ></path>
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            stopColor="#000000"
          ></path>
        </svg>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995, rotate: "3.5deg" }}
          className="flex items-center gap-2 rounded-md bg-indigo-500 px-4 py-2 font-medium text-slate-50 transition-colors hover:bg-indigo-600"
        >
          <SiApple />
          <span>Download</span>
        </motion.button>
      </div>
    </nav>
  );
};

const Copy = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[999999]">
      <div className="mx-auto flex max-w-7xl items-end justify-between p-4 md:p-8">
        <div>
          <h1 className="mb-6 max-w-4xl text-6xl font-black leading-[1.1] text-slate-900 md:text-7xl">
          Comprehensive Metabolic <span className="text-indigo-500">Panel (CMP) Test</span>
          </h1>
          <p className="max-w-xl text-slate-700 md:text-lg">
          Medical diagnostics play an important role in evaluating our health, and the Comprehensive Metabolic Panel 
          (CMP) test stands as a crucial tool in assessing various aspects of our body’s functionality. Let’s go 
          into what the CMP test entails, its significance, preparation, and what the results can reveal about your health.
          </p>
        </div>
        <FiArrowDownCircle className="hidden text-8xl text-slate-500 md:block" />
      </div>
    </div>
  );
};

const WatermarkWrapper = () => {
  return (
    <>
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
      <Watermark text="Get motivated" />
      <Watermark text="Live inspired" reverse />
      <Watermark text="Find your passion" />
      <Watermark text="Build an empire" reverse />
    </>
  );
};

const Watermark = ({ reverse, text }) => (
  <div className="flex -translate-y-12 select-none overflow-hidden">
    <TranslateWrapper reverse={reverse}>
      <span className="w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
    <TranslateWrapper reverse={reverse}>
      <span className="ml-48 w-fit whitespace-nowrap text-[20vmax] font-black uppercase leading-[0.75] text-slate-300">
        {text}
      </span>
    </TranslateWrapper>
  </div>
);

const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
      className="flex"
    >
      {children}
    </motion.div>
  );
};

const MouseImageTrail = ({
  children,
  // List of image sources
  images,
  // Will render a new image every X pixels between mouse moves
  renderImageBuffer,
  // images will be rotated at a random number between zero and rotationRange,
  // alternating between a positive and negative rotation
  rotationRange,
}) => {
  const [scope, animate] = useAnimate();

  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;

      renderNextImage();
    }
  };

  const calculateDistance = (x1, y1, x2, y2) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Using the Pythagorean theorem to calculate the distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    return distance;
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;

    const el = document.querySelector(selector);

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2
              ? `rotate(${rotation}deg)`
              : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2
              ? `rotate(-${rotation}deg)`
              : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      {
        opacity: [1, 0],
      },
      { ease: "linear", duration: 0.5, delay: 1 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {children}

      {images.map((img, index) => (
        <img
          className="pointer-events-none absolute left-0 top-0 h-36 w-auto rounded-xl border-2 border-slate-900 bg-slate-800 object-cover opacity-0"
          src={img}
          alt={`Mouse move image ${index}`}
          key={index}
          data-mouse-move-index={index}
        />
      ))}
    </div>
  );
};