import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center w-8/12 mx-auto my-20">
      <img
        src="https://i.ibb.co.com/h1JwRXv9/404-error-message-3702341-3119133.png"
        alt=""
      />
      <Link
        to="/"
        type="button"
        className="py-2 rounded-md cursor-pointer font-bold text-gray-200 my-button mt-2 transition duration-200 px-10  md:px-20"
      >
        <p className="flex items-center gap-2 ">
          <IoArrowBackCircle /> Back To Home
        </p>
      </Link>
    </div>
  );
};

export default Error;
