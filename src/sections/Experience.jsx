import { FaBriefcase } from "react-icons/fa";
import Timeline from "../components/Timeline";

export default function Experience(props) {
  return (
    <section
      id="experience"
      className={props.darkMode ? "bg-[#121212] px-16" : "bg-white px-16"}
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <FaBriefcase
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
            Experience
          </h1>
        </div>
        <div className="py-16 my-auto mx-auto">
          <Timeline darkMode={props.darkMode} />
        </div>
      </div>
    </section>
  );
}
