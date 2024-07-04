import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-slate-100" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-2xl font-semibold">
          Other Recommended . <span className="text-slate-500">Tests..</span>
          </p>
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {items.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
          </motion.div>
        </div>

        {/* BUTTONS */}
        <>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_LEFT ? "0%" : "-100%",
            }}
            className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ url, category, title, description ,location }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }} 
    >
       <a className="no-underline" href={location}>

      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div>
       </a>
    </div>
  );
};

export default CardCarousel;

const items = [
  {

    id: 1,
    url: "https://img.freepik.com/free-photo/asian-women-working-together-chemical-project_23-2148776749.jpg?t=st=1719954975~exp=1719958575~hmac=d8a9d57b35d7a297eda1d6a52f050ae919c396bef1efa084e42be06257542068&w=2000",
    category: "Mice",
    title: "Wellness Testing Solutions",
    description:
    "Transform your workplace with on-site wellness testing from My Care Labs.",
    location :"/testing-solutions/wellness-testing",
  },
  {
    id: 2,
    url: "https://img.freepik.com/free-photo/front-view-asian-women-working-together-chemical-project_23-2148776747.jpg?t=st=1719954992~exp=1719958592~hmac=aca523616acc66080469fbcee673438a6c98008479540d75dfe351a03d11686d&w=2000",
    category: "Keyboards",
    title: "Toxicology Testing",
    description:
      "In light of HR managers’ need to recruit and retain top talent, we offers drug testing for businesses and other organizations.",
        location:"/testing-solutions/toxicology-testing-solutions",
  },
  {
    id: 3,
    url: "https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg?t=st=1719954878~exp=1719958478~hmac=ac2da6b69d4364b72d893f73be159b5d70705531a4c4d786a19868165d1f93b0&w=2000",
    category: "Monitors",
    title: "Infectious Disease Testing",
    description:
      "My Care Labs was founded during the COVID-19 Pandemic. We provide fast, simple, accurate infectious disease testing.",
       location:"/infectious-disease-testing"
  },
  {
    id: 4,
    url: "https://img.freepik.com/free-vector/blood-research-concept-illustration_114360-24763.jpg?t=st=1719954685~exp=1719958285~hmac=796ba3b38bdae9308915de0e3a4bd4791914c7fb5e57eeab14ba4006957a0974&w=1800",
    category: "Chairs",
    title: "Oncology Testing",
    description:
      "My Care Labs is actively working on offering an array of oncology panels that can help detect different forms of cancers.",
    location:"/testing-solutions/oncology-testing-solutions"
  },
  {
    id: 5,
    url: "https://img.freepik.com/free-photo/two-doctors-lab_23-2147822684.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
    category: "Lights",
    title: "Travel PCR Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
      location:"/travel-pcr-testing"
  },
  // {
  //   id: 6,
  //   url: "https://img.freepik.com/free-photo/group-doctors-cooperating-while-examining-xray-patient-hopital_637285-11164.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  //   category: "Desks",
  //   title: "Stand up straight",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  // },
  // {
  //   id: 7,
  //   url: "https://img.freepik.com/free-photo/doctor-is-going-examine-his-patient-using-his-stethoscope-sitting-people_1150-6561.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  //   category: "Headphones",
  //   title: "Sounds good",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  // },
];