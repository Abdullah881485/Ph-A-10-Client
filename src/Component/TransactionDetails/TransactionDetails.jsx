import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const TransactionDetails = () => {
  const transaction = useLoaderData();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/myTransaction/${transaction.category}?email=${transaction.email}`
      )

      .then((data) => {
        console.log(data.data);
        setCategoryData(data.data);
      });
  }, [transaction]);
  //   console.log(transaction);

  return (
    <div className=" flex items-center justify-center bg-base-200 py-30 text-gray-200">
      <div className=" bg-[#0b1422] shadow-2xl rounded-2xl p-8 w-9/10 md:w-6/10 lg:w-5/10 transition-all duration-300">
        <h1 className="text-3xl text-[#7c3aed] font-extrabold text-center mb-6 title-font">
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
            className=" my-button mt-3 text-sm text-white rounded-md font-bold cursor-pointer py-2.5 md:py-1.5 px-5 md:px-7 transition-all duration-200 "
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
