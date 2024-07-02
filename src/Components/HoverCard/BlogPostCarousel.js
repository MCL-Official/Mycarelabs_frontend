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

const Post = ({ imgUrl, author, title, description }) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
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
    imgUrl: "https://envato-shoebox-0.imgix.net/a4c8/5702-af1b-4e4d-a4de-d2d692ec3a33/IMG_0747.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=75fe333d01a097e1d65c01be63853c1c",
    author: "John Anderson",
    title: "Wellness Testing Solutions",
    description:
      "Transform your workplace with on-site wellness testing from My Care Labs.",
  },
  {
    id: 2,
    imgUrl: "https://envato-shoebox-0.imgix.net/a4c8/5702-af1b-4e4d-a4de-d2d692ec3a33/IMG_0747.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=75fe333d01a097e1d65c01be63853c1c",
    author: "Kyle Parsons",
    title: "Toxicology Testing",
    description:
      "In light of HR managers’ need to recruit and retain top talent, we offers drug testing for businesses and other organizations.",
  },
  {
    id: 3,
    imgUrl: "https://envato-shoebox-0.imgix.net/a4c8/5702-af1b-4e4d-a4de-d2d692ec3a33/IMG_0747.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=75fe333d01a097e1d65c01be63853c1c",
    author: "Andrea Bates",
    title: "Infectious Disease Testing",
    description:
      "My Care Labs was founded during the COVID-19 Pandemic. We provide fast, simple, accurate infectious disease testing.",
  },
  {
    id: 4,
    imgUrl: "https://envato-shoebox-0.imgix.net/a4c8/5702-af1b-4e4d-a4de-d2d692ec3a33/IMG_0747.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=75fe333d01a097e1d65c01be63853c1c",
    author: "Jess Drum",
    title: "Oncology Testing",
    description:
      "My Care Labs is actively working on offering an array of oncology panels that can help detect different forms of cancers.",
  },
  {
    id: 5,
    imgUrl: "https://envato-shoebox-0.imgix.net/a4c8/5702-af1b-4e4d-a4de-d2d692ec3a33/IMG_0747.jpg?auto=compress%2Cformat&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&w=1600&fit=max&markalign=center%2Cmiddle&markalpha=18&s=75fe333d01a097e1d65c01be63853c1c",
    author: "Phil White",
    title: "Travel PCR Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
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