import React from "react";
import Transaction from "./Transaction";
import { useLoaderData } from "react-router";

const MyTransaction = () => {
  const transactions = useLoaderData();
  // console.log(transactions);

  return (
    <div className="w-8/10 mx-auto mt-10 min-h-screen">
      <h1 className="text-3xl title-font my-5">My Transaction</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 ">
        {transactions.map((card) => (
          <Transaction key={card._id} card={card}></Transaction>
        ))}
      </div>
    </div>
  );
};

export default MyTransaction;
