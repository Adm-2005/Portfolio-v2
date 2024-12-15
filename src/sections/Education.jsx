import Card from "../components/Card.jsx";
import { Institutes } from "../constants/utils";
import { FaGraduationCap } from "react-icons/fa";

export default function Education({darkMode}) {
  return (
    <section
      id="education"
      className={`${darkMode ? 'bg-[#121212] text-white' : 'bg-white'} px-4 lg:px-[5vw] w-full lg:w-[90vw] mx-auto`}
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <FaGraduationCap
            size="35px"
            color={darkMode ? "white" : "#6d28d9"}
            className=" mr-2 lg:mt-2"
          />
          <h1
            className={`text-3xl  lg:text-5xl ${darkMode ? 'text-white' : 'text-violet-700'} font-bold font-poppins`}
          >
            Education
          </h1>
        </div>

        <div className="lg:my-20 mt-10 mb-20 mx-auto grid md:grid-cols-3 grid-cols-1 gap-2">
          {Institutes.map((institute, index) => (
            <Card
              darkMode={darkMode}
              key={index}
              {...institute}
              className=""
            />
          ))}
        </div>
      </div>
    </section>
  );
}
