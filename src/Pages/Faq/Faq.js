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
      question: "How much would it cost to me to do a Covid-19 test?",
      answer: "It’s no cost to you with insurance coverage. You won’t pay any portion that your insurance doesn’t cover. If you do not have insurance and for travel testing, the cost is $250. We offer financial hardship applications as well – please ask if needed."
    },
    {
      question: "Can you send my results to my doctor / clinic/ hospital / other via fax or email?",
      answer: "Your provider needs to send us a HIPAA-compliant request by email, fax, or call."
    },
    {
      question: " How can I view and share My Care Labs COVID/RSV/Flu test results with my airline, friends, family, school, work, doctor, hospital, another clinic, insurance, etc? ",
      answer: "Our Patientxchange portal allows you to download a PDF or Readipass (travel) QR code of your test results. You can log into your patient portal on our website."
    },
    {
      question: "Will I receive an EOB or bill?",
      answer: "The time it takes to process a claim can vary, but we strive to handle all claims as quickly and efficiently as possible."
    }
  ];

  return (
    <div className="max-w-4xl sm:mx-auto px-2 py-5 mt-5">
        <Helmet>
        <title>Welcome to My Care Labs | Comprehensive Health Solutions</title>
        <meta name="description" content="Discover comprehensive health solutions at My Care Labs. From infectious diseases to wellness and toxicology, we're here for your well-being." />
        <meta name="keywords" content="health solutions, My Care Labs, infectious diseases, wellness, toxicology, book appointments, check test results, home test kits" />
        <meta name="author" content="My Care Labs" />
      </Helmet>
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently asked questions.</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left py-4 flex justify-between items-center"
            onClick={() => toggleFaq(index)}
          >
            <span className="text-lg">{faq.question}</span>
            <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
