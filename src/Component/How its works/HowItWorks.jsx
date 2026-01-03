const HowItWorks = () => {
  return (
    <section className="w-[95%] md:w-8/10 mx-auto bg-base-300 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-[#7c3aed] mb-6 text-center">
        How FinEase Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-center">
        {[
          {
            step: "1",
            title: "Add Transactions",
            desc: "Log income and expenses easily.",
          },
          {
            step: "2",
            title: "Categorize",
            desc: "Organize spending by category.",
          },
          {
            step: "3",
            title: "Analyze",
            desc: "Visualize spending with insights.",
          },
          {
            step: "4",
            title: "Improve",
            desc: "Build better financial habits.",
          },
        ].map((item) => (
          <div
            key={item.step}
            className="bg-base-200 p-5 rounded-xl hover-glow"
          >
            <span className="text-3xl font-bold text-[#7c3aed]">
              {item.step}
            </span>
            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="text-sm text-base-500 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default HowItWorks;
