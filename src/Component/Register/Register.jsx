import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

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
    <div className="w-4/10 mx-auto ">
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
            className="my-button mt-2 transition duration-200 self-start w-full"
          >
            Register
          </button>
        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn rounded-md bg-white font-bold text-black border-[#e5e5e5] w-full mt-4  gap-2"
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
