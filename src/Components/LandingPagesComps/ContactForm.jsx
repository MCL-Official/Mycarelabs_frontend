import React from 'react';
import cf1 from "../../Assets/cf1.webp";
import cf2 from "../../Assets/cf2.webp";
import cf3 from "../../Assets/cf3.webp";
import cf4 from "../../Assets/cf4.webp";
import cf5 from "../../Assets/cf5.webp";

const ContactForm = () => {

  return (
    <section className="pt-16 pb-24 relative flex items-center justify-center overflow-hidden">

      {/* Form container with rounded corners and shadow */}
      <div className="bg-sky-600 rounded-lg shadow-lg p-8 text-gray-900 flex flex-col sm:flex-row gap-8 w-full max-w-5xl">
      <div className="w-full sm:w-1/2 rounded-lg bg-white">
          <div className="p-6  rounded-lg"> {/* Added padding and background to image container */}
            <div className="text-black"> {/* Container for text content */}
              <h2 className="text-3xl font-bold mb-4">Partner with <span className='text-sky-600'>My Care Labs</span></h2>
              <h3 className="text-xl text-left font-bold text-red-600 mb-2">What Sets Us Apart:</h3>
              <ul className="list-disc text-left pl-6 space-y-2 text-lg">
                <li>Mobile Phlebotomy</li>
                <li>48-Hour Turnaround Time on UTI Testing</li>
                <li>Labs Open Monday to Friday</li>
                <li>Accurate & Reliable Results</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <img src={cf1} alt="CalREDIE" className="h-12" />
                <img src={cf2} alt="CDPH" className="h-12" />
                <img src={cf3} alt="California COVID Task Force" className="h-12" />
                <img src={cf4} alt="CDC" className="h-12" />
                <img src={cf5} alt="CLIA" className="h-12" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2 bg-sky-600">
          <h3 className="text-4xl font-semibold text-center text-white mb-4 sm:mb-0">REQUEST A CALL BACK</h3>

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              className="col-span-1 sm:col-span-2 w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700"
            >
              Get Started Now
            </button>
          </form>

          <p className="mt-3 text-center text-2xl text-white">
            Call Us at{' '}
            <a href="tel:800-790-4550" className="text-orange-600 font-bold text-2xl hover:underline no-underline">
              800-790-4550
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;