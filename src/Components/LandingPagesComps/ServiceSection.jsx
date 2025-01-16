import React from "react";

const ServiceSection = () => {
  return (
    <section className="text-gray-600 body-font py-12 bg-gray-50">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 uppercase">
            Our Services
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Comprehensive Diagnostic Solutions
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 justify-center">
          {/* Service Cards */}
          {[
            { title: "UTI Testing", description: "Fast and reliable urinary tract infection diagnostics with a 48-hour turnaround." },
            { title: "COVID/RSV/Flu Testing", description: "Comprehensive respiratory testing for seasonal and pandemic needs." },
            { title: "Wellness Testing", description: "Holistic health panels for employee and resident wellness programs." },
            { title: "At-home Test Kits", description: "Convenient testing solutions delivered directly to your location." },
            { title: "Mobile Testing Services", description: "Bringing our laboratory to your doorstep for seamless diagnostic support." },
          ].map((service, index) => (
            <div key={index} className="p-4 md:w-1/3 w-full">
              <div className="group flex rounded-lg h-full p-8 flex-col shadow-md transition duration-300 ease-in-out hover:bg-sky-700"> {/* Added 'group' class here */}
                <div className="flex justify-center items-center mb-3">
                  <h2 className="text-gray-900 text-xl title-font font-medium group-hover:text-white">
                    {service.title}
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-lg group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;