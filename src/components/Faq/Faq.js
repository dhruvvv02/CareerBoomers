import React, { useState, useRef } from 'react';
import './faq.css';

const Faq = () => {
  const faqData = [
    {
      question: "What is CareerBoomers?",
      answer: "CareerBoomers is a platform that offers various courses and resources to help users achieve their career goals."
    },
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll by navigating to the course section, selecting your desired course, and clicking on 'Enroll Now'."
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a 7-day refund policy on all courses. If you're not satisfied, please reach out to support."
    },
    {
      question: "Can I access courses on mobile?",
      answer: "Yes, CareerBoomers is mobile-friendly, so you can access courses on any device with internet connectivity."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onMouseOver={() => handleToggle(index)}>
              {item.question}
              <span className="faq-toggle-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            <div
              className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}
              style={{
                maxHeight: activeIndex === index ? '200px' : '0',
                opacity: activeIndex === index ? '1' : '0',
              }}
            >
              <div className="faq-answer">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
