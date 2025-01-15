import React, { useState } from 'react';
import { Helmet } from "react-helmet";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where & when can I get a Covid-19 test?",
      answer: "To schedule an appointment, book online at our booking page. You may also call our patient care team at 800-790-4550. We also offer walk-in and drive-through testing without appointment before our appointment times fill up."
    },
    {
      question: "Can you send my results to my doctor / clinic/ hospital / other via fax or email?",
      answer: "Your provider needs to send us a HIPAA-compliant request by email, fax, or call."
    },
    {
      question: "How can I view and share My Care Labs COVID/RSV/Flu test results with my airline, friends, family, school, work, doctor, hospital, another clinic, insurance, etc? ",
      answer: "Our Patientxchange portal allows you to download a PDF or Readipass (travel) QR code of your test results. You can log into your patient portal on our website."
    },
    {
      question: "What is an Explanation of Benefits?",
      answer: "An EOB (Explanation of Benefits) is a formal notice from your insurance provider stating what they have covered. This is not a bill/charge, but a detailed overview of the services My Care Labs has rendered and what your provider has covered."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 flex">
      <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      
      {/* Left Image */}
      <div className="hidden lg:block flex-shrink-0 mr-10">
        <img
          src="https://i.ibb.co/8x8Yg3S/Untitled-1280-x-720-px-1300-x-1000-px.png"
          alt="FAQ icon"
          className="w-80 h-auto rounded-lg pt-24 pr-5"
        />
      </div>

      {/* Right FAQ Section */}
      <div className="w-full">
        <h2 className="text-4xl font-bold mb-8 text-orange-500 text-center">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className={`w-full text-left py-4 px-6 flex justify-between items-center rounded-xl shadow-lg transition-all duration-300 ${
                openIndex === index ? "bg-orange-400 text-white" : "bg-white text-black"
              }`}
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 text-gray-700 bg-gray-50 rounded-b-xl">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
