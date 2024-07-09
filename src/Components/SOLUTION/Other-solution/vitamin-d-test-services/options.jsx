import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({ imgSrc, name, title, company, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-zinc-900 bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-24 rounded-lg border-2 border-zinc-900 bg-indigo-200"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-zinc-600">
            {title} – <span className="text-indigo-600">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Reliable Results",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Jeff"
        name="Reliable Results"
        title="CEO"
        company="The Company"
        content="Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable Vitamin D test results."
      />
    ),
  },
  {
    title: "Experienced Professionals",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dan"
        name="Dan S."
        title="Experienced Professionals"
        company="@TheChannel"
        content="At My Care Labs, our team includes experienced pathologists and laboratory technicians dedicated to maintaining the highest standards of quality in vitamin D assessment."
      />
    ),
  },
  {
    title: "Convenient Location",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Carey"
        name="Convenient Location"
        title="Writer"
        company="theblog.com"
        content="Situated in Fremont, California, our lab is easily accessible, providing convenience for individuals seeking Vitamin D testing."
      />
    ),
  },
  {
    title: "Cutting-edge Facilities",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dani"
        name="Cutting-edge Facilities"
        title="Author"
        company="Books About Things"
        content="My Care Labs is equipped with modern facilities, adhering to the latest advancements in medical technology for efficient and accurate testing."
      />
    ),
  },
  {
    title: "Scheduling",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Phil"
        name="Scheduling"
        title="UI/UX Design"
        company="The Other Company"
        content="Schedule your Vitamin D test at My Care Labs by booking an appointment. We offer flexible scheduling to accommodate your convenience."
      />
    ),
  },
  {
    title: "Sample Collection",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Stetson"
        name="Sample Collection"
        title="Consultant"
        company="The Company Company"
        content="Our skilled phlebotomists will collect a small blood sample, utilizing advanced and minimally invasive techniques for your comfort."
      />
    ),
  },
  {
    title: "Laboratory Analysis",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Patty"
        name="Laboratory Analysis"
        title="Photographer"
        company="@ThePictureLady"
        content="The collected sample undergoes comprehensive laboratory analysis using cutting-edge technology to measure Vitamin D levels accurately."
      />
    ),
  },
  {
    title: "Results Delivery",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Kert"
        name="Results Delivery"
        title="Film Maker"
        company="@MovieDude"
        content="Expect timely and confidential delivery of your Vitamin D test results once the analysis is complete."
      />
    ),
  },
  // {
  //   title: "Local Business",
  //   Content: () => (
  //     <Testimonial
  //       imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Joanne"
  //       name="Joanne F."
  //       title="Business Owner"
  //       company="The Local Company"
  //       content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis qui fuga, deserunt doloribus, vero autem libero sed dolorum nostrum quidem in soluta magni eos excepturi."
  //     />
  //   ),
  // },
];
