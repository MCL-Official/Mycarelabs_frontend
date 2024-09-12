import React, { useState } from 'react';

const FaqWellness = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What should I do if I think I have a UTI?",
      answer: "If you think you have a UTI, it's important to seek medical attention promptly. My Care Labs offers UTI testing 7 days a week, with results available within 24 hours to help you start treatment as soon as possible."
    },
    {
      question: "Can UTIs go away on their own?",
      answer: "While some mild UTIs may resolve on their own, it is generally recommended to seek treatment to avoid complications, such as kidney infections, which can become more serious."
    },
    {
      question: "What happens if a UTI is left untreated?",
      answer: "If left untreated, a UTI can spread to the kidneys, leading to a more serious infection known as pyelonephritis. Kidney infections can cause permanent damage and may require hospitalization."
    },
    {
      question: "Why should I choose My Care Labs for UTI testing?",
      answer: "My Care Labs offers fast, accurate UTI testing with convenient same-day or 24-hour results. We are open 7 days a week and provide accessible testing options to ensure you get the care you need as soon as possible"
    },
  ];

  return (
    <div className="max-w-4xl sm:mx-auto pl-5 pr-1 py-5 mt-5">
      <h2 className="text-2xl font-bold mb-6 text-center">Frequently asked questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className="w-full text-left py-4 flex justify-between items-center"
            onClick={() => toggleFaq(index)}
          >
            <span className="text-lg font-semibold">{faq.question}</span>
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

export default FaqWellness;
