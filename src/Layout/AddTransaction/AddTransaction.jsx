import React, { use, useState } from "react";

import { AuthContext } from "../../Provider/AuthContext";

import Swal from "sweetalert2";
import { format } from "date-fns";
import Loader from "../../Component/Loader/Loader";
import useAxios from "../../Component/Hook/useAxios";

const AddTransaction = () => {
  const axiosInstance = useAxios();
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
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
    axiosInstance
      .post("/myTransaction", newTransaction)
      .then((data) => {
        // console.log(data.data);
        if (data.data) {
          Swal.fire({
            title: "",
            text: "Your Transaction added successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          setLoading(false);
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error("Error adding transaction:", error);
        setLoading(false);
      });

    // console.log({ type, category, amount, description, date, email, name });
  };
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="w-[95%] md:w-5/10 mx-auto p-6  rounded-2xl shadow bg-[#0b1422] my-10 text-gray-200">
      <title>FinEase | Add Transaction</title>
      <h1 className="text-2xl font-bold mb-4 text-[#7c3aed]">
        Add Transaction
      </h1>
      <form onSubmit={handleAddTransaction}>
        <div className="flex items-center gap-6 ">
          <div className="flex flex-col w-full gap-2 mb-4">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              required
              id="type"
              defaultValue="Pick a type"
              onChange={handleType}
              className="select input border p-2 rounded  bg-[#0b1422] text-white"
            >
              <option disabled={true}>Pick a type</option>
              <option>Income</option>
              <option>Expense</option>
            </select>
          </div>

          <div className="flex flex-col w-full gap-2 mb-4">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              required
              defaultValue="Pick a category"
              id="category"
              className="input select border p-2 rounded bg-[#0b1422] text-white"
            >
              <option disabled={true}>Pick a category</option>
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
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
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
              className="input border p-2 rounded  bg-[#0b1422] dark:text-white"
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

        <div className="flex items-center justify-center md:justify-between gap-5 mt-2">
          <button
            type="reset"
            className=" rounded-md text-xs md:text-sm font-bold cursor-pointer py-2.5 md:py-1.5 px-1 md:px-12 hover-glow  text-[#7c3aed]  border border-gray-700 w-full sm:w-auto"
          >
            Reset
          </button>
          <button
            type="submit"
            className="my-button text-xs md:text-sm text-white rounded-md font-bold cursor-pointer py-2.5 md:py-1.5 px-1 md:px-7 transition-all duration-200 w-full sm:w-auto"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTransaction;
