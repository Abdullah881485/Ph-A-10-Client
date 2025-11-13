import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { IoTrendingUpSharp } from "react-icons/io5";
import { IoMdTrendingDown } from "react-icons/io";
import Loader from "../../Component/Loader/Loader";
import { BiBarChart } from "react-icons/bi";

import useAxios from "../../Component/Hook/useAxios";

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
  console.log(income, expense, balance);
  return (
    <div>
      <title>FinEase | Home</title>
      <div className=" my-0 md:my-5  text-white space-y-5">
        <div className="flex flex-col lg:flex-row justify-between w-full md:w-8/10 mx-auto items-center bg-[#0b1422] p-6 md:p-8 rounded-none md:rounded-xl shadow-lg gap-4">
          <div className="text-center lg:text-left space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#7c3aed]">
              Plan better. Spend smarter. Save more.
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              FinEase helps you track income, expenses and reach savings goals —
              start maintaining financial wellbeing today.
            </p>
          </div>
          <Link
            to="/addTransaction"
            className="my-button text-white rounded-md font-bold cursor-pointer py-1.5 px-7  sm:w-auto text-center md:self-auto"
          >
            Add Transaction
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-[95%] md:w-8/10 mx-auto">
          <div className="bg-[#0b1422] hover-glow rounded-xl p-6 shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-400">
                Total Balance
              </h2>
              <p
                className={`text-xl md:text-2xl font-bold mt-1 ${
                  balance > 0
                    ? "text-green-500"
                    : balance < 0
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                $ {balance}
              </p>
            </div>
            <p
              className={` ${
                balance > 0
                  ? "text-green-500"
                  : balance < 0
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
            >
              <BiBarChart size={50} />
            </p>
          </div>

          <div className="bg-[#0b1422] hover-glow rounded-xl p-6 shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-400">
                Total Income
              </h2>
              <p className="text-xl md:text-2xl font-bold text-green-400 mt-1">{`$ ${income}`}</p>
            </div>
            <IoTrendingUpSharp className="text-green-500 " size={50} />
          </div>

          <div className="bg-[#0b1422] hover-glow rounded-xl p-6 shadow-lg flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-400">
                Total Expense
              </h2>
              <p className=" text-xl md:text-2xl font-bold text-red-500 mt-1">{`$ ${expense}`}</p>
            </div>
            <IoMdTrendingDown className="text-red-500 " size={50} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-[95%] md:w-8/10 mx-auto mb-5 md:mb-0">
          <div className=" bg-[#0b1422] p-5 sm:p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-[#7c3aed]">
              Budgeting Tips
            </h2>
            <ul className="space-y-3 text-sm sm:text-base text-gray-300 leading-relaxed">
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

          <div className=" bg-[#0b1422] p-5 sm:p-6 rounded-xl shadow-lg flex flex-col justify-start">
            <h2 className="text-xl font-bold mb-4 text-[#7c3aed]">
              Why Financial Planning Matters
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
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
      </div>
    </div>
  );
};

export default Home;
