import { FaPencilRuler } from "react-icons/fa";
import { skills } from "../constants/utils.jsx";
import SkillCard from "../components/SkillCard.jsx";

export default function Skills({darkMode}) {
  return (
    <section
      id="skills"
      className={`${darkMode ? 'bg-[#121212]' : 'bg-white'} px-4 lg:px-[5vw] w-full lg:w-[90vw] mx-auto`}
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <FaPencilRuler
            size="35px"
            color={darkMode ? "white" : "#6d28d9"}
            className=" mr-2 lg:mt-2"
          />
          <h1
            className={`text-3xl  lg:text-5xl ${darkMode ? 'text-white' : 'text-violet-700'} font-bold font-poppins`}
          >
            Skills
          </h1>
        </div>

        <div className="mx-auto py-16 my-auto grid sm:grid-cols-2 xl:grid-cols-3  grid-cols-1 w-full gap-2">
          {skills.map((skill, index) => (
            <SkillCard key={index} darkMode={darkMode} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
