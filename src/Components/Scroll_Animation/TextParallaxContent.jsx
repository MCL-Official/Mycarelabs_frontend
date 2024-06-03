import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import img from "../../Assets/img.jpg";
import img1 from "../../Assets/img3.jpg";
import img2 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.png";
import img3 from "../../Assets/img2.jpg";

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        MyCare Labs offers comprehensive toxicology testing services,
        ensuring accurate and timely results for various needs.
        Their state-of-the-art facilities and experienced professionals
        provide reliable screening for drugs, alcohol, and other substances.
      </p>
      <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent1 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        MyCare Labs provides top-tier testing solutions for infectious diseases,
        featuring an all-in-one swab for COVID-19, Influenza A/B, and RSV.
        Discover comprehensive and advanced diagnostics with MyCare Labs'
        reliable services.
      </p>
      <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        MyCare Labs provides the best testing solutions, prioritizing
        your well-being with comprehensive wellness testing services.
        Take proactive steps towards a healthier, happier you with
        MyCare Labs' advanced diagnostics.
      </p>
      <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const ExampleContent3 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 ">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        MyCare Labs provides the solution of mobile testing,
        allowing you to test from the comfort of your home.
        Explore the convenience and ease by scheduling
        your test where it suits you best.
      </p>
      <button className="w-full rounded bg-blue-600 px-9 py-4 text-xl text-white transition-colors hover:bg-blue-500 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

const contentData = [
  {
    imgUrl: img1,
    subheading: "Toxicology",
    heading: "Built for all of us.",
    content: <ExampleContent />,
  },
  {
    imgUrl: img3,
    subheading: "Quality",
    heading: "Infectious Disease",
    content: <ExampleContent1 />,
  },
  {
    imgUrl: img2,
    subheading: "Wellness Testing",
    heading: "Dress for the best.",
    content: <ExampleContent2 />,
  },
  {
    imgUrl: img,
    subheading: "Mobile Testing",
    heading: "Dress for the best.",
    content: <ExampleContent3 />,
  },
];

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-white">
       <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-8">
    <div className="relative inline-block -mt-12 bg-transparent">
      <span className="text-blue-600 text-4xl font-bold mr-2">Solutions</span>
      <span className="text-orange-600 text-4xl font-bold">We Provide</span>
    <p className="info-description">
          My Care Labs offers quick, easy, and accurate RT-PCR testing for
          COVID-19, RSV, and Influenza A/B. We provide on-site testing at our
          lab and pop-up locations throughout California, with results available
          the same day or within 24 hours.
        </p>
    </div>
  </h3>
      {contentData.map((item, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={item.imgUrl}
          subheading={item.subheading}
          heading={item.heading}
        >
          {item.content}
        </TextParallaxContent>
      ))}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    > 
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
        <h3 className="flex justify-center text-2xl font-bold bg-transparent pt-8">
          <div className="relative inline-block -mt-12 bg-transparent">
            <span className="text-blue-600 text-4xl font-bold mr-2">Locations</span>
            <span className="text-gray-600 text-4xl font-bold">We Serve In.</span>
          </div>
        </h3>
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl  text-orange-500">{heading}</p>
    </motion.div>
  );
};
