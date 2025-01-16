import card1 from "../../Assets/B2b_covidBack.webp";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-50 pt-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={card1}
            alt="Professional healthcare setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-white mb-12">
            {" "}
            {/* Centered Heading */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Partner with My Care Labs
            </h1>
          </div>
          {/* Added py-20 for vertical padding */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  text-white">
            {" "}
            {/* Changed to grid */}
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="max-w-md mx-auto lg:mx-0">
                {" "}
                {/* Added max-w-md and mx-auto for centering on smaller screens */}
                <p className="my-4 text-left text-xl md:text-2xl pl-8">
                  What Sets Us Apart in Diagnostic Excellence
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-left text-xl md:text-2xl ">
                    <span className="text-white font-bold text-2xl mr-2">
                      ●
                    </span>
                    Mobile Phlebotomy
                  </li>
                  <li className="flex items-center text-left text-xl md:text-2xl">
                    <span className="text-white font-bold text-2xl mr-2">
                    ●
                    </span>
                    48-Hour Turnaround Time on UTI Testing
                  </li>
                  <li className="flex items-center text-left text-xl md:text-2xl">
                    <span className="text-white font-bold text-2xl mr-2">
                    ●
                    </span>
                    Labs Open Monday to Friday
                  </li>
                  <li className="flex items-center text-left text-xl md:text-2xl">
                    <span className="text-white font-bold text-2xl mr-2">
                    ●
                    </span>
                    Accurate & Reliable Results
                  </li>
                </ul>
                {/* <h3 className="text-xl font-bold mt-8">
                  Proudly Partnered With
                </h3> 
                 <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {" "}
                  
                  <img
                    src="calredie-logo.png"
                    alt="CalREDIE"
                    className="h-12"
                  />
                  <img src="cdph-logo.png" alt="CDPH" className="h-12" />
                  <img
                    src="california-covid-task-force-logo.png"
                    alt="California COVID Task Force"
                    className="h-12"
                  />
                  <img src="cdc-logo.png" alt="CDC" className="h-12" />
                  <img src="clia-logo.png" alt="CLIA" className="h-12" />
                </div> */}
              </div>
            </div>
            {/* Right Content (Form) */}
            <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg text-gray-900">
              <h3 className="text-4xl font-bold text-center text-black">Get Started</h3>
              <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Form Inputs (same as before) */}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Company (Optional)"
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
                <textarea
                  placeholder="Comments (Optional)"
                  rows="3"
                  className="col-span-1 sm:col-span-2 w-full p-3 border rounded-lg focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="col-span-1 sm:col-span-2 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                >
                  Get Started Now
                </button>
              </form>
              <p className="mt-3 text-center text-gray-700">
                Call Us at{" "}
                <a
                  href="tel:800-790-4550"
                  className="text-blue-600 font-bold hover:underline no-underline"
                >
                  800-790-4550
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
