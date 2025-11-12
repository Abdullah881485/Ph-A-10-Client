import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";

const Home = () => {
  const { user } = use(AuthContext);
  const [money, setMoney] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myTransaction?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMoney(data);
        });
    }
  }, [user]);
  const income = money
    .filter((rep) => rep.type === "Income")
    .reduce((sum, rep) => sum + Number(rep.amount), 0);
  const expense = money
    .filter((rep) => rep.type === "Expense")
    .reduce((sum, rep) => sum + Number(rep.amount), 0);

  const balance = income - expense;
  console.log(income, expense, balance);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-10 my-5  text-white w-8/10 mx-auto">
      <div className="md:col-span-3 flex justify-between items-start  bg-[#0b1422]  p-5 rounded-xl shadow-lg">
        <div>
          <h1 className="text-3xl font-bold">
            Plan better. Spend smarter. Save more.
          </h1>
          <p className="text-gray-400 mt-1">
            FinEase helps you track income, expenses and reach savings goals —
            start maintaining financial wellbeing today.
          </p>
        </div>
        <Link
          to="/addTransaction"
          className="my-button transition duration-200 hover:scale-105"
        >
          Add Transaction
        </Link>
      </div>

      <div className="bg-[#0b1422]  p-5 rounded-xl shadow-lg">
        <h2 className="text-sm font-semibold text-gray-400">Total Balance</h2>
        <p className="text-2xl font-bold mt-1">${balance > 0 ? balance : 0}</p>
      </div>

      <div className="bg-[#0b1422]  p-5 rounded-xl shadow-lg">
        <h2 className="text-sm font-semibold text-gray-400">Total Income</h2>
        <p className="text-2xl font-bold text-green-400 mt-1">${income}</p>
      </div>

      <div className="bg-[#0b1422]  p-5 rounded-xl shadow-lg">
        <h2 className="text-sm font-semibold text-gray-400">Total Expense</h2>
        <p className="text-2xl font-bold text-red-400 mt-1">${expense}</p>
      </div>

      <div className="md:col-span-2 bg-[#0b1422]  p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4">Budgeting Tips</h2>
        <ul className="space-y-3 text-base">
          <li>
            <span className="font-semibold">1.</span> Track every transaction —
            small spending adds up quickly.
          </li>
          <li>
            <span className="font-semibold">2.</span> Build an emergency fund
            equal to 1–3 months of expenses.
          </li>
          <li>
            <span className="font-semibold">3.</span> Prioritize high-interest
            debt repayment before discretionary spending.
          </li>
        </ul>
      </div>

      <div className="md:col-span-1 bg-[#0b1422]  p-6 rounded-xl shadow-lg flex flex-col justify-start">
        <h2 className="text-xl font-bold mb-4">
          Why Financial Planning Matters
        </h2>
        <p className="text-base text-gray-300 mb-4">
          A plan helps you make data-driven decisions, protects against shocks
          and helps you reach short and long-term goals.
        </p>
        <Link
          to="/reports"
          className="my-button transition duration-200 hover:scale-105 self-start"
        >
          View Reports
        </Link>
      </div>
    </div>
  );
};

export default Home;
