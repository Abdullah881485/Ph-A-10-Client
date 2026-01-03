const Contact = () => {
  return (
    <div className="text-base-content space-y-8 my-5 flex flex-col md:flex-row items-center gap-5 w-[95%] md:w-8/10 mx-auto bg-base-300 rounded-xl shadow-lg">
      <title>FinEase | Contact</title>

      <div className="p-8  flex flex-col gap-3">
        <div className=" text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#7c3aed] mb-3">
            Contact Us
          </h1>
          <p className="text-base-500">
            Have questions or feedback? We’d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className=" p-6 rounded-xl shadow-lg hover-glow">
            <h3 className="font-semibold text-[#7c3aed] mb-2">Email</h3>
            <p className="text-base-400">support@finease.app</p>
          </div>
          <div className=" p-6 rounded-xl shadow-lg hover-glow">
            <h3 className="font-semibold text-[#7c3aed] mb-2">Location</h3>
            <p className="text-base-400">Bangladesh</p>
          </div>
          <div className=" p-6 rounded-xl shadow-lg hover-glow">
            <h3 className="font-semibold text-[#7c3aed] mb-2">Support Hours</h3>
            <p className="text-base-400">9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </div>

      <div className=" p-6 sm:p-8 ">
        <h2 className="text-xl font-bold mb-4 text-[#7c3aed] text-center">
          Send Us a Message
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-transparent border-b border-gray-600 text-base-content px-2 py-2 focus:outline-none focus:border-[#7c3aed]"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border-b border-gray-600 text-base-content px-2 py-2 focus:outline-none focus:border-[#7c3aed]"
            required
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full bg-transparent border-b border-gray-600 text-base-content px-2 py-2 focus:outline-none focus:border-[#7c3aed]"
            required
          ></textarea>
          <button
            type="submit"
            className="my-button text-white rounded-md font-bold py-2 px-8 mt-2 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
