import React, { use } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import { GrTransaction } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { IoHomeOutline, IoStatsChartSharp } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaHome } from "react-icons/fa";
import Footer from "../../Component/Footer/Footer";
import { AuthContext } from "../../Provider/AuthContext";
import "./Dashboard.css";
import Swal from "sweetalert2";
import { RiAccountCircle2Fill } from "react-icons/ri";

const Dashboard = () => {
  const { user, signOutUser } = use(AuthContext);
  //   console.log(user);

  const navigate = useNavigate();
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      background: "#0b1422",
      color: "white",
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
              background: "#0b1422",
              color: "white",
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
  //   const links = (
  //     <>
  //       <li className="hover:text-[#7c3aed]">
  //         <NavLink to="/">Home</NavLink>
  //       </li>
  //       <li className="hover:text-[#7c3aed]">
  //         <NavLink to="/">Home</NavLink>
  //       </li>
  //     </>
  //   );
  return (
    <div className="w-[95%] md:w-9/10 mx-auto py-5">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <nav className="navbar w-full flex justify-between items-center px-0 lg:px-18 ">
            <div className="flex items-center gap-0 md:gap-5">
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
              <Link
                to="/"
                className="px-2 md:px-4 logo-font text-xl md:text-3xl text-[#7c3aed]"
              >
                FinEase
              </Link>
            </div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="m-1 cursor-pointer">
                <img
                  className=" w-9 h-9 rounded-full object-cover"
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
                      to="/dashboard-layout/reports"
                      className=" text-base-content rounded-md font-bold cursor-pointer py-1.5 hover-glow btn-sm btn-ghost text-[14px] btn justify-start hover:bg-gray-800 hover:text-base-400 w-full mt-2 "
                    >
                      <LuLayoutDashboard size={18} />
                      Dashboard Home
                    </Link>
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
          </nav>

          <div className=" px-0 lg:px-18 w-full">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full py-10 flex-col items-start bg-base-100 border-r border-base-300 is-drawer-close:w-14 is-drawer-open:w-64">
            <ul className="menu w-full grow space-y-3">
              <li className="hover:text-[#7c3aed]">
                <NavLink to="/">
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 cursor-pointer"
                    data-tip="Homepage"
                  >
                    <IoHomeOutline size={18} />
                    <span className="is-drawer-close:hidden">Homepage</span>
                  </button>
                </NavLink>
              </li>
              <li className="hover:text-[#7c3aed]">
                <NavLink to="/dashboard-layout/reports">
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 cursor-pointer"
                    data-tip="Dashboard Home"
                  >
                    <LuLayoutDashboard size={18} />
                    <span className="is-drawer-close:hidden">
                      Dashboard Home
                    </span>
                  </button>
                </NavLink>
              </li>

              <li className="hover:text-[#7c3aed]">
                <NavLink to="/dashboard-layout/myTransaction">
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 cursor-pointer"
                    data-tip="My Transactions"
                  >
                    <GrTransaction size={18} />
                    <span className="is-drawer-close:hidden">
                      My Transaction
                    </span>
                  </button>
                </NavLink>
              </li>
              <li className="hover:text-[#7c3aed]">
                <NavLink to="/dashboard-layout/myProfile">
                  <button
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex items-center gap-3 cursor-pointer"
                    data-tip="My Profile"
                  >
                    <CgProfile size={18} />
                    <span className="is-drawer-close:hidden">My Profile</span>
                  </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
