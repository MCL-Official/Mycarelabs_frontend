import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const AccordionSolutions = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;

  return (
    <section className="px-8 py-12 bg-white">
      <div className="w-full max-w-5xl mx-auto grid gap-8 grid-cols-1 lg:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="text-4xl font-bold mb-8">Solutions</h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => (
              <Solution {...q} key={q.id} open={open} setOpen={setOpen} index={q.id} />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="bg-slate-300 rounded-2xl h-full"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({ title, description, index, open, setOpen }) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="p-0.5 rounded-lg relative overflow-hidden cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="p-6 rounded-[7px] bg-white flex flex-col justify-between relative z-20"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="text-xl font-medium w-fit bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="-ml-6 -mr-6 -mb-6 mt-4 py-2 rounded-b-md flex items-center justify-center gap-1 group transition-[gap] bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
        >
          <span>Learn more</span>
          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-violet-600 to-indigo-600"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "What is a Anticonvulsant Test?",
    description:
      "The Anticonvulsant Test is a diagnostic procedure designed to measure the levels of Anticonvulsant in the blood. Anticonvulsant is an anticonvulsant and mood-stabilizing medication prescribed to manage epilepsy, bipolar disorder, and certain types of nerve pain.",
    imgSrc:
      "https://img.freepik.com/free-vector/blood-research-concept-illustration_114360-24763.jpg?t=st=1719954685~exp=1719958285~hmac=796ba3b38bdae9308915de0e3a4bd4791914c7fb5e57eeab14ba4006957a0974&w=1800",
  },
  {
    id: 2,
    title: "Why Are Anticonvulsant Tests Done?",
    description:
      `Optimizing Medication Management: The primary purpose of Anticonvulsant Tests is to optimize the management of Anticonvulsant medication  
      Ensuring Therapeutic Efficacy: Maintaining Anticonvulsant levels within the therapeutic range is essential for its efficacy in treating conditions such as epilepsy and nerve pain`,
    imgSrc:
      "https://aci.edu/wp-content/uploads/2018/02/Depositphotos_11194384_original-e1518199867636.jpg?w=186",
  },
  {
    id: 3,
    title: "Why Choose Care Labs?",
    description:
      "Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable Anticonvulsant Test results alos have Convenient Location",
    imgSrc:
      "https://img.freepik.com/free-photo/medical-technologist-doing-blood-draw-services-patient-lab-assistant-with-sterile-rubber-gloves-taking-blood-sample-from-patient_657921-350.jpg?t=st=1722633264~exp=1722636864~hmac=ecf3acd29c9347fb3c93ee80e140899a4d48e72af4cb6bff985d840f8369e1e6&w=2000",
  },
  {
    id: 4,
    title: "The Anticonvulsant Testing Process!",
    description:
      "Our state-of-the-art laboratory equipment and skilled technicians ensure precise and dependable Anticonvulsant Test results alos have Convenient Location",
    imgSrc:
      "https://img.freepik.com/free-photo/two-doctors-lab_23-2147822684.jpg?uid=R151749250&ga=GA1.1.386726752.1715621031&semt=ais_user",
  },
];
