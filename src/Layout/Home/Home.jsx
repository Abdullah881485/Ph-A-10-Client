import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { IoTrendingUpSharp } from "react-icons/io5";
import { IoMdTrendingDown } from "react-icons/io";
import Loader from "../../Component/Loader/Loader";
import { BiBarChart } from "react-icons/bi";

import useAxios from "../../Component/Hook/useAxios";
import HowItWorks from "../../Component/How its works/HowItWorks";
import Features from "../../Component/Features/Features";
// import InsightsPreview from "../../Component/InsightsPreview/InsightsPreview";
import WhyDifferent from "../../Component/WhyDifferent/WhyDifferent";
import Testimonials from "../../Component/Testimonials/Testimonials";
import FAQ from "../../Component/FAQ/FAQ";
import FinalCTA from "../../Component/FinalCTA/FinalCTA";
import Counter from "./Counter";

const Home = () => {
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);
  const [money, setMoney] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosInstance
        .get(`/myTransaction?email=${user.email}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        })

        .then((data) => {
          setMoney(data.data);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user, axiosInstance]);
  if (loading) {
    return <Loader></Loader>;
  }
  const income = money
    .filter((rep) => rep.type === "Income")
    .reduce((sum, rep) => sum + Number(rep.amount), 0);
  const expense = money
    .filter((rep) => rep.type === "Expense")
    .reduce((sum, rep) => sum + Number(rep.amount), 0);

  const balance = income - expense;
  // console.log(income, expense, balance);
  return (
    <div>
      <title>FinEase | Home</title>
      <div className=" text-base-content space-y-5">
        <section className="relative min-h-[65vh] flex items-center bg-base-300 rounded-b-xl ">
          <div className="w-[95%] md:w-8/10 mx-auto flex flex-col justify-center items-center text-center gap-6 py-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7c3aed] leading-tight">
              Plan Better.{" "}
              <span className="text-base-content">Spend Smarter.</span> Save
              More.
            </h1>

            <p className="max-w-2xl text-base-500 text-sm sm:text-base md:text-lg leading-relaxed">
              FinEase helps you track income, manage expenses, and build
              healthier financial habits — all in one simple, secure platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                to="/addTransaction"
                className="my-button text-white rounded-md font-bold py-2 px-8 hover:shadow-2xl transition-all text-xs md:text-sm"
              >
                Get Started
              </Link>

              <Link
                to="/about"
                className="border hover-glow font-semibold py-2 px-8 text-base-content text-xs md:text-sm rounded-md  cursor-pointer  md:px-7  hover-glow border-gray-500"
              >
                Explore Features
              </Link>
            </div>

            <div className="absolute bottom-6 flex flex-col items-center text-gray-500 animate-bounce">
              <span className="text-xs mb-1">Scroll</span>
              <div className="w-1 h-6 rounded-full bg-gray-500"></div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] md:w-8/10 mx-auto">
          <div className="bg-base-300 hover-glow rounded-xl p-6 shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-base-500">
                Total Balance
              </h2>
              <p
                className={`text-xl md:text-2xl font-bold mt-1 ${
                  balance > 0
                    ? "text-green-500"
                    : balance < 0
                    ? "text-red-500"
                    : "text-base-500"
                }`}
              >
                <Counter value={balance ? balance : 0} prefix={"$"}></Counter>
                
              </p>
            </div>
            <p
              className={` ${
                balance > 0
                  ? "text-green-500"
                  : balance < 0
                  ? "text-red-500"
                  : "text-base-500"
              }`}
            >
              <BiBarChart size={50} />
            </p>
          </div>

          <div className="bg-base-300 hover-glow rounded-xl p-6 shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-base-500">
                Total Income
              </h2>
              <p className="text-xl md:text-2xl font-bold text-green-400 mt-1">
                <Counter value={income ? income : 0} prefix={"$"}></Counter>
              </p>
            </div>
            <IoTrendingUpSharp className="text-green-500 " size={50} />
          </div>

          <div className="bg-base-300 hover-glow rounded-xl p-6 shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-base-500">
                Total Expense
              </h2>
              <p className=" text-xl md:text-2xl font-bold text-red-500 mt-1">
                <Counter value={expense ? expense : 0} prefix={"$"}></Counter>
              </p>
            </div>
            <IoMdTrendingDown className="text-red-500 " size={50} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[95%] md:w-8/10 mx-auto mb-10">
          <div className=" bg-base-300 p-5 sm:p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#7c3aed]">
              Budgeting Tips
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-base-400 leading-relaxed">
              <li>
                <span className="font-semibold">1.</span> Track every
                transaction — small spending adds up quickly.
              </li>
              <li>
                <span className="font-semibold">2.</span> Build an emergency
                fund equal to 1–3 months of expenses.
              </li>
              <li>
                <span className="font-semibold">3.</span> Prioritize
                high-interest debt repayment before discretionary spending.
              </li>
              <li>
                <span className="font-semibold">4.</span> Set monthly spending
                limits for each category to avoid overspending.
              </li>
              <li>
                <span className="font-semibold">5.</span> Automate your savings
                — treat it like a fixed expense.
              </li>
            </ul>
          </div>

          <div className=" bg-base-300 p-5 sm:p-6 rounded-xl shadow-lg flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-4 text-[#7c3aed]">
              Why Financial Planning Matters
            </h2>
            <p className="text-sm sm:text-base text-base-400 mb-4 leading-relaxed">
              A well-structured financial plan helps you make informed,
              data-driven decisions, stay prepared for unexpected expenses, and
              ensure long-term financial security. It builds discipline, reduces
              stress, and gives you a clear roadmap toward achieving both
              short-term goals — like managing monthly budgets — and long-term
              objectives, such as buying a home or building wealth for
              retirement.
            </p>
            <Link
              to="/reports"
              className="my-button text-white rounded-md font-bold cursor-pointer py-1.5 px-7 self-start hover:shadow-2xl transition-shadow duration-200"
            >
              View Reports
            </Link>
          </div>
        </div>

        <div className="space-y-10">
          <HowItWorks></HowItWorks>
          <Features></Features>
          <WhyDifferent></WhyDifferent>
          <Testimonials></Testimonials>
          <FAQ></FAQ>
          <FinalCTA></FinalCTA>
        </div>
      </div>
    </div>
  );
};

export default Home;
