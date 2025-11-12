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
    <div className="w-4/10 mx-auto text-gray-200 ">
      <div className="p-6  rounded-2xl shadow bg-[#0b1422] my-20">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Login to FinEase
        </h1>
        <form onSubmit={handleSignIn}>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="user"> Email</label>
            <input
              required
              name="email"
              type="email"
              className="input w-full bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="user">Password </label>
            <input
              required
              name="password"
              type="password"
              className="input w-full bg-transparent"
            />
          </div>

          <button
            type="submit"
            className="my-button basic-btn mt-2 transition duration-300 self-start w-full"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="basic-btn flex items-center justify-center bg-black  font-bold hover:scale-105 transition-all duration-300 w-full mt-4  gap-2"
        >
          <FcGoogle />
          Continue with Google
        </button>

        <p className="mt-4">
          Don't have an account ?{" "}
          <Link className="text-blue-400" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
