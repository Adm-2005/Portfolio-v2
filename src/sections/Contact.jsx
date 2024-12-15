import { AiFillMessage } from "react-icons/ai";

export default function Contact({darkMode}) {
  return (
    <section
      id="contact"
      className={`${darkMode ? 'bg-[#121212]' : 'bg-white'} px-4 lg:px-[5vw] w-full lg:w-[90vw] mx-auto`}
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <AiFillMessage
            size="35px"
            color={darkMode ? "white" : "#7c3aed"}
            className=" mr-2 lg:mt-2"
          />
          <h1
            className={`text-3xl  lg:text-5xl ${darkMode ? 'text-white' : 'text-violet-700'} font-bold font-poppins`}
          >
            Get in Touch
          </h1>
        </div>
        <div
          className={`flex flex-col-reverse lg:flex-row-reverse my-16 mx-auto border w-full rounded-md h-fit ${darkMode ? 'bg-[#202020]' : 'bg-white shadow-2xl'}`}
        >
          <form
            method="POST"
            action="https://formspree.io/f/mbjnorzz"
            className="flex flex-col w-full px-6 py-6 mx-auto my-auto gap-6 rounded-md"
          >
            <label
              htmlFor="Name"
              className="text-xl text-violet-700 font-semibold font-poppins flex-col flex"
            >
              Name
              <input
                id="Name"
                type="text"
                placeholder="Enter your name"
                className="text-black font-medium border border-violet-700 invalid:border-red-500 focus:outline-none focus:ring px-2 py-2  rounded-md"
              ></input>
            </label>
            <label
              htmlFor="Email"
              className=" text-xl text-violet-700 font-semibold font-poppins flex-col flex"
            >
              Email
              <input
                id="Email"
                type="email"
                placeholder="Enter your email address"
                className="text-black font-medium border border-violet-700 invalid:border-red-500 focus:outline-none focus:ring px-2  py-2  rounded-md"
              ></input>
            </label>
            <label
              htmlFor="Message"
              className=" text-xl text-violet-700 font-semibold font-poppins flex-col flex"
            >
              Message
              <textarea
                id="Message"
                type="textarea"
                rows="5"
                placeholder="Enter your message"
                className="text-black font-medium border border-violet-700 invalid:border-red-500 focus:outline-none focus:ring px-2 py-2  rounded-md"
              ></textarea>
            </label>
            <button className="bg-gradient-to-r from-violet-700 to-violet-300  mx-auto my-4 text-white font-bold font-inter px-4 lg:px-8 py-3 rounded-lg ">
              Submit
            </button>
          </form>
          <div className="my-auto">
            <img
              src="assets/images/contact1.gif"
              className="w-fit lg:h-[400px] mx-auto px-6 py-6"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
