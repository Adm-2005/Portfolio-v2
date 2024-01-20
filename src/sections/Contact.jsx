import { AiFillMessage } from "react-icons/ai";

export default function Contact(props) {
  return (
    <section
      id="contact"
      className={
        props.darkMode ? "bg-[#121212] px-8 sm:px-16" : "bg-white px-8 sm:px-16"
      }
    >
      <div className="flex flex-1 flex-col min-h-screen w-full">
        <div className="mx-auto flex">
          <AiFillMessage size="35px" color="#7c3aed" className="mr-2" />
          <h1 className="text-3xl lg:text-5xl text-violet-600 font-bold font-poppins">
            Contact
          </h1>
        </div>
      </div>
    </section>
  );
}
