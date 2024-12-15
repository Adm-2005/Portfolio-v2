import { workDetails } from "../constants/utils";

export default function Timeline({darkMode}) {
  return (
    <div>
      {workDetails.map((work, index) => (
        <div
          key={index}
          className="border-l-4 border-violet-700 mx-auto w-full py-16 space-y-14"
        >
          <div className="relative">
            <div
              id="dot"
              className="absolute top-5 -left-3.5 bg-violet-700 rounded-full h-6 w-6 border-4"
            ></div>
            <div className="pl-10">
              <h3
                className={`font-bold font-inter text-2xl lg:text-3xl ${darkMode ? 'text-white': 'text-gray-800'}`}
              >
                {work.position}
              </h3>
              <h2
                className={`font-semibold font-inter text-xl ${darkMode ? 'text-white' : 'text-gray-800'}`}
              >
                {work.company}
              </h2>
              <p
                className={`font-medium font-inter text-lg ${darkMode ? 'text-violet-200' : 'text-gray-600'}`}
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
