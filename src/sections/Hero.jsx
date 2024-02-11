import { FaGithub, FaLinkedin, FaTwitter, FaQuora } from "react-icons/fa";

export default function Hero(props) {
  return (
    <section
      id="/"
      className={
        props.darkMode
          ? "bg-[#121212] pb-16 px-8 sm:px-16"
          : "bg-white pb-16 px-8 sm:px-16"
      }
    >
      <div className="flex flex-1 w-full  flex-col min-h-screen mt-10 lg:mt-16">
        <div className="flex flex-col">
          <h1 className="mx-auto font-poppins text-violet-600 text-3xl lg:text-6xl font-bold">
            Akshat Mishra
          </h1>
          <h2
            className={
              props.darkMode
                ? "mx-auto font-inter text-semibold text-xl lg:text-2xl  text-violet-300"
                : "mx-auto font-inter text-semibold text-xl lg:text-2xl text-violet-500"
            }
          >
            Engineer and Developer
          </h2>
          <p
            className={
              props.darkMode
                ? "mx-auto font-inter text-md pl-5 leading-1 mt-4 text-white sm:max-w-lg lg:text-xl"
                : "mx-auto font-inter text-md pl-5 leading-1 mt-4 text-gray-900 sm:max-w-lg lg:text-xl"
            }
          >
            As an engineering student my keen interest lies in delving deep into
            the fundamental principles of Software Development. I am
            enthusiastic about exploring the diverse frontiers that the
            ever-evolving tech world presents.
          </p>
          <div className="flex gap-10 lg:gap-16 mx-auto my-5">
            <a
              href="https://www.linkedin.com/in/akshat--mishra"
              target="_blank"
            >
              <FaLinkedin color="#7c3aed" size="40px" />
            </a>
            <a href="https://twitter.com/imakshatmishra" target="_blank">
              <FaTwitter color="#7c3aed" size="40px" />
            </a>
            <a href="https://github.com/Adm-2005" target="_blank">
              <FaGithub color="#7c3aed" size="40px" />
            </a>
            <a
              href="https://www.quora.com/profile/Akshat-Mishra-657"
              target="_blank"
            >
              <FaQuora color="#7c3aed" size="40px" />
            </a>
          </div>
        </div>
        <div className="bg-gradient-to-b from-violet-500 rounded-full mx-auto w-30 h-30 sm:w-3/5 sm:h-3/5 xl:w-1/5 my-5 shadow-2xl">
          <img src="assets/images/avatar.png"></img>
        </div>
        <a
          href="https://drive.google.com/file/d/1GKF1iLAWcKIm1k6eXGMD88zoFh-8qsCM/view?pli=1"
          target="_blank"
          className="mx-auto"
        >
          <button className="rounded-xl bg-violet-600 hover:bg-violet-800 mx-auto mt-4 font-bold text-white px-4 py-2 lg:px-8 lg:py-3">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}
