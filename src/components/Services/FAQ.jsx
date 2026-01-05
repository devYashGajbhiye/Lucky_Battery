import React,{useState} from 'react'
import { FaChevronDown } from "react-icons/fa";
import "../../styles/FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "Do you provide warranty on batteries?",
      answer:
        "Yes, all our batteries come with manufacturer warranty and full after-sales support.",
    },
    {
      question: "How fast is your home delivery service?",
      answer:
        "We usually deliver and install batteries within a few hours, depending on your location.",
    },
    {
      question: "Can I exchange my old battery?",
      answer:
        "Yes, we offer battery exchange services where you get instant discounts on new batteries.",
    },
    {
      question: "Do you provide battery rental services?",
      answer:
        "Yes, we provide affordable battery rental solutions for homes, offices, and temporary needs.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "We serve nearby cities and surrounding areas with fast delivery and on-site support.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about our services
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h4>{faq.question}</h4>
                <FaChevronDown className="faq-icon" />
              </div>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;