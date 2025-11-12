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

        console.log(result.user);
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

    console.log({ name, email, photo, password });
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
        console.log(result);
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className="w-4/10 mx-auto text-gray-200 ">
      <div className="p-6  rounded-2xl shadow bg-[#0b1422] my-30">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Create An Account
        </h1>
        <form onSubmit={handleCreateUser}>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="user"> Full Name</label>
            <input
              required
              name="name"
              type="text"
              className="input w-full bg-transparent"
            />
          </div>
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
            <label htmlFor="user"> Photo URL</label>
            <input
              required
              name="photo"
              type="text"
              className="input w-full bg-transparent"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="user">Password (Use a strong password)</label>
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
            Register
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="basic-btn bg-black text-white font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center w-full mt-4  gap-2"
        >
          <FcGoogle />
          Continue with Google
        </button>
        <p className="mt-4">
          Already have an account ?{" "}
          <Link className="text-blue-400" to="/login">
            Please,Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
