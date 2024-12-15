import { IconContext } from "react-icons";
import { smLinks } from "../constants/utils";

export default function Hero({darkMode}) {
  return (
    <section
      id="/"
      className={`${darkMode ? 'bg-[#121212]' : 'bg-white'} px-4 mb-12`}
    >
      <div className="flex flex-1 w-full flex-col">
        <div className="flex flex-col">
          <h1 className="mx-auto font-poppins text-violet-700 text-3xl lg:text-6xl font-bold">
            Akshat Mishra
          </h1>
          <h2
            className={`mx-auto font-inter text-semibold text-xl lg:text-2xl  ${darkMode ? 'text-violet-300' : 'text-violet-600'}`}
          >
            Fullstack AI Developer
          </h2>
          <p
            className={`mx-auto font-inter text-md pl-5 leading-1 mt-4 ${darkMode ? 'text-white': 'text-gray-800'} sm:max-w-lg lg:text-xl`}
          >
            AI&DS undergrad trying to write good code.
          </p>
          <div className="flex gap-10 lg:gap-16 mx-auto my-5">
            {smLinks.map((smLink, index) => (
              <a key={index} href={smLink.link} target="_blank">
                <IconContext.Provider value={{ size: '35px', color: '#6d28d9' }}>
                  {smLink.icon}
                </IconContext.Provider>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-b from-violet-700 to-violet-200 rounded-full mx-auto md:w-[300px] md:h-[300px] my-5 shadow-2xl">
          <img src="assets/images/avatar.png"></img>
        </div>
        <a
          href="https://drive.google.com/file/d/174govPcb0RX3YM42Af6o24VH613KtynG/view?usp=sharing"
          target="_blank"
          className="mx-auto"
        >
          <button className="rounded-xl bg-violet-700 hover:bg-violet-800 mx-auto mt-4 font-semibold font-poppins text-white px-4 py-2 lg:px-8 lg:py-3">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}
