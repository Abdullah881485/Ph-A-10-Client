import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = () => {
  const faqs = [
    {
      q: "Is FinEase free to use?",
      a: "Yes, FinEase is completely free for personal finance tracking with all core features available.",
    },
    {
      q: "Is my financial data secure?",
      a: "Your data is protected with secure authentication and access control. Only you can access your information.",
    },
    {
      q: "Can I track both income and expenses?",
      a: "Absolutely. FinEase allows you to track income, expenses, and view your balance in real time.",
    },
    {
      q: "Can I access FinEase from any device?",
      a: "Yes, FinEase is fully responsive and works smoothly on mobile, tablet, and desktop devices.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="w-[95%] md:w-8/10 mx-auto py-6">
      <h2 className="text-2xl font-bold text-[#7c3aed] mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((item, idx) => {
          const isOpen = activeIndex === idx;

          return (
            <div
              key={idx}
              className="bg-base-300 rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
              >
                <span className="text-base-content font-medium">{item.q}</span>
                <FiChevronDown
                  className={`text-[#7c3aed] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 text-base-500 text-sm leading-relaxed transition-all duration-300 ${
                  isOpen
                    ? "pb-4 max-h-40 opacity-100"
                    : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
