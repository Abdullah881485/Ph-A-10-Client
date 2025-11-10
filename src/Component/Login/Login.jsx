import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="w-4/10 mx-auto ">
      <div className="p-6  rounded-2xl shadow bg-[#0b1422] my-40">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Login to FinEase
        </h1>
        <form>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="user"> Email</label>
            <input type="email" className="input w-full bg-transparent" />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="user">Password </label>
            <input type="password" className="input w-full bg-transparent" />
          </div>

          <button
            type="submit"
            className="my-button mt-2 transition duration-200 self-start w-full"
          >
            Login
          </button>
          <button className="btn rounded-md bg-white text-black font-bold border-[#e5e5e5] w-full mt-4  gap-2">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Continue with Google
          </button>

          <p className="mt-4">
            Don't have an account ?{" "}
            <Link className="text-blue-400" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
