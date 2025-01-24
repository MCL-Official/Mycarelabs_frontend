import React from 'react'


const HealthSolutions2 = ({features , title}) => {
    
      return (
        <section className="py-16 bg-gray-50 px-[5rem] sm:px-[0.5rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Comprehensive Lab Solutions for <span className="text-blue-600">{title}</span>
            </h2>
            <p className="mt-4 text-lg text-center text-gray-600">
            We provide diagnostic services tailored to the needs of assisted living facilities:
            </p>
    
            <div  className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
    
            {features.map((f,idx) => (
              <div key={idx} className="relative bg-white rounded-lg drop-shadow-lg overflow-hidden">
                <img
                  src={f.img}
                  alt="Tailored Testing Panels"
                  className="w-full h-[25rem] sm:h-[30rem] object-cover transition duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 flex items-left justify-left">
                  <h3 className="text-white text-5xl font-bold text-left p-3 leading-20">
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
}

export default HealthSolutions2
