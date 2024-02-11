import { BsLinkedin, BsTwitter, BsQuora, BsGithub } from "react-icons/bs";
import { IconContext } from "react-icons";
import { FaArrowCircleRight, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";
import { footerLinks } from "../constants/index.js";

export default function Footer(props) {
  return (
    <footer className="absolute z-9 w-full bg-violet-800  mx-auto py-6 px-6 m-0 lg:mb-10 flex flex-wrap items-center justify-between shadow-xl">
      <div className="flex flex-col gap-4">
        <a>
          <h1 className="text-white text-2xl lg:text-3xl font-poppins font-bold ">
            Akshat Mishra
          </h1>
        </a>
        <p className="text-white text-lg font-inter md:max-w-md">
          Grateful for your visit! Explore more about my work and journey on
          this portfolio - Thank you for stopping by!
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/akshat--mishra" target="_blank">
            <IconContext.Provider value={{ color: "white", className: "" }}>
              <BsLinkedin color="white" size="35px" />
            </IconContext.Provider>
          </a>
          <a href="https://twitter.com/imakshatmishra" target="_blank">
            <IconContext.Provider value={{ color: "white", className: "" }}>
              <BsTwitter color="white" size="35px" />
            </IconContext.Provider>{" "}
          </a>
          <a href="https://github.com/Adm-2005" target="_blank">
            <IconContext.Provider value={{ color: "white", className: "" }}>
              <BsGithub color="white" size="35px" />
            </IconContext.Provider>{" "}
          </a>
          <a
            href="https://www.quora.com/profile/Akshat-Mishra-657"
            target="_blank"
          >
            <IconContext.Provider value={{ color: "white", className: "" }}>
              <BsQuora color="white" size="35px" />
            </IconContext.Provider>{" "}
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col pb-6 gap-8 lg:pl-[280px] lg:gap-24 md:flex-row w-fit mt-8">
        {footerLinks.map((section) => (
          <div key={section}>
            <h4 className="text-white font-inter text-2xl lg:text-3xl leading-normal font-bold mb-4">
              {section.title}
            </h4>
            <ul>
              {section.links.map((link) => (
                <li className=" flex gap-1  text-white text-lg mt-3 font-inter text-base leading-normal hover:text-black">
                  <FaArrowCircleRight className=" mt-1" />
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full mx-auto">
        <p className="text-white text-lg font-inter pt-4">
          Designed by{" "}
          <a href="/" className="text-cyan-400 hover:text-cyan-800">
            Akshat Mishra
          </a>
        </p>
      </div>
    </footer>
  );
}
