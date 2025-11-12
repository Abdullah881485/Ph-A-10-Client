import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const TransactionDetails = () => {
  const transaction = useLoaderData();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/myTransaction/${transaction.category}?email=${transaction.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategoryData(data);
      });
  }, [transaction]);
  //   console.log(transaction);

  return (
    <div className=" flex items-center justify-center bg-base-200 px-4 py-30 text-gray-200">
      <div className=" bg-[#0b1422] shadow-2xl rounded-2xl p-8 w-full max-w-md transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-center mb-6 title-font">
          Transaction Details
        </h1>

        <div className="space-y-4  dark:text-gray-200">
          <div className="flex justify-between border-b border-gray-300  pb-2">
            <span className="font-semibold">Type:</span>
            <span className="text-indigo-500 font-medium">
              {transaction.type}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-300  pb-2">
            <span className="font-semibold">Category:</span>
            <span>{transaction.category}</span>
          </div>
          <div className="flex justify-between border-b border-gray-300  pb-2">
            <span className="font-semibold">Amount:</span>
            <span className="text-green-500 font-semibold">
              ${transaction.amount}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-300  pb-2">
            <span className="font-semibold">Date:</span>
            <span>{transaction.date}</span>
          </div>
          <div className="flex justify-between border-b border-gray-300  pb-2">
            <span className="font-semibold">Description:</span>
            <span>{transaction.description}</span>
          </div>
          <div className="flex justify-between border-b border-gray-300  pb-2">
            <span className="font-semibold">Total in Category:</span>
            <span className="text-green-400 font-semibold">
              ${categoryData.reduce((sum, t) => sum + Number(t.amount), 0)}
            </span>
          </div>
        </div>
        <div>
          <Link
            className=" basic-btn my-button text-center rounded-sm border border-gray-800 mt-4 transition duration-200 self-start "
            to="/myTransaction"
          >
            <p className="flex items-center gap-2 ">
              <IoArrowBackCircle /> Back
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
