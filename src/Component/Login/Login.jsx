import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

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
    <div className="w-4/10 mx-auto ">
      <div className="p-6  rounded-2xl shadow bg-[#0b1422] my-40">
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
            className="my-button mt-2 transition duration-200 self-start w-full"
          >
            Login
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn rounded-md bg-white text-black font-bold border-[#e5e5e5] w-full mt-4  gap-2"
        >
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
      </div>
    </div>
  );
};

export default Login;
