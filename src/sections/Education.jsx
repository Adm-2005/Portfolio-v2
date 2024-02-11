import Card from "../components/Card.jsx";
import { Institutes } from "../constants/index";
import { FaGraduationCap } from "react-icons/fa";

export default function Education(props) {
  return (
    <section
      id="education"
      className={
        props.darkMode
          ? "bg-[#121212] text-white px-8 sm:px-16"
          : "bg-white px-8 sm:px-16"
      }
    >
      <div className="flex flex-1 flex-col w-full">
        <div className="mx-auto flex">
          <FaGraduationCap
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
            Education
          </h1>
        </div>

        <div className="lg:my-20 mt-10 mb-20 mx-auto my-auto grid  sm:grid-cols-3  grid-cols-1 gap-4">
          {Institutes.map((institute) => (
            <Card
              darkMode={props.darkMode}
              key={institute.name}
              {...institute}
              className="mx-auto my-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
