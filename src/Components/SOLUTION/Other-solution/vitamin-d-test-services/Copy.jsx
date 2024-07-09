import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({ selected, setSelected }) => {
  return (
    <div className="w-full">
      <span className="mb-1.5 block text-center text-indigo-600 md:text-start">
        Show who it's for
      </span>
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight md:text-start md:text-5xl md:leading-tight">
      Understanding the Vitamin D Test
      </h2>
      <p className="mb-6 text-left  text-base leading-relaxed md:text-start md:text-lg md:leading-relaxed">
      The Vitamin D test measures the levels of vitamin D in the blood, specifically focusing on 25-hydroxyvitamin D, 
      the major circulating form of this essential nutrient. This test is instrumental in evaluating your body’s vitamin D status, which plays a key role in bone health, 
      immune function, and overall well-being. Key Test Components: The primary focus of the Vitamin D test is to measure the concentration of
       25-hydroxyvitamin D, providing insights into whether your vitamin D levels are within the recommended range.
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => {
          return (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          );
        })}
      </div>
    </div>
  );
};
