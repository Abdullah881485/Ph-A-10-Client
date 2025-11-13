import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const { createUser, signInWithGoogle, setLoading, setUser, updateUser } =
    use(AuthContext);
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      Swal.fire({
        title: "Error!",
        text: "Password need to be atleast 6 digit or longer",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Must have an Uppercase letter in the password",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Must have an lowercase letter in the password",
        icon: "error",
        confirmButtonText: "Close",
      });
      return;
    } else {
      ("");
    }
    setLoading(true);
    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
        Swal.fire({
          title: "",
          text: "Account Created Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });

        // console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "You Already Have an Account",
          icon: "error",
          confirmButtonText: "Close",
        });
      })
      .finally(() => setLoading(false));

    // console.log({ name, email, photo, password });
  };
  const handleGoogleSignIn = () => {
    setLoading(true);
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "",
          text: "Account Created Successfully",
          icon: "success",
          confirmButtonText: "Close",
        });
        const user = result.user;
        // console.log(result);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-[90%] md:w-4/5 lg:w-3/5 xl:3/6 mx-auto text-gray-200 ">
      <title>FinEase | Register</title>
      <div className="rounded-2xl shadow bg-[#0b1422] my-20 flex flex-col md:flex-row items-stretch overflow-hidden">
        <div className="hidden md:block md:w-1/2">
          <img
            className="h-full w-full object-cover"
            src="https://i.ibb.co.com/WWcnkFyy/market-growth-blueprint-3d-coin-background-blue-finance-graph-investment-bar-763042-6385.jpg"
            alt=""
          />
        </div>
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-10 text-center text-[#7c3aed]">
            Create An Account
          </h1>
          <form onSubmit={handleCreateUser}>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user"> Full Name</label>
              <input
                required
                name="name"
                type="text"
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#7c3aed] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#7c3aed]"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user"> Email</label>
              <input
                required
                name="email"
                type="email"
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#7c3aed] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#7c3aed]"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user"> Photo URL</label>
              <input
                required
                name="photo"
                type="text"
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#7c3aed] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#7c3aed]"
              />
            </div>
            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user">Password (Use a strong password)</label>
              <input
                required
                name="password"
                type="password"
                className="input w-full text-lg rounded-none bg-transparent border-transparent border-b border-b-[#7c3aed] focus:outline-none focus:ring-0 focus:border-b-2 focus:border-b-[#7c3aed]"
              />
            </div>

            <button
              type="submit"
              className="my-button text-white rounded-md font-bold cursor-pointer py-1.5 px-7 mt-2 transition duration-300 self-start w-full"
            >
              Register
            </button>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="flex hover-glow cursor-pointer items-center justify-center border border-gray-600 rounded-lg py-2 mt-4 w-full gap-2 text-white hover:bg-gray-900 transition duration-300"
          >
            <FcGoogle />
            Continue with Google
          </button>
          <p className="mt-4">
            Already have an account ?{" "}
            <Link className="text-[#7c3aed] hover:underline" to="/login">
              Please,Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
