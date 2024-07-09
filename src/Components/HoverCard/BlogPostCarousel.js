import Link from "antd/es/typography/Link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const BlogPostCarousel = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER);

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
    <section className="bg-neutral-100 py-8" ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center justify-between">
            <h2 className="mb-4 text-4xl">Other Recommended Tests</h2>

            <div className="flex items-center gap-2">
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_LEFT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_LEFT}
                onClick={shiftLeft}
              >
                <FiArrowLeft />
              </button>
              <button
                className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                  CAN_SHIFT_RIGHT ? "" : "opacity-30"
                }`}
                disabled={!CAN_SHIFT_RIGHT}
                onClick={shiftRight}
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          <motion.div
            animate={{
              x: offset,
            }}
            transition={{
              ease: "easeInOut",
            }}
            className="flex"
          >
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Post = ({ imgUrl, author, title, description, location}) => {
  
  return (
    
    <div
   
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      <a className="no-underline" href={location}>
      <img
        src={imgUrl}
        className="mb-3 h-[200px] w-full rounded-lg object-cover"
        alt={`An image for a fake blog post titled ${title}`}
      />
   
      <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs uppercase text-neutral-500">
        {author} 
      </span>
     
      <p className="mt-1.5 text-lg font-medium">{title}</p>
      <p className="text-sm text-neutral-500">{description}</p>
      
      </a>

    </div>
    
  );
};

export default BlogPostCarousel;
// const images = [
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxB0-5iYhpjm6euLTXjYjGObKBCodTnIE8oN83GdRjmPSQGvpjTXT5wf3LQ&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVKTtvK563qsJfVUh_Fk43AFVxXOeHA-4xfYN7PWUT-xfkEFlvp97nCmIN6g&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHL6Nt5janbq-JO5gViYZ9rbdBrWpGY2kytXOex9xFhl8jghDzd2OKTmNxTg&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtT9NMabXOeFXhLMqMvcA2ehosm1IAx3pxOw&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhkRaRNqnPf_dcSF6D04L1TgE29yWRXr4ug&s",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Rtn6aAU4qSAYnbhv9EFRk5xi-cPNfByTSA&s",
// ];
const posts = [
  {
    id: 1,
    imgUrl: "https://img.freepik.com/free-photo/medium-shot-woman-holding-balloon-flask_23-2148581907.jpg?t=st=1720023294~exp=1720026894~hmac=a3999cb46c2de608866e232349d84f01490095f49086b0afd1807efdd29c4cd3&w=2000",
    author: "John Anderson",
    title: "Wellness Testing Solutions",
    description:
      "Transform your workplace with on-site wellness testing from My Care Labs.",
      location :"/testing-solutions/wellness-testing-solutions/",
    
  },
  {
    id: 2,
    imgUrl: "https://img.freepik.com/free-photo/researching-laboratory_1384-149.jpg?t=st=1720023298~exp=1720026898~hmac=33a10a6390b35645aefc5ea412b0b8f0748c210baffafa3675cfffecb81b6f7c&w=2000",
    author: "Kyle Parsons",
    title: "Toxicology Testing",
    description:
      "In light of HR managers’ need to recruit and retain top talent, we offers drug testing for businesses and other organizations.",
        location:"/testing-solutions/toxicology-testing-solutions/",
    },
  {
    id: 3,
    imgUrl: "https://img.freepik.com/free-photo/doctor-performing-medical-research-lab_23-2149335681.jpg?t=st=1720023304~exp=1720026904~hmac=4626e8d3ce94e1b7c7f9ab7630d297ababc5d694a6b5fbe4bd3b1c36fabdcad4&w=2000",
    author: "Andrea Bates",
    title: "Infectious Disease Testing",
    description:
      "My Care Labs was founded during the COVID-19 Pandemic. We provide fast, simple, accurate infectious disease testing.",
       location:"/testing-solutions/infectious-disease-testing-solutions"
    },
  {
    id: 4,
    imgUrl: "https://img.freepik.com/free-photo/new-test-concentrated-skilled-researchers-wearing-uniform-doing-test-creating-vaccine_1157-48114.jpg?t=st=1720023309~exp=1720026909~hmac=c05dd4831f1caca7022811d4586af52792d27f32ecc5639d1684fe0f54344325&w=2000",
    author: "Jess Drum",
    title: "Oncology Testing",
    description:
      "My Care Labs is actively working on offering an array of oncology panels that can help detect different forms of cancers.",
    location:"//testing-solutions/oncology-testing-solutions/"
    },
  {
    id: 5,
    imgUrl: "https://www.scripps.org/sparkle-assets/images/blood_test_samples_1200x750-59cd6b99366c6e716576ccd68351ed39.jpg",
    author: "Phil White",
    title: "Travel PCR Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
      location:"/travel-testing/"
  },
  // {
  //   id: 6,
  //   imgUrl: "/imgs/blog/6.png",
  //   author: "Karen Peabody",
  //   title: "State of JavaScript in 2024",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  // },
  // {
  //   id: 7,
  //   imgUrl: "/imgs/blog/7.png",
  //   author: "Dante Gordon",
  //   title: "What's new in Python?",
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  // },
];