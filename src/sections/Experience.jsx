import { FaBriefcase } from "react-icons/fa";
import Timeline from "../components/Timeline";

export default function Experience({darkMode}) {
  return (
    <section
      id="experience"
      className={`${darkMode ? 'bg-[#121212]' : 'bg-white'} px-4 lg:px-[5vw] w-full lg:w-[90vw] mx-auto`}
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <FaBriefcase
            size="35px"
            color={darkMode ? "white" : "#6d28d9"}
            className=" mr-2 lg:mt-2"
          />
          <h1
            className={`text-3xl  lg:text-5xl ${darkMode ? 'text-white': 'text-violet-700'} font-bold font-poppins`}
          >
            Experience
          </h1>
        </div>
        <div className="py-16 my-auto mx-auto">
          <Timeline darkMode={darkMode} />
        </div>
      </div>
    </section>
  );
}
