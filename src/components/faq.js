"use client";
import React, { useState } from "react";

const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <section className="mb-16 bg-gray-100 py-16 -mx-4 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-crimson-text font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              question: "How do I get started with Study Mentor?",
              answer:
                "Simply sign up for a free 7-day trial and get instant access to all our study materials and features.",
            },
            {
              question: "What subjects do you cover?",
              answer:
                "We cover all UPSC subjects including History, Geography, Economics, Polity, and more.",
            },
            {
              question: "Do you provide mentorship?",
              answer:
                "Yes, we offer one-on-one mentorship with experienced IAS officers and subject experts.",
            },
            {
              question: "How often is the study material updated?",
              answer:
                "Our content is updated daily to include the latest current affairs and exam-relevant information.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="font-crimson-text text-xl font-bold">
                  {faq.question}
                </h3>
                <i
                  className={`fas fa-chevron-down transform transition-transform duration-200 ${
                    activeAccordion === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  activeAccordion === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-gray-700 font-lato">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#00ff00] text-black px-8 py-4 rounded-lg font-lato text-lg hover:bg-[#00dd00] transition-colors duration-200">
            Start Exploring
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
