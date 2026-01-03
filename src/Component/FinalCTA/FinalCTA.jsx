import { Link } from "react-router";

const FinalCTA = () => {
  return (
    <section className="w-[95%] md:w-8/10 mx-auto bg-linear-to-r from-[#7c3aed] to-[#5b21b6] p-8 rounded-xl text-center text-white shadow-lg mb-5">
      <h2 className="text-2xl font-bold mb-3">
        Start Managing Your Money Today
      </h2>
      <p className="mb-5">Take control of your finances with FinEase.</p>
      <Link
        to="/addTransaction"
        className="bg-white text-[#5b21b6] font-bold px-6 py-2 rounded-md"
      >
        Get Started
      </Link>
    </section>
  );
};
export default FinalCTA;
