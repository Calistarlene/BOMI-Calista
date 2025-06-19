
import React, { useState } from 'react';

const Faq = () => {
  // Sample FAQ data - you can replace with your actual data
  const [faqs, setFaqs] = useState([
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      isOpen: false
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      isOpen: false
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      isOpen: false
    }
  ]);

  // Function to toggle FAQ open/close state
  const toggleFaq = (index) => {
    const updatedFaqs = faqs.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen };
      }
      return faq;
    });
    setFaqs(updatedFaqs);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h2 className="text-3xl font-bold text-olive-700 text-center mb-8">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="rounded-lg overflow-hidden transition-all duration-300 bg-orange-200"
          >
            {!faq.isOpen ? (
              // Collapsed state
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-medium text-olive-700">
                  {faq.question}
                </h3>
                <span className="text-2xl">+</span>
              </div>
            ) : (
              // Expanded state
              <>
                <div 
                  className="p-4 flex justify-between items-center cursor-pointer bg-olive-500"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-medium text-white">
                    Question: {faq.question}
                  </h3>
                  <span className="text-2xl text-white">-</span>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-olive-700">
                    Answer: {faq.answer}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;