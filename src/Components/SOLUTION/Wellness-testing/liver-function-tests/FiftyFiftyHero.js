import {
    animate,
    useMotionTemplate,
    useMotionValue,
    motion,
    MotionConfig,
  } from "framer-motion";
  import React, { useState, useEffect } from "react";
  import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
  import { SiShopify } from "react-icons/si";
  import { twMerge } from "tailwind-merge";
  
  export const FiftyFiftyHero = () => {
    const [idx, setIdx] = useState(0);
  
    return (
      <section className="mx-auto my-4 grid max-w-5xl grid-cols-12 border border-neutral-700 bg-neutral-900 text-neutral-50">
        <Left idx={idx} />
        <Right idx={idx} setIdx={setIdx} />
      </section>
    );
  };
  
  const Left = ({ idx }) => (
    <div className="col-span-12 flex flex-col justify-between border-r border-neutral-700 md:col-span-6">
      <div className="px-6 py-20 md:px-12 md:py-24">
        <h1 className="text-4xl uppercase leading-tight md:text-5xl md:leading-tight">
          <span className="text-blue-400">Liver Function Panel Tests </span>
        </h1>
        {CONTENT[idx].content}
      </div>
      <BeamInput />
    </div>
  );
  
  const BeamInput = () => {
    const turn = useMotionValue(0);
  
    useEffect(() => {
      animate(turn, 1, {
        ease: "linear",
        duration: 5,
        repeat: Infinity,
      });
    }, []);
  
    const backgroundImage = useMotionTemplate`conic-gradient(from ${turn}turn, #6EE7B700 75%, #6EE7B7 100%)`;
  
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="relative z-30 flex w-full items-center gap-2 border-t border-neutral-700 bg-neutral-950 py-1.5 pl-6 pr-1.5"
      >
        <input
          type="email"
          placeholder="Enter your email for a launch discount 🚀"
          className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-0"
        />
  
        <button
          onClick={(e) => e.stopPropagation()}
          type="submit"
          className="group flex shrink-0 items-center gap-1.5 bg-emerald-300 px-4 py-3 text-sm font-medium text-neutral-900 transition-transform active:scale-[0.985]"
        >
          <span>Join Waitlist</span>
          <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100" />
        </button>
  
        <div className="pointer-events-none absolute inset-0 z-10">
          <motion.div
            style={{
              backgroundImage,
            }}
            className="mask-with-browser-support absolute -inset-[1px] border border-transparent bg-origin-border"
          />
        </div>
      </form>
    );
  };
  
  const Right = ({ idx, setIdx }) => {
    return (
      <div className="col-span-12 flex flex-col justify-between md:col-span-6">
        <div className="relative h-[276px] overflow-hidden md:h-[372px]">
          {IMAGES.map((img, itemIdx) => (
            <motion.img
              src={img}
              alt={`Slide ${itemIdx}`}
              initial={false}
              animate={{
                opacity: idx === itemIdx ? 1 : 0,
                scale: idx === itemIdx ? 1 : 0.8,
              }}
              transition={{
                ease: "easeInOut",
                duration: 0.3,
              }}
              className="absolute inset-0 w-full h-full object-cover"
              key={itemIdx}
            />
          ))}
        </div>
  
        <Buttons idx={idx} setIdx={setIdx} />
      </div>
    );
  };
  
  const Buttons = ({ idx, setIdx }) => {
    return (
      <div className="relative grid h-[57px] grid-cols-2 border-t border-neutral-700">
        <ShiftButton
          onClick={() => {
            setIdx((pv) => (pv === 0 ? CONTENT.length - 1 : pv - 1));
          }}
          topDivClasses="bg-neutral-900"
          bottomDivClasses="bg-neutral-950"
        >
          <FiArrowLeft className="mx-auto text-xl" />
        </ShiftButton>
        <ShiftButton
          topDivClasses="bg-neutral-900"
          btnClasses="border-neutral-700 border-l"
          bottomDivClasses="bg-neutral-950"
          onClick={() => {
            setIdx((pv) => (pv === CONTENT.length - 1 ? 0 : pv + 1));
          }}
        >
          <FiArrowRight className="mx-auto text-xl" />
        </ShiftButton>
  
        <motion.span
          key={idx}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 12, ease: "linear" }}
          onAnimationComplete={() => {
            setIdx((pv) => (pv === CONTENT.length - 1 ? 0 : pv + 1));
          }}
          className="pointer-events-none absolute -top-[1px] bottom-0 z-20 bg-neutral-600/10"
        />
      </div>
    );
  };
  
  const ShiftButton = ({
    onClick,
    children,
    btnClasses,
    topDivClasses,
    bottomDivClasses,
  }) => {
    return (
      <MotionConfig transition={{ ease: "circOut", duration: 0.25 }}>
        <motion.button
          initial="initial"
          whileHover="hovered"
          className={twMerge("relative overflow-hidden transition-colors", btnClasses)}
          onClick={onClick}
        >
          <motion.div
            variants={{ initial: { y: "0%" }, hovered: { y: "-100%" } }}
            className={twMerge("grid h-full place-content-center bg-neutral-950", topDivClasses)}
          >
            {children}
          </motion.div>
          <motion.div
            variants={{ initial: { y: "100%" }, hovered: { y: "0%" } }}
            className={twMerge("absolute inset-0 grid h-full place-content-center", bottomDivClasses)}
          >
            {children}
          </motion.div>
        </motion.button>
      </MotionConfig>
    );
  };
  
  const CONTENT = [
    {
      content: (
        <p>
          <a href="#" className="text-emerald-300 hover:underline">
            Alanine Aminotransferase (ALT) :{" "}
          </a>
          ALT is an enzyme primarily found in liver cells. Elevated levels of ALT in the bloodstream indicate liver damage or injury, commonly associated with conditions like hepatitis or liver disease. It’s crucial in assessing liver health and monitoring the progression of liver diseases.
        </p>
      ),
    },
    {
      content: (
        <p>
          Aspartate Aminotransferase (AST): {" "}
          <span className="text-white"></span> AST, like ALT, is an enzyme found in liver cells. Elevated AST levels in the blood are indicative of liver damage or injury. AST levels are often assessed alongside ALT levels to differentiate between different types of liver diseases.
        </p>
      ),
    },
    {
      content: (
        <p>
          Albumin :{" "}
          Albumin is a protein synthesized by the liver. It plays a vital role in maintaining oncotic pressure in the blood, transporting hormones and other substances, and regulating the balance of fluids in the body. Low levels of albumin may indicate liver damage or impaired liver function.
        </p>
      ),
    },
    {
      content: (
        <p>
          Alkaline Phosphatase (ALP) :{" "}
          ALP is an enzyme found in various tissues, including the liver, bones, and bile ducts. Elevated ALP levels often indicate liver or bone diseases. In the liver, increased ALP can be associated with conditions such as bile duct obstruction or liver disease.
        </p>
      ),
    },
    {
      content: (
        <p>
          Direct Bilirubin :{" "}
          Bilirubin is a yellowish pigment produced during the breakdown of red blood cells. Direct bilirubin refers to the portion of bilirubin that is conjugated in the liver and then excreted into bile. Elevated direct bilirubin levels may suggest liver disease or bile duct obstruction.
        </p>
      ),
    },
    {
      content: (
        <p>
          Total Bilirubin :{" "}
          Total bilirubin encompasses both direct and indirect bilirubin levels. Indirect bilirubin is the unconjugated form circulating in the bloodstream. Abnormal total bilirubin levels can indicate various liver disorders or conditions affecting the breakdown of red blood cells.
        </p>
      ),
    },
    {
      content: (
        <p>
          Total Protein :{" "}
          Total protein measures the overall amount of proteins in the blood, including albumin and other proteins. Abnormal levels may indicate liver or kidney diseases, malnutrition, or other conditions affecting protein synthesis.
        </p>
      ),
    },
    {
      content: (
        <p>
          Diagnosing Liver <span className="text-white">Diseases:</span>{" "}
          Liver function panel tests aid in diagnosing various liver conditions, including hepatitis, cirrhosis, fatty liver disease, and liver damage due to alcohol or medications.
        </p>
      ),
    },
    {
      content: (
        <p>
          <span className="text-white">Preparation </span> and Procedure{" "}
          Liver function panel tests typically involve a blood draw, which requires minimal preparation. However, healthcare providers might recommend fasting for several hours before the test. It’s essential to follow any instructions provided by the healthcare professional regarding fasting or medication intake before the test.
        </p>
      ),
    },
  ];
  
  const IMAGES = [
    "https://img.freepik.com/free-photo/two-doctors-lab_23-2147822684.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
    "https://img.freepik.com/free-photo/front-view-asian-women-working-together-chemical-project_23-2148776747.jpg?t=st=1719954992~exp=1719958592~hmac=aca523616acc66080469fbcee673438a6c98008479540d75dfe351a03d11686d&w=2000",
    "https://img.freepik.com/free-vector/blood-research-concept-illustration_114360-24763.jpg?t=st=1719954685~exp=1719958285~hmac=796ba3b38bdae9308915de0e3a4bd4791914c7fb5e57eeab14ba4006957a0974&w=1800",
    "https://img.freepik.com/free-vector/blood-research-concept-illustration_114360-24763.jpg?t=st=1719954685~exp=1719958285~hmac=796ba3b38bdae9308915de0e3a4bd4791914c7fb5e57eeab14ba4006957a0974&w=1800",
    "https://img.freepik.com/free-photo/group-doctors-cooperating-while-examining-xray-patient-hopital_637285-11164.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
    "https://img.freepik.com/free-photo/two-doctors-lab_23-2147822684.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
    "https://img.freepik.com/free-photo/two-doctors-lab_23-2147822684.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
    "https://img.freepik.com/free-photo/front-view-asian-women-working-together-chemical-project_23-2148776747.jpg?t=st=1719954992~exp=1719958592~hmac=aca523616acc66080469fbcee673438a6c98008479540d75dfe351a03d11686d&w=2000",
    "https://img.freepik.com/free-photo/group-doctors-cooperating-while-examining-xray-patient-hopital_637285-11164.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  ];
  