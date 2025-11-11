import { format } from "date-fns";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

const Transaction = ({ card }) => {
  const navigate = useNavigate();
  const [type, setType] = useState("");
  const income = ["Salary", "Business", "Investment", "Other"];
  const expense = [
    "Home",
    "Food",
    "Transportation",
    "Personal",
    "Education",
    "Technology",
    "Entertainment",
    "Family",
    "Other",
  ];
  const handleType = (e) => {
    setType(e.target.value);
  };
  const updateModalRef = useRef(null);
  const handleUpdateTransaction = () => {
    updateModalRef.current.close();
    navigate(`/transactionDetails/${card._id}`);
  };
  return (
    <div className="bg-[#0b1422] text-white rounded-2xl border border-gray-800 shadow-md hover:shadow-xl  transition-all duration-300 p-5 flex flex-col justify-between">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold tracking-wide">{card.type}</h2>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-600/20 text-green-400 border border-green-600/30">
          {card.category}
        </span>
      </div>

      <div className="space-y-1 text-sm">
        <p className="flex justify-between">
          <span className="text-gray-400">Amount:</span>
          <span className="text-green-400 font-semibold">${card.amount}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Date:</span>
          <span className="text-gray-300">{card.date}</span>
        </p>
      </div>

      <div className="flex gap-2 mt-5">
        <button
          onClick={() => updateModalRef.current.showModal()}
          className="flex-1 btn btn-sm bg-linear-to-r from-cyan-400 to-indigo-600 text-white font-semibold border-none hover:opacity-90"
        >
          Update
        </button>

        <dialog
          ref={updateModalRef}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <form method="dialog" onSubmit={handleUpdateTransaction}>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="type">Type</label>
                <select
                  name="type"
                  id="type"
                  defaultValue="Income"
                  onChange={handleType}
                  className="input border p-2 rounded w-full  bg-[#0b1422] text-white"
                >
                  <option>Income</option>
                  <option>Expense</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  defaultValue="Salary"
                  className="input border p-2 rounded w-full bg-[#0b1422] text-white"
                >
                  {type === "Expense"
                    ? expense.map((cat, index) => (
                        <option key={index}>{cat}</option>
                      ))
                    : income.map((cat, index) => (
                        <option key={index}>{cat}</option>
                      ))}
                </select>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="amount">Amount</label>
                <input
                  name="amount"
                  id="amount"
                  type="number"
                  className="input border p-2 rounded w-full bg-[#0b1422] text-white"
                  min="1"
                  max="1000000000000000000000000000"
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  id="description"
                  className="textarea border p-2 rounded w-full bg-[#0b1422] text-white"
                />
              </div>

              <div className="flex flex-col gap-2 mb-4">
                <label htmlFor="date">Date</label>
                <input
                  name="date"
                  type="date"
                  id="date"
                  className="input border p-2 rounded w-full bg-[#0b1422] text-white"
                  min="2025-01-01"
                  max="2026-12-31"
                  defaultValue={format(new Date(), "yyyy-MM-dd")}
                />
              </div>

              <button
                type="submit"
                className="my-button mt-2 transition duration-200 self-start w-full"
              >
                Update
              </button>
            </form>
          </div>
        </dialog>
        <button className="flex-1 btn btn-sm bg-red-600 text-white font-semibold border-none hover:bg-red-700">
          Delete
        </button>
        <Link
          to={`/transactionDetails/${card._id}`}
          className="flex-1 btn btn-sm bg-gray-700 text-white font-semibold border-none hover:bg-gray-600"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Transaction;
