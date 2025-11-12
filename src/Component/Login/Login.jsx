import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { signInUser, signInWithGoogle, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result.user);
        Swal.fire({
          title: "",
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
          text: "Account Not Found, Please Register",
          icon: "error",
          confirmButtonText: "Close",
        });
      });
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "",
          text: "You logged in Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        navigate(`${location.state ? location.state : "/"}`);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-4/5 md:w-4/5 lg:w-3/5 xl:3/6 mx-auto text-gray-200">
      <div className="rounded-2xl shadow-lg bg-[#0b1422] my-20 flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="hidden md:block md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co.com/qLPVqqyg/360-F-195160069-lv-Zz-Kt3-QJS8-GNXYy-Qp-J55f-FTNHhxo8t-P.jpg"
            alt="Login illustration"
          />
        </div>

        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-6 text-center text-[#7c3aed]">
            Login to FinEase
          </h1>
          <form onSubmit={handleSignIn}>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user">Email</label>
              <input
                required
                name="email"
                type="email"
                className="input w-full bg-transparent border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-[#7c3aed]"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user">Password</label>
              <input
                required
                name="password"
                type="password"
                className="input w-full bg-transparent border border-gray-600 rounded-lg px-3 py-2 focus:outline-none focus:border-[#7c3aed]"
              />
            </div>

            <button
              type="submit"
              className="my-button basic-btn mt-2 transition duration-300 w-full"
            >
              Login
            </button>
          </form>

          <button
            onClick={handleGoogleSignIn}
            className="flex cursor-pointer items-center justify-center border border-gray-600 rounded-lg py-2 mt-4 w-full gap-2 text-white hover:bg-gray-900 transition duration-300"
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
