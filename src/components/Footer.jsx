import { IconContext } from "react-icons";
import { FaArrowCircleRight } from "react-icons/fa";
import { footerLinks, smLinks } from "../constants/utils.jsx";

export default function Footer() {
  return (
    <footer className="absolute z-9 w-full bg-violet-800 mx-auto flex flex-wrap items-center justify-between shadow-xl">
      <div className="flex flex-col gap-3 items-center justify-between w-full lg:w-[90vw] p-4 md:p-6 lg:px-[5vw] mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full">
          <div className="flex flex-col gap-3 text-white max-w-md">
            <h1 className="text-2xl md:text-3xl font-bold font-poppins">Akshat Mishra</h1>
            <p className="text-lg font-inter">
              Grateful for your visit! Explore more about my work and journey on this portfolio - Thank you for stopping by!
            </p>
            <div className="flex gap-3">
              {smLinks.map((smLink, index) => (
                <a key={index} href={smLink.link}>
                  <IconContext.Provider value={{ size: '35px', color: 'white', className: 'hover:text-gray-800' }}>
                    {smLink.icon}
                  </IconContext.Provider>
                </a>
              ))}
            </div>
          </div>

          <ul className="flex flex-col md:flex-row gap-7 lg:gap-11">
            {footerLinks.map((section, index) => (
              <li key={index} className="">
                <ul className="text-white gap-2"> 
                  <h1 className="font-poppins font-bold text-2xl md:text-3xl pb-3">{section.title}</h1>
                  {section.links.map((link, index) => (
                    <li key={index} className="flex items-center gap-1 text-lg hover:text-gray-800 font-inter">
                      <FaArrowCircleRight className="" />
                      <a href={link.link} className="">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <hr className="bg-white w-full m-2"></hr>
        <p className="font-inter text-white">
          &copy; All Rights Reserved. <a href="/" className="text-blue-500 hover:text-blue-700">Akshat Mishra</a>
        </p>
      </div>
    </footer>
  );
}
