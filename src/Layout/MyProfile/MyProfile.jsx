import React from "react";

const MyProfile = () => {
  return (
    <div>
      <title>FinEase | My Profile</title>
      <div
        data-aos="zoom-in"
        className=" w-[90%] md:w-[50%] mx-auto my-20 bg-[#0b1422] p-10 rounded-2xl"
      >
        <h1 className="mb-5 text-2xl font-bold ">My Profile</h1>
        <div className="flex items-center gap-5">
          <img
            className=" w-15 md:w-18 rounded-full"
            src={
              "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
            }
            alt=""
          />
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">User Name</h1>
            <p className="text-gray-500 text-[12px] sm:text-sm">User Email</p>
          </div>
        </div>
        <form>
          <div className="flex flex-col my-3">
            <label className="label text-sm md:text-lg"> Name</label>
            <input
              name="name"
              type="text"
              className="input w-full placeholder:text-sm md:placeholder:text-[16px] bg-transparent"
              placeholder="Enter Your Name"
            />
            <label className="label text-sm md:text-lg mt-4">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full bg-transparent"
            />

            <button
              type="submit"
              className=" w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 my-button transition duration-200 hover:scale-105 self-start mt-5"
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
