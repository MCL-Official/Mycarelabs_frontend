import React, { useState } from 'react';

const FaqWellness = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What are the types of wellness tests available?",
      answer: "Common wellness tests include blood tests (such as complete blood count, lipid profile, and glucose levels), urine tests, hormone panels, vitamin and mineral screenings, and other assessments. These tests help evaluate overall health, detect deficiencies, and identify risk factors for chronic diseases."
    },
    {
      question: "Do I need to fast before taking wellness tests?",
      answer: "Fasting requirements depend on the specific test. For example, lipid profiles and glucose tests often require fasting for 8-12 hours to ensure accurate results. Always follow your healthcare provider’s instructions regarding fasting or other preparations before your test."
    },
    {
      question: "What is the purpose of wellness testing?",
      answer: "The purpose of wellness testing is to assess overall health, identify potential health risks early, monitor existing conditions, and guide personalized healthcare plans. These tests provide valuable insights into your physical well-being and help in the prevention and management of diseases."
    },
    {
      question: "How often should I undergo wellness testing?",
      answer: "The frequency of wellness testing varies based on age, health status, family history, and individual risk factors. Generally, adults should have quarterly check-ups that include basic wellness tests. Your healthcare provider can recommend a personalized testing schedule based on your specific needs."
    },
    {
      question: "Are wellness tests covered by insurance?",
      answer: "Coverage for wellness tests varies by insurance plan and provider. Many health insurance plans cover preventive services, including certain wellness tests, without additional costs to the patient. It is important to check with your insurance provider to understand what tests are covered and any associated costs. For uninsured patients, we offer discounted wellness testing on Tuesdays and Thursdays."
    }
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
