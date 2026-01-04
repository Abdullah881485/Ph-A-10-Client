import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const DEMO_USER = {
    email: "asdf@asdf8.com",
    password: "Asdf123",
  };
  const { signInUser, signInWithGoogle, setUser } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(result.user);
        Swal.fire({
          title: "",
          background: "#0b1422",
          color: "white",
          text: "You logged in Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        setUser(user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Warning",
          background: "#0b1422",
          color: "white",
          text: "Account Not Found, Please Register",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const _user = result.user;
        Swal.fire({
          title: "",
          background: "#0b1422",
          color: "white",
          text: "You logged in Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        navigate(`${location.state ? location.state : "/"}`);
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-[90%] md:w-4/5 lg:w-3/5 xl:3/6 mx-auto text-base-400">
      <title>FinEase | Login</title>
      <div className="rounded-2xl shadow-lg bg-base-300 my-20 flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="hidden md:block md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co.com/WWcnkFyy/market-growth-blueprint-3d-coin-background-blue-finance-graph-investment-bar-763042-6385.jpg"
            alt="Login illustration"
          />
        </div>

        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#7c3aed]">
            Login to FinEase
          </h1>
          <button
            type="button"
            onClick={() => {
              setEmail(DEMO_USER.email);
              setPassword(DEMO_USER.password);
            }}
            className="
    w-full mb-6
    flex items-center justify-center gap-2
    border border-dashed border-[#7c3aed]
    text-[#7c3aed] font-semibold text-sm
    py-2.5 rounded-lg
    hover-glow
    cursor-pointer
    transition
  "
          >
            🚀 Try Demo Account
          </button>
          <form onSubmit={handleSignIn}>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user">Email</label>
              <input
                required
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#7c3aed] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#7c3aed]  "
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user">Password</label>
              <input
                required
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#7c3aed] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#7c3aed]"
              />
            </div>

            <button
              type="submit"
              className="my-button text-base-content rounded-md font-bold cursor-pointer py-1.5 px-7 mt-2 transition duration-300 w-full"
            >
              Login
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="flex hover-glow cursor-pointer items-center justify-center border border-gray-600 rounded-lg py-2 mt-4 w-full gap-2 text-base-content hover:bg-gray-900 transition duration-300"
          >
            <FcGoogle />
            <p className="">Continue with Google</p>
          </button>

          <p className="mt-4 text-center">
            Don’t have an account?{" "}
            <Link className="text-[#7c3aed] hover:underline" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
