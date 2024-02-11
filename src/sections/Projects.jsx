import { FaFile } from "react-icons/fa";
import { useState } from "react";
import { projectLinks } from "../constants/index.js";

export default function Projects(props) {
  return (
    <section
      id="projects"
      className={props.darkMode ? "bg-[#121212]" : "bg-white px-8 sm:px-16"}
    >
      <div className="flex flex-1 flex-col h-fit w-full">
        <div className="mx-auto flex">
          <FaFile
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
            Projects
          </h1>
        </div>
        <div className="grid py-16 m-auto xl:grid-cols-3 grid-cols-1 gap-8">
          {projectLinks.map((project) => (
            <div className="w-[330px] h-[250px] md:w-[450px] lg:w-[480px] sm:h-[300px] bg-transparent cursor-pointer group perspective">
              <div className="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden border-2 border-violet-600 rounded-md w-full h-full">
                  <img
                    src={project.imgUrl}
                    alt={project.name}
                    className="w-full h-full rounded-md"
                  ></img>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden border-2 border-violet-600 w-full h-full bg-gray-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <h1 className="text-2xl font-bold font-poppins">
                      {project.name}
                    </h1>
                    <p className="text-xl text-gray-800 font-inter py-4 px-4">
                      {project.description}
                    </p>
                    <a target="_blank" href={project.repoUrl}>
                      <button className="bg-violet-600 hover:bg-violet-800 text-lg text-white font-semibold px-2 py-1 rounded-md">
                        Know More
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
