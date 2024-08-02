import { motion } from "framer-motion";
import { useRef, useState } from "react";

const DragShuffleHero = () => {
  const [order, setOrder] = useState([
    "first", "second", "third", "fourth", "fifth", "sixth", "seventh"
  ]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop());
    setOrder(orderCopy);
  };

  return (
    <section className="overflow-hidden bg-slate-900 px-8 py-24 text-slate-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-5xl font-black leading-[1.25] md:text-7xl">
            You don't know marketing
          </h3>
          <p className="mb-8 mt-4 text-lg text-slate-400">
            ...but we're going to help. We send out weekly break downs of
            exactly what's working and what's not for the largest companies in
            the world. It's free.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-transparent bg-slate-800 px-3 py-2 transition-colors focus:bg-slate-700 focus:outline-none"
            />
            <button className="whitespace-nowrap rounded bg-indigo-600 px-3 py-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Join newsletter
            </button>
          </form>
        </div>
        <div className="relative h-[450px] w-[350px]">
          <Card
            imgUrl="https://mycarelabs.com/wp-content/uploads/2023/11/Ellipse-9-1.png"
            testimonial="Harvey Singh"
            author="Chief Executive Officer "
            handleShuffle={handleShuffle}
            position={order[0]}
          />
          <Card
            imgUrl="https://mycarelabs.com/wp-content/uploads/2024/01/Ellipse-9-4-min.png"
            testimonial="Aman Singh"
            author="Vice President Global Operations"
            handleShuffle={handleShuffle}
            position={order[1]}
          />
          <Card
            imgUrl="https://mycarelabs.com/wp-content/uploads/2023/11/Ellipse-11.png"
            testimonial="Dr. Carl Johnson"
            author="Medical Director"
            handleShuffle={handleShuffle}
            position={order[2]}
          />
          {/* <Card
            imgUrl="https://mycarelabs.com/wp-content/uploads/2023/12/Mask-group-7-min.png"
            testimonial="Kshitij Jayarajan"
            author="VP, Marketing"
            handleShuffle={handleShuffle}
            position={order[3]}
          /> */}
          <Card
            imgUrl="https://mycarelabs.com/wp-content/uploads/2023/12/Mask-group-6-min.png"
            testimonial="Emily Garcia"
            author="Marketing Manager"
            handleShuffle={handleShuffle}
            position={order[4]}
          />
          <Card
            imgUrl="https://mycarelabs.com/wp-content/uploads/2024/01/Ellipse-9-2.png"
            testimonial="Soun Kanwar"
            author="Communications Director"
            handleShuffle={handleShuffle}
            position={order[5]}
          />
          <Card
            imgUrl="https://mycarelabs.com/wp-content/uploads/2023/11/Ellipse-17.png"
            testimonial="Ralph Giron"
            author="General Manager"
            handleShuffle={handleShuffle}
            position={order[6]}
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ handleShuffle, testimonial, position, imgUrl, author }) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  // Define styles based on the position
  const x = position === "first" ? "0%" : 
            position === "second" ? "33%" : 
            position === "third" ? "66%" :
            position === "fourth" ? "99%" :
            position === "fifth" ? "132%" :
            position === "sixth" ? "165%" :
            position === "seventh" ? "198%" : "0%";
  
  const rotateZ = position === "first" ? "-6deg" : 
                   position === "second" ? "0deg" : 
                   position === "third" ? "6deg" :
                   position === "fourth" ? "12deg" :
                   position === "fifth" ? "-12deg" :
                   position === "sixth" ? "18deg" :
                   position === "seventh" ? "-18deg" : "0deg";
  
  const zIndex = position === "first" ? "2" : 
                  position === "second" ? "1" : 
                  position === "third" ? "0" :
                  position === "fourth" ? "-1" :
                  position === "fifth" ? "-2" :
                  position === "sixth" ? "-3" :
                  position === "seventh" ? "-4" : "0";

  const draggable = position === "first";

  return (
    <motion.div
      style={{ zIndex }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      />
      <span className="text-center text-2xl italic text-slate-400">
        {testimonial}
      </span>
      <span className="text-center text-lg font-medium text-indigo-400">
        {author}
      </span>
    </motion.div>
  );
};

export default DragShuffleHero;
