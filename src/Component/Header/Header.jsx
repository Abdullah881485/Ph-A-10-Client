import React from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/addTransaction">Add Transaction</NavLink>
      </li>
      <li>
        <NavLink to="/myTransaction">My Transaction</NavLink>
      </li>
      <li>
        <NavLink to="/reports">Reports</NavLink>
      </li>
      <li>
        <NavLink to="/myProfile">My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar w-9/10 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold text-gray-400"
            >
              {links}
            </ul>
          </div>

          <div className="flex flex-col  gap-1">
            <h1 className="logo-font text-4xl">FinEase</h1>
            <p>Personal Finance Manager</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1.5 font-bold text-gray-400">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center gap-5">
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="light"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>
            <Link
              to="/login"
              className="btn border-2 border-gray-500  hover:scale-105"
            >
              Login
            </Link>
            <Link to="/register" className="my-button hover:scale-105">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
