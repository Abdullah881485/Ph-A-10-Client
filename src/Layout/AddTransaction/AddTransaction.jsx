import React, { use, useState } from "react";

import { AuthContext } from "../../Provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { format } from "date-fns";

const AddTransaction = () => {
  const { user } = use(AuthContext);
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
  const handleAddTransaction = (e) => {
    e.preventDefault();

    const form = e.target;
    const type = form.type.value;
    const category = form.category.value;
    const amount = form.amount.value;
    const description = form.description.value;
    const date = form.date.value;
    const email = form.email.value;
    const name = form.name.value;

    const newTransaction = {
      type,
      category,
      amount,
      description,
      date,
      email,
      name,
    };
    axios
      .post("http://localhost:5000/myTransaction", newTransaction)
      .then((data) => {
        console.log(data.data);
        if (data.data) {
          Swal.fire({
            title: "",
            text: "Your Transaction added successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          e.target.reset();
        }
      });

    // console.log({ type, category, amount, description, date, email, name });
  };
  return (
    <div className="w-5/10 mx-auto p-6  rounded-2xl shadow bg-[#0b1422] my-10 text-gray-200">
      <h1 className="text-2xl font-bold mb-4">Add Transaction</h1>
      <form onSubmit={handleAddTransaction}>
        <div className="flex items-center gap-6 ">
          <div className="flex flex-col w-full gap-2 mb-4">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              required
              id="type"
              defaultValue="Income"
              onChange={handleType}
              className="input border p-2 rounded  bg-[#0b1422] text-white"
            >
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>

          <div className="flex flex-col w-full gap-2 mb-4">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              required
              id="category"
              defaultValue="Salary"
              className="input border p-2 rounded bg-[#0b1422] text-white"
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
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col w-full gap-2 mb-4">
            <label htmlFor="amount">Amount</label>
            <input
              name="amount"
              id="amount"
              type="number"
              className="input border p-2 rounded  bg-[#0b1422] text-white"
              required
              min="1"
              max="1000000000000000000000000000"
            />
          </div>
          <div className="flex flex-col w-full gap-2 mb-4">
            <label htmlFor="date">Date</label>
            <input
              name="date"
              type="date"
              id="date"
              className="input border p-2 rounded  bg-[#0b1422] text-white"
              required
              min="2025-01-01"
              max="2026-12-31"
              defaultValue={format(new Date(), "yyyy-MM-dd")}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className="textarea border p-2 rounded w-full bg-[#0b1422] text-white"
            required
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="user">User Email</label>
          <input
            defaultValue={user.email}
            name="email"
            readOnly
            type="email"
            className="input w-full bg-[#0b1422] text-white"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="user">User Name</label>
          <input
            defaultValue={user.displayName}
            name="name"
            readOnly
            type="text"
            className="input w-full bg-[#0b1422] text-white"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="reset"
            className="btn btn-outline mt-2 transition duration-200 self-start px-20"
          >
            Reset
          </button>
          <button
            type="submit"
            className="modal-submit mt-2 transition duration-200 self-start btn px-12 hover:opacity-80"
          >
            Add Trsansaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
