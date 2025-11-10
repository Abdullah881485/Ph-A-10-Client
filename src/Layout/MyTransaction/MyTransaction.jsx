import React from "react";

const MyTransaction = () => {
  return (
    <div className="card card-bordered rounded-2xl shadow bg-[#0b1422] w-fit text-white">
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">Income</h2>
        <p className="font-bold">Category : Salary</p>
        <p className="font-bold">
          Amount : <span className="text-green-500">50000 $</span>
        </p>
        <p className="font-bold">Date : 10/12/2025</p>
        <div className="card-actions justify-end mt-3">
          <button className="btn bg-linear-to-r from-cyan-400 to-indigo-600 text-white font-semibold border-none hover:opacity-90">
            Update
          </button>
          <button className="btn bg-red-600 text-white font-semibold border-none hover:bg-red-700">
            Delete
          </button>
          <button className="btn bg-gray-700 text-white font-semibold border-none hover:bg-gray-600">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTransaction;
