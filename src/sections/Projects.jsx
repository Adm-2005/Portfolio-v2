import { FaFile } from "react-icons/fa";
import { useState } from "react";
import { projectLinks } from "../constants/utils.jsx";

export default function Projects({darkMode}) {
  return (
    <section
      id="projects"
      className={`${darkMode ? 'bg-[#121212]' : 'bg-white'} px-4 lg:px-[5vw] w-full lg:w-[90vw] mx-auto`}
    >
      <div className="flex flex-1 flex-col h-fit w-full">
        <div className="mx-auto flex">
          <FaFile
            size="35px"
            color={darkMode ? "white" : "#6d28d9"}
            className=" mr-2 lg:mt-2"
          />
          <h1
            className={`text-3xl  lg:text-5xl ${darkMode ? 'text-white' : 'text-violet-700'} font-bold font-poppins`}
          >
            Projects
          </h1>
        </div>
        <div className="grid py-16 m-auto md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8">
          {projectLinks.map((project, index) => (
            <div key={index} className="w-[300px] md:w-[370px] h-[250px] sm:h-[300px] bg-transparent cursor-pointer group perspective">
              <div className="relative  preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                <div className="absolute backface-hidden border-2 border-violet-700 rounded-md w-full h-full">
                  <img
                    src={project.imgUrl}
                    alt={project.name}
                    className="w-full h-full rounded-md"
                  ></img>
                </div>
                <div className="absolute my-rotate-y-180 backface-hidden border-2 border-violet-700 rounded-md w-full h-full bg-violet-100">
                  <div className="text-center flex flex-col items-center justify-center h-full">
                    <h1 className="text-2xl font-bold font-poppins">
                      {project.name}
                    </h1>
                    <p className="text-xl text-gray-700 font-inter py-4 px-4">
                      {project.description}
                    </p>
                    <a target="_blank" href={project.repoUrl}>
                      <button className="bg-violet-700 hover:bg-violet-800 text-lg text-white font-semibold px-2 py-1 rounded-md font-poppins">
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
