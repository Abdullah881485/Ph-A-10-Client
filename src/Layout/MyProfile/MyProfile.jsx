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
      <div className=" my-20 bg-base-300 p-8 md:p-10 rounded-2xl text-base-400">
        <h1 className="mb-5 text-2xl font-bold text-[#7c3aed]">My Profile</h1>
        <div className="flex items-center gap-3 md:gap-5">
          <img
            className=" w-12 h-12 md:w-18 md:h-18 object-cover rounded-full"
            src={`${
              user.photoURL
                ? user.photoURL
                : "https://i.ibb.co/HT6sMcVr/2015-10-06-FB-person.webp"
            }`}
            alt="image not found"
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{user.displayName}</h1>
            <p className="text-base-400 text-[12px] sm:text-sm">{user.email}</p>
          </div>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="flex flex-col my-3">
            <label className="label text-base-400 font-semibold text-sm md:text-lg">
              {" "}
              Name
            </label>
            <input
              name="name"
              type="text"
              defaultValue={user.displayName}
              className="input w-full placeholder:text-sm md:placeholder:text-[15px] bg-base-300"
              placeholder="Enter Your Name"
            />
            <label className="label text-sm md:text-lg mt-4 text-base-400 font-semibold">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              className="input w-full bg-base-300"
            />

            <button
              type="submit"
              className=" w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 my-button mt-5 text-xs md:text-sm text-base-content rounded-md font-bold cursor-pointer py-2.5 px-2 md:px-7 transition-all duration-200 "
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
