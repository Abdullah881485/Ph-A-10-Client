import { Link } from "react-router";

const About = () => {
  return (
    <div className="text-base-content space-y-8 my-5 w-[95%] md:w-8/10 mx-auto">
      <title>FinEase | About</title>

      <div className="bg-base-300 p-8 rounded-none md:rounded-xl shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#7c3aed] mb-3">
          About FinEase
        </h1>
        <p className="text-base-500 max-w-2xl mx-auto">
          FinEase is a modern personal finance platform built to help you track,
          analyze, and improve your financial life with confidence.
        </p>
      </div>

      <div className="bg-base-300 p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-[#7c3aed] mb-3">Who We Are</h2>
        <p className="text-base-400 leading-relaxed">
          Managing money shouldn’t feel complicated. FinEase was created to
          simplify expense tracking, income management, and budgeting using a
          clean interface and meaningful insights. Whether you are a student,
          professional, or business owner — FinEase adapts to your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            title: "Smart Tracking",
            desc: "Track income and expenses with clarity and accuracy.",
          },
          {
            title: "Better Decisions",
            desc: "Visualize your finances to make data-driven choices.",
          },
          {
            title: "Long-Term Growth",
            desc: "Build habits that support financial stability and growth.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-base-300 hover-glow p-6 rounded-xl shadow-lg"
          >
            <h3 className="font-semibold text-[#7c3aed] mb-2">{item.title}</h3>
            <p className="text-base-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-base-300 p-8 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-3 text-[#7c3aed]">
          Take Control of Your Finances
        </h2>
        <p className="text-base-500 mb-5">
          Start managing your money smarter with FinEase today.
        </p>
        <Link
          to="/register"
          className="my-button text-base-content rounded-md font-bold py-2 px-8 inline-block"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default About;
