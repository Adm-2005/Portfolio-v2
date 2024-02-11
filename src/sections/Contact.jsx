import { AiFillMessage } from "react-icons/ai";

export default function Contact(props) {
  return (
    <section
      id="contact"
      className={
        props.darkMode ? "bg-[#121212] px-8 sm:px-16" : "bg-white px-8 sm:px-16"
      }
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <AiFillMessage
            size="35px"
            color={props.darkMode ? "white" : "#7c3aed"}
            className=" mr-2 lg:mt-2"
          />
          <h1
            className={
              props.darkMode
                ? "text-3xl  lg:text-5xl text-white font-bold font-poppins"
                : "text-3xl  lg:text-5xl text-violet-600 font-bold font-poppins"
            }
          >
            Get in Touch
          </h1>
        </div>
        <div
          className={
            props.darkMode
              ? "flex flex-col-reverse lg:flex-row-reverse my-16 mx-auto  w-full rounded-md lg:w-3/5 h-fit bg-[#202020]"
              : "flex flex-col-reverse lg:flex-row-reverse my-16 mx-auto  w-full rounded-md lg:w-3/5 h-fit shadow-2xl"
          }
        >
          <form className="flex flex-col px-6 py-6 mx-auto my-auto gap-6 rounded-md">
            <label
              htmlFor="Name"
              className="text-xl text-violet-600 font-semibold font-poppins flex-col flex"
            >
              Name
              <input
                id="Name"
                type="text"
                placeholder="Enter your name"
                className="text-black font-medium border border-violet-600 invalid:border-red-500 focus:outline-none focus:ring px-2 py-2  rounded-md"
              ></input>
            </label>
            <label
              htmlFor="Email"
              className=" text-xl text-violet-600 font-semibold font-poppins flex-col flex"
            >
              Email
              <input
                id="Email"
                type="email"
                placeholder="Enter your email address"
                className="text-black font-medium border border-violet-600 invalid:border-red-500 focus:outline-none focus:ring px-2  py-2  rounded-md"
              ></input>
            </label>
            <label
              htmlFor="Message"
              className=" text-xl text-violet-600 font-semibold font-poppins flex-col flex"
            >
              Message
              <textarea
                id="Message"
                type="textarea"
                rows="5"
                placeholder="Enter your message"
                className="text-black font-medium border border-violet-600 invalid:border-red-500 focus:outline-none focus:ring px-2 py-2  rounded-md"
              ></textarea>
            </label>
            <button className="bg-gradient-to-r from-violet-600 to-violet-200  mx-auto my-4 text-white font-bold font-inter px-4  py-3 rounded-lg ">
              Submit
            </button>
          </form>
          <div className="my-auto">
            <img
              src="/src/assets/images/contact1.gif"
              className="w-fit lg:h-[400px] mx-auto px-6 py-6"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
}
