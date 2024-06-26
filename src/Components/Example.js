import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Example = () => {
  return (
    <div className="flex h-[500px] justify-center bg-neutral-900 px-3 py-12">
      <FlyoutLink href="#" FlyoutContent={PricingContent}>
        Pricing
      </FlyoutLink>
    </div>
  );
};

export const FlyoutLink = ({ children, href, FlyoutContent }) => {
    const [open, setOpen] = useState(false);
  
    const showFlyout = FlyoutContent && open;
  
    const linkClassName = `flex items-center justify-between w-full px-2 font-medium border-b border-gray-100 md:w-auto hover:text-blue-700 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 text-white`;
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className={linkClassName}>
          {children}
          <span     
            style={{
              transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
            }}
            className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#007bff] transition-transform duration-300 ease-out"
          />
        </a>
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-12 bg-white text-black shadow-lg w-full md:w-3/4" // Adjusted width for debugging
              >
                <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
                {/* <FlyoutContent /> */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };
  

export const PricingContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
      <div>
        <h3 className="font-bold mb-3">IDEATION AND PRODUCT DESIGN</h3>
        <p className="mb-1">UI/UX</p>
        <div className="border-b-2 border-gray-200 my-3"></div>
        <h3 className="font-bold mb-3">MOBILE APP DEV</h3>
        <p className="mb-1">PWA</p>
        <p className="mb-1">Mobile first Design</p>
        <div className="border-b-2 border-gray-200 my-3"></div>
        <h3 className="font-bold mb-3">DIGITAL TRANSFORMATION</h3>
        <p className="mb-1">Supply chain management</p>
        <p className="mb-1">Legacy Modernization</p>
        <div className="border-b-2 border-gray-200 my-3"></div>
        <h3 className="font-bold mb-3">ELECTRIC VEHICLES</h3>
        <p className="mb-1">E-mobility</p>
      </div>
    </div>
  );
};

export default Example;
