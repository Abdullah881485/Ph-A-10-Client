import React, { use, useEffect, useState } from "react";
import Transaction from "./Transaction";
import { AuthContext } from "../../Provider/AuthContext";

const MyTransaction = () => {
  const { user } = use(AuthContext);
  const [myTransaction, setMyTransaction] = useState([]);
  // console.log(transactions);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myTransaction?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMyTransaction(data);
        });
    }
  }, [user]);
  console.log(myTransaction);

  return (
    <div className="w-8/10 mx-auto mt-10 min-h-screen">
      <h1 className="text-3xl title-font my-5 text-start">My Transaction</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 ">
        {myTransaction.map((card) => (
          <Transaction
            myTransaction={myTransaction}
            setMyTransaction={setMyTransaction}
            key={card._id}
            card={card}
          ></Transaction>
        ))}
      </div>
    </div>
  );
};

export default MyTransaction;
