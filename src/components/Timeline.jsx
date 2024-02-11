import { workDetails } from "../constants/index";

export default function Timeline(props) {
  return (
    <div>
      {workDetails.map((work) => (
        <div
          id="timeline"
          className="border-l-4 border-violet-600 mx-auto w-full py-16 space-y-14"
        >
          <div className="relative">
            <div
              id="dot"
              className="absolute top-5 -left-3.5 bg-violet-600 rounded-full h-6 w-6 border-4"
            ></div>
            <div className="pl-10">
              <h3
                className={
                  props.darkMode
                    ? "font-bold font-inter text-2xl lg:text-3xl text-white"
                    : "font-bold font-inter text-2xl lg:text-3xl text-gray-800"
                }
              >
                {work.position}
              </h3>
              <h2
                className={
                  props.darkMode
                    ? "font-semibold font-inter text-xl text-white"
                    : "font-semibold font-inter text-xl text-gray-800"
                }
              >
                {work.company}
              </h2>
              <p
                className={
                  props.darkMode
                    ? "font-medium font-inter text-lg text-white"
                    : "font-medium font-inter text-lg text-gray-800"
                }
              >
                {work.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
