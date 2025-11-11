import axios from "axios";
import { format } from "date-fns";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Transaction = ({ card, setMyTransaction, myTransaction }) => {
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
  const handleUpdateTransaction = (e) => {
    e.preventDefault();
    const form = e.target;
    const type = form.type.value;
    const category = form.category.value;
    const amount = form.amount.value;
    const description = form.description.value;
    const date = form.date.value;
    console.log(type, category, amount, description, date);
    const updateTransaction = {
      type,
      category,
      amount,
      description,
      date,
    };
    axios
      .patch(
        `http://localhost:5000/updateTransaction/${card._id}`,
        updateTransaction
      )
      .then((data) => {
        console.log(data.data);
        Swal.fire({
          title: "",
          text: "Your transaction updated Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        navigate(`/transactionDetails/${card._id}`, { replace: true });
      });

    updateModalRef.current.close();
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/myTransaction/${id}`)
          .then((data) => {
            // console.log(data);
            if (data.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your transaction has been deleted.",
                icon: "success",
              });

              const remaining = myTransaction.filter((card) => card._id !== id);
              setMyTransaction(remaining);
            }
          });
      }
    });
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

      <div className="flex gap-1.5 mt-5">
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
                  defaultValue={card.type}
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
                  defaultValue={card.category}
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
                  defaultValue={card.amount}
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
                  defaultValue={card.description}
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
                  defaultValue={format(new Date(card.date), "yyyy-MM-dd")}
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
        <button
          onClick={() => handleDelete(card._id)}
          className="flex-1 btn btn-sm bg-red-600 text-white font-semibold border-none hover:bg-red-700"
        >
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
