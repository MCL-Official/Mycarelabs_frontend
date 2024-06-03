import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;

const cards = [
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJqmODPz2nZ-Swm92kpiOQLZPEk9csjuDzuw&s",
    title: "Fremont Laboratory",
    id: 1,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPooSwdedSBrogaZxjdCCv9A3qQFcVYcxVXQ&s",
    title: "Riverside Mobile Testing",
    id: 2,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMWBlVFEN10UuNzDAwe6p4IwmVMpqdnyfebA&s",
    title: "SF Bay Area / Silicon Valley Mobile Testing",
    id: 3,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAqAFNuNNWBjdWZmSuVSA1rDzG4SgIFTvUVA&s",
    title: "Riverside Gurdwara",
    id: 4,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVsb_2YfvixGY1yrV6jHLfGQK_tfRlkMGuOA&s",
    title: "PCR COVID-19, RSV, and Influenza A/B Test Kit",
    id: 5,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMsPl9ceVjkpraPS7GB-cieU0CRTkYydcUg&s",
    title: "Union City Pop-up",
    id: 6,
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWe7r-uPgnvEh52FMRtK0PgIHGy_73Lxr4Q&s",
    title: "Mobile Testing: Corona, CA",
    id: 7,
  },
];