import React from "react";
import ls1 from "../../Assets/ls1.webp";
import ls2 from "../../Assets/ls2.webp";
import ls3 from "../../Assets/ls3.webp";
import ls4 from "../../Assets/ls4.webp";

const HealthSolutions = () => {

  const feature = [
    {
      img:ls1,
      title:`Tailored Testing Panels `
    },
    {
      img:ls2,
      title:"24/7 Customer Support"
    },
    {
      img:ls3,
      title:"HIPAA- Compliant Processes"
    },
    {
      img:ls4,
      title:"Mobile Services Throughout California"
    },
    

  ]
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          Comprehensive <span className="text-blue-600">Lab Solutions</span>
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Our flexible and scalable solutions cater to healthcare providers,
          educational institutions, and treatment centers, ensuring:
        </p>

        <div  className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

        {feature.map((f,idx) => (
          <div key={idx} className="relative bg-white rounded-lg shadow-[10px_10px_0_theme(colors.neutral.700)] overflow-hidden">
            <img
              src={f.img}
              alt="Tailored Testing Panels"
              className="w-full h-48 object-cover transition duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 flex items-left justify-left">
              <h3 className="text-white text-3xl font-bold text-left p-3 leading-10">
              {f.title.split(" ").map((word, index) => (
                    <React.Fragment key={index}>
                      {word}
                      <br />
                    </React.Fragment>
                  ))}
              </h3>
            </div>
          </div>
          ))
        }
        </div>

          
      </div>
    </section>
  );
};

export default HealthSolutions;
