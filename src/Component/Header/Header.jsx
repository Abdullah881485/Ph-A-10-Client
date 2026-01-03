import React, { use, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { RiAccountCircle2Fill } from "react-icons/ri";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "night"
  );

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = (checked) => {
    setTheme(checked ? "winter" : "night");
  };

  const links = (
    <>
      <li className="hover:text-[#7c3aed]">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-[#7c3aed]">
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li className="hover:text-[#7c3aed]">
        <NavLink to="/contact">Contact</NavLink>
      </li>

      {user && (
        <div className="flex flex-col lg:flex-row items-start lg:items-center  lg:gap-5">
          <li className="hover:text-[#7c3aed]">
            <NavLink to="/addTransaction">Add Transaction</NavLink>
          </li>
          <li className="hover:text-[#7c3aed]">
            <NavLink to="/dashboard-layout">Dashboard</NavLink>
          </li>
        </div>
      )}
    </>
  );

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You'll be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged out!",
              text: "You have successfully logged out.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
            navigate("/login");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div className=" sticky top-0 z-50 bg-base-100 shadow-bottom">
      <div className="navbar w-full md:w-8/10 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5s w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-bold"
            >
              {links}
            </ul>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="logo-font text-2xl md:text-4xl text-[#7c3aed]">
              FinEase
            </h1>
            <p className="hidden md:block">Personal Finance Manager</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-4 text-[14px] menu-horizontal px-1 gap-1.5 font-bold dark:text-base-400">
            {links}
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="flex items-center gap-2 md:gap-5">
            {user ? (
              <div className="flex items-center gap-5">
                <label className="toggle text-base-content w-10">
                  <input
                    onChange={(e) => toggleTheme(e.target.checked)}
                    type="checkbox"
                    value="light"
                    className="theme-controller"
                  />
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
                </label>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="m-1 cursor-pointer"
                  >
                    <img
                      className=" md:w-10 w-8 md:h-10 h-8 object-cover rounded-full"
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co/HT6sMcVr/2015-10-06-FB-person.webp"
                      }
                      alt=" not found"
                    />
                  </div>
                  <div
                    tabIndex={0}
                    className="dropdown-content card card-sm bg-base-300 z-1 shadow-md  p-2 w-70"
                  >
                    <div className="card-body  text-base-400 ">
                      <h1 className="text-[15px] font-bold">
                        {user.displayName ? user.displayName : "Anonymous"}
                      </h1>
                      <p className="text-xs font-semibold">{user.email}</p>
                      <div className="pt-2  border-t-2 border-gray-800">
                        <Link
                          to="/dashboard-layout/myProfile"
                          className=" text-base-content rounded-md font-bold cursor-pointer py-1.5 hover-glow btn-sm btn-ghost text-[14px] btn justify-start hover:bg-gray-800 hover:text-base-400 w-full mt-2 "
                        >
                          <RiAccountCircle2Fill size={20} />
                          Profile
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="my-button text-base-content rounded-md font-bold cursor-pointer py-1.5 px-7 btn-sm  w-full text-center mt-2 "
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 md:gap-5">
                <Link
                  to="/login"
                  className="text-base-content text-xs md:text-sm rounded-md font-bold cursor-pointer py-1.5 px-1.5 md:px-7 border hover-glow border-gray-500  "
                >
                  <p className="text-[#7c3aed]">Login</p>
                </Link>
                <Link
                  to="/register"
                  className="my-button text-xs md:text-sm text-base-content rounded-md font-semibold cursor-pointer py-1.5 px-1 md:px-7 "
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
