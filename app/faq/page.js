'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: "What is a strata scheme?",
    answer: "A strata scheme is a building or collection of buildings where individuals each own a small portion (their lot/unit) but share responsibility for common property. The strata scheme is managed by the owners corporation, which is made up of all the owners."
  },
  {
    question: "What are strata levies and what do they cover?",
    answer: "Strata levies are regular contributions owners must pay to cover the costs of maintaining and managing the building. They typically cover building insurance, maintenance of common areas, repairs, administrative costs, and contributions to a sinking fund for future capital expenses."
  },
  {
    question: "How are levy amounts determined?",
    answer: "Levy amounts are determined by the owners corporation based on the approved budget for the year. Each owner pays according to their unit entitlement, which is specified in the strata plan and generally reflects the relative value of their lot."
  },
  {
    question: "What is a strata committee?",
    answer: "A strata committee is a group of owners elected at each Annual General Meeting to represent all owners and make day-to-day decisions on behalf of the owners corporation. They typically serve for a 12-month period."
  },
  {
    question: "How do I report maintenance issues in common areas?",
    answer: "Maintenance issues in common areas should be reported through our online maintenance request system, which can be accessed through the Maintenance page. For urgent issues, please contact the building manager directly."
  },
  {
    question: "Can I renovate my unit?",
    answer: "Yes, but you may need approval from the owners corporation depending on the nature of the renovations. Any renovations that affect common property (walls, floors, plumbing, electrical) typically require approval. Contact the strata committee for specific guidance."
  },
  {
    question: "What are the noise restrictions in the building?",
    answer: "Residents shall not create noise that unreasonably disturbs other residents, particularly between the hours of 10:00 PM and 7:00 AM. Construction work is only permitted between 8:00 AM and 5:00 PM on weekdays, and 9:00 AM to 4:00 PM on Saturdays."
  },
  {
    question: "What is the process for selling my unit?",
    answer: "When selling your unit, you should notify the strata manager. Potential buyers may request a strata search, which includes information about the strata scheme, including financial records and by-laws. Your real estate agent can help with this process."
  },
  {
    question: "Can I rent out my unit?",
    answer: "Yes, owners can rent out their units, but must comply with relevant by-laws and inform the strata manager. All tenants must comply with the building's by-laws, and owners are responsible for their tenants' behavior."
  },
  {
    question: "How do I access strata records and financial statements?",
    answer: "Strata records and financial statements can be accessed through the Documents section of this portal. If you require additional information, please contact the strata manager."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Frequently Asked Questions</h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden bg-white"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left font-semibold text-gray-800 hover:bg-gray-50"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="p-4 border-t bg-gray-50">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Still Have Questions?</h2>
          <p className="text-gray-700 mb-4">
            If you couldn't find the answer to your question, please contact our strata manager:
          </p>
          <div className="flex flex-col space-y-2 text-gray-700">
            <p><strong>Email:</strong> <a href="mailto:manager@stratasphere.example.com" className="text-blue-600 hover:underline">manager@stratasphere.example.com</a></p>
            <p><strong>Phone:</strong> (02) 9876 5432</p>
            <p><strong>Office Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
} 