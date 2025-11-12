import React, { use } from "react";
import { AuthContext } from "../../Provider/AuthContext";

const MyProfile = () => {
  const { user, updateUser, setUser, setLoading } = use(AuthContext);

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    setLoading(true);
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
      })
      .catch((err) => {
        console.log(err);
        setUser(user);
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <title>FinEase | My Profile</title>
      <div className=" w-[90%] md:w-[50%] mx-auto my-20 bg-[#0b1422] p-10 rounded-2xl text-gray-200">
        <h1 className="mb-5 text-2xl font-bold text-[#7c3aed]">My Profile</h1>
        <div className="flex items-center gap-5">
          <img
            className=" w-15 md:w-18 rounded-full"
            src={`${
              user.photoURL
                ? user.photoURL
                : "https://i.ibb.co/HT6sMcVr/2015-10-06-FB-person.webp"
            }`}
            alt="image not found"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{user.displayName}</h1>
            <p className="text-gray-300 text-[12px] sm:text-sm">{user.email}</p>
          </div>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col my-3">
            <label className="label text-gray-200 font-semibold text-sm md:text-lg">
              {" "}
              Name
            </label>
            <input
              name="name"
              type="text"
              className="input w-full placeholder:text-sm md:placeholder:text-[15px] bg-[#0b1422]"
              placeholder="Enter Your Name"
            />
            <label className="label text-sm md:text-lg mt-4 text-gray-200 font-semibold">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              className="input w-full bg-[#0b1422]"
            />

            <button
              type="submit"
              className=" w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 my-button basic-btn transition duration-200 hover:scale-105 self-start mt-5"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
