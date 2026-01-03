import {
  FiBarChart2,
  FiLock,
  FiPieChart,
  FiSmartphone,
  FiCloud,
  FiZap,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

const Features = () => {
  const features = [
    {
      title: "Real-time Balance",
      desc: "Track your income and expenses instantly.",
      icon: <FiBarChart2 />,
    },
    {
      title: "Category Insights",
      desc: "Understand spending patterns clearly.",
      icon: <FiPieChart />,
    },
    {
      title: "Secure Access",
      desc: "Protected with modern authentication.",
      icon: <FiLock />,
    },
    {
      title: "Financial Reports",
      desc: "Detailed summaries for better planning.",
      icon: <FiLayers />,
    },
    {
      title: "Responsive Design",
      desc: "Perfect experience on all devices.",
      icon: <FiSmartphone />,
    },
    {
      title: "Cloud Sync",
      desc: "Access data anywhere, anytime.",
      icon: <FiCloud />,
    },
    {
      title: "High Performance",
      desc: "Fast and optimized interactions.",
      icon: <FiZap />,
    },
    {
      title: "Easy to Use",
      desc: "Simple UI built for everyone.",
      icon: <FiCheckCircle />,
    },
  ];

  return (
    <section className="w-[95%] md:w-8/10 mx-auto">
      <h2 className="text-2xl font-bold text-[#7c3aed] mb-8 text-center">
        Key Features
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-base-300 rounded-xl p-6 shadow-lg 
                       transition-all duration-300 hover:-translate-y-1
                       hover:shadow-2xl group hover-glow"
          >
            <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-[#7c3aed] opacity-70" />

            <div className="text-[#7c3aed] text-3xl mb-4 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>

            <h3 className="text-lg font-semibold text-base-content mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-base-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
