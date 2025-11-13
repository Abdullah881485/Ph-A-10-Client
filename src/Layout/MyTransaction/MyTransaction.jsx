import React, { use, useEffect, useState } from "react";
import Transaction from "./Transaction";
import { AuthContext } from "../../Provider/AuthContext";
import { Link } from "react-router";
import Loader from "../../Component/Loader/Loader";

import useAxios from "../../Component/Hook/useAxios";

const MyTransaction = () => {
  const axiosInstance = useAxios();
  const { user } = use(AuthContext);
  const [myTransaction, setMyTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(transactions);
  useEffect(() => {
    setLoading(true);
    if (user?.email) {
      axiosInstance
        .get(`/myTransaction?email=${user.email}`, {
          headers: {
            authorization: `Bearer ${user?.accessToken}`,
          },
        })

        .then((data) => {
          // console.log(data);
          setMyTransaction(data.data);
        })
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [user, axiosInstance]);
  // console.log(myTransaction);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className=" w-8/10 md:w-6/10 mx-auto min-h-screen">
      <title>FinEase | My Transaction</title>
      {myTransaction.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-90"
            src="https://i.ibb.co.com/jZ3BQr9x/businessman-sad-for-no-data-in-folder-illustration-download-svg-png-gif-file-formats-empty-business.png"
            alt=""
          />
          <p className="w-70 mb-3 text-center font-semibold text-[17px]">
            You don't have any transactions yet. Create one now!
          </p>
          <Link
            to="/addTransaction"
            className="my-button text-white rounded-md font-bold cursor-pointer py-1.5 px-7"
          >
            Add Transaction
          </Link>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl text-[#7c3aed] title-font my-5 text-start">
            My Transaction
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 ">
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
      )}
    </div>
  );
};

export default MyTransaction;
