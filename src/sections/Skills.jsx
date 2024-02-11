import { FaPencilRuler } from "react-icons/fa";
import { skills } from "../constants/index.js";
import SkillCard from "../components/SkillCard.jsx";

export default function Skills(props) {
  return (
    <section
      id="skills"
      className={
        props.darkMode ? "bg-[#121212] px-8 sm:px-16" : "bg-white px-8 sm:px-16"
      }
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <FaPencilRuler
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
            Skills
          </h1>
        </div>

        <div className="mx-auto py-16 my-auto grid sm:grid-cols-2 xl:grid-cols-3  grid-cols-1 w-full gap-8">
          {skills.map((skill) => (
            <SkillCard darkMode={props.darkMode} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
