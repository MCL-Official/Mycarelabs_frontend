import React, { useState } from 'react';

const Faq1 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How this theme is different from others in market?",
      answer: "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
    },
    {
      question: "What is your policy on distributon of Flowspark assets?",
      answer: "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
    },
    {
      question: "How can I contribute to Flowspark?",
      answer: "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
    },
    {
      question: "What other themes do you have?",
      answer: "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl. Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa. Pellentesque purus eget, imperdiet turpis.",
    }
  ];

  return (
    <div>
      <section>
        <div className="mx-auto w-full max-w-5xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mb-8 text-center md:mb-12 lg:mb-16">
            <h2 className="text-3xl font-semibold md:text-5xl">Frequently Asked <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')] bg-cover bg-center px-4 text-white">Questions</span></h2>
            <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam, purus sit amet luctus magna fringilla urna</p>
          </div>
          <div className="mb-8 md:mb-12 lg:mb-16">
            {faqData.map((faq, index) => (
              <div key={index} className="mb-6 rounded-xl border border-solid border-black p-8">
                <div className="mb-4 flex cursor-pointer items-start justify-between" onClick={() => toggleFaq(index)}>
                  <p className="text-xl font-semibold">{faq.question}</p>
                  <div className="relative ml-10 flex h-8 w-8 flex-none items-center justify-center rounded-md bg-[#1353fe]">
                    <div className={`absolute h-4 w-0.5 bg-white transform transition-transform ${openIndex === index ? 'rotate-90' : ''}`}></div>
                    <div className="h-0.5 w-4 border border-solid border-white"></div>
                  </div>
                </div>
                {openIndex === index && (
                  <p className="mb-4 text-[#636262]">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-center">Can’t find the answer you’re looking for? Reach out to our <a href="#" className="font-bold text-[#1353fe]">customer support team</a>.</p>
        </div>
      </section>
    </div>
  );
};

export default Faq1;
