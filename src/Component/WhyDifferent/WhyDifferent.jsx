import {
  FiShield,
  FiTrendingUp,
  FiClock,
  FiUserCheck,
  FiActivity,
  FiDatabase,
} from "react-icons/fi";

const WhyDifferent = () => {
  const reasons = [
    {
      title: "Financial Clarity",
      desc: "Get a clear overview of where your money comes from and where it goes.",
      icon: <FiTrendingUp />,
    },
    {
      title: "Secure & Private",
      desc: "Your financial data is protected with secure authentication and strict access control.",
      icon: <FiShield />,
    },
    {
      title: "Time-Saving Automation",
      desc: "Automatic calculations reduce manual work and save valuable time.",
      icon: <FiClock />,
    },
    {
      title: "User-Centric Experience",
      desc: "Designed for simplicity so anyone can manage finances confidently.",
      icon: <FiUserCheck />,
    },
    {
      title: "Actionable Insights",
      desc: "Identify spending patterns and improve habits using real data.",
      icon: <FiActivity />,
    },
    {
      title: "Reliable Data Storage",
      desc: "Cloud-based storage ensures data safety and accessibility anytime.",
      icon: <FiDatabase />,
    },
  ];

  return (
    <section className="w-[95%] md:w-8/10 mx-auto py-6">
      <h2 className="text-2xl font-bold text-[#7c3aed] mb-10 text-center">
        Why Choose FinEase
      </h2>

      <div className="space-y-6">
        {reasons.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-4 items-start border-b border-gray-700 pb-5"
          >
            <div className="text-[#7c3aed] text-2xl mt-1">{item.icon}</div>

            <div>
              <h3 className="text-lg font-semibold text-base-content">
                {item.title}
              </h3>
              <p className="text-sm text-base-500 leading-relaxed mt-1">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDifferent;
