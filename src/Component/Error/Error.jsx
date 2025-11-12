import React from "react";
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
        className="py-2 rounded-md cursor-pointer font-bold text-gray-200 my-button mt-2 transition duration-200  px-20"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default Error;
