import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What types of insurance does CoverMatch offer?",
      answer: "CoverMatch offers a variety of insurance types including auto, home, life, and health insurance."
    },
    {
      question: "How can I get a quote for insurance coverage?",
      answer: "You can get a quote by visiting our website and filling out a simple form with your details."
    },
    {
      question: "What factors affect the cost of my insurance premiums?",
      answer: "Factors such as your age, location, driving history, and the type of coverage you choose can affect the cost of your premiums."
    },
    {
      question: "How do I file a claim with CoverMatch?",
      answer: "You can file a claim by logging into your account on our website and following the instructions provided."
    },
    {
      question: "How long does it take to process a claim?",
      answer: "The time it takes to process a claim can vary, but we strive to handle all claims as quickly and efficiently as possible."
    },
    {
      question: "Can I make changes to my policy after purchasing it?",
      answer: "Yes, you can make changes to your policy by contacting our customer service team."
    },
    {
      question: "What payment options are available for my insurance premiums?",
      answer: "We offer various payment options including credit card, debit card, and direct bank transfer."
    },
    {
      question: "How does CoverMatch determine the amount of coverage I need?",
      answer: "We consider several factors such as your financial situation, assets, and liabilities to determine the appropriate amount of coverage for you."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-5 mt-5">
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
