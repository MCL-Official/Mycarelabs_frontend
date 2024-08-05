import React, { useState } from 'react';

const FaqWellness2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "Basic Metabolic Panel",
      answer: [
        "Blood Urea Nitrogen",
        "Calcium",
        "Chloride",
        "Enzymatic Carbonate",
        "Creatinine",
        "Glucose",
        "Potassium",
        "Sodium"
      ]
    },
    {
      question: "Comprehensive Metabolic Panel",
      answer: [
        "BUN - Blood Urea Nitrogen",
        "CA - Calcium",
        "CL - Chloride",
        "ECO2 - Enzymatic Carbonate",
        "CRE2 - Creatinine",
        "GLUC - Glucose",
        "K - Potassium",
        "NA - Sodium",
        "ALTI - Alanine Aminotransferase",
        "ALB - Albumin",
        "ALPI - Alkaline Phosphatase",
        "AST - Aspartate Aminotransferase",
        "TBI - Total Bilirubin",
        "TP - Total Protein"
      ]
    },
    {
      question: "Lipid Panel",
      answer: [
        "CHOL - Cholesterol",
        "AHDL - Automated HDL Cholesterol",
        "ALDL - Automated LDL Cholesterol",
        "TGL - Triglycerides"
      ]
    },
    {
      question: "Thyroid Function Panel",
      answer: [
        "FT3 - Free T3 (LOCI)",
        "FT4L - Free T4 (LOCI)",
        "T4 - Total T4",
        "TSHL - TSH (LOCI)"
      ]
    },
    {
      question: "Urinalysis",
      answer: [
        "Leukocytes",
        "Nitrite",
        "Urobilnogen",
        "Protein",
        "pH",
        "Blood",
        "Specific Gravity",
        "Ketone",
        "Bilirubin",
        "Glucose"
      ]
    },
    {
      question: "Renal Function Panel",
      answer: [
        "ALB - Albumin",
        "BUN - Blood Urea Nitrogen",
        "CA - Calcium",
        "CL - Chloride",
        "ECO2 - Enzymatic Carbonate",
        "CRE2 - Creatinine",
        "GLUC - Glucose",
        "PHOS - Phosphorus",
        "K - Potassium",
        "NA - Sodium"
      ]
    },
    {
      question: "Liver Function Panel",
      answer: [
        "ALTI - Alanine Aminotransferase",
        "ALB - Albumin",
        "ALPI - Alkaline Phosphatase",
        "AST - Aspartate Aminotransferase",
        "DBI - Direct Bilirubin",
        "TBI - Total Bilirubin",
        "TP - Total Protein"
      ]
    },
    {
      question: "Anemia Profile",
      answer: [
        "FERR - Ferritin",
        "IRON - Iron",
        "IBCT - Total Iron Binding Capacity",
        "VB12 - Vitamin B12",
        "VITD - Vitamin D",
        "FOLA - Folate"
      ]
    }
  ];
  

  return (
    <div className="max-w-4xl pl-5 pr-1 mx-auto py-5 ">
      <h2 className="text-4xl font-bold text-center">Panels We Offer</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200 mb-4">
          <button
            className="w-full text-left py-4 flex justify-between items-center"
            onClick={() => toggleFaq(index)}
          >
            <span className="text-lg font-semibold">{faq.question}</span>
            <span className="text-2xl">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-700 pl-5 text-left">
              {Array.isArray(faq.answer) ? (
                <ul className="list-disc list-inside">
                  {faq.answer.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{faq.answer}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqWellness2;
