import React, { useState, useEffect } from "react";
import { format } from "date-fns";

const AddTransaction = () => {
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(format(new Date(), "yyyy-MM-dd"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-5/10 mx-auto p-6  rounded-2xl shadow bg-[#0b1422] my-10">
      <h1 className="text-2xl font-bold mb-4">Add Transaction</h1>
      <form>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="type">Type</label>
          <select
            required
            id="type"
            defaultValue="Income"
            className="input border p-2 rounded w-full  bg-transparent"
          >
            <option>Income</option>
            <option>Expense</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="category">Category</label>
          <select
            required
            id="category"
            defaultValue="Salary"
            className="input border p-2 rounded w-full bg-transparent"
          >
            <option>Salary</option>
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Home</option>
            <option>Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            className="input border p-2 rounded w-full bg-transparent"
            required
            min="1"
            max="1000000000000000000000000000"
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            className="textarea border p-2 rounded w-full bg-transparent"
            required
          />
        </div>

        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            className="input border p-2 rounded w-full bg-transparent"
            required
            min="2025-01-01"
            max="2026-12-31"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="user">User Email</label>
          <input
            readOnly
            type="email"
            className="input w-full bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label htmlFor="user">User Name</label>
          <input readOnly type="text" className="input w-full bg-transparent" />
        </div>

        <button
          type="submit"
          className="my-button mt-2 transition duration-200 self-start w-full"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
