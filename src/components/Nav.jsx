import { NavLinks } from "../constants/utils";
import { useState } from "react";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";

export default function Nav({darkMode, toggleDarkMode}) {
  const [isOpen, setisOpen] = useState(false);
 
  function toggleNavBar() {
    setisOpen(!isOpen);
  }

  return (
    <nav
      className={`sticky top-0  w-full lg:w-[90vw] px-4 lg:px-[5vw] mx-auto ${darkMode ? 'bg-[#121212]' : 'bg-white'} z-10 py-6 items-center justify-between flex`}
    >
      <FaSun
        size="30px"
        color={darkMode ? "white" : "black"}
        className="cursor-pointer inline-block mx-4"
        onClick={toggleDarkMode}
      />
      <ul
        className={
          isOpen
            ? `${darkMode ? 'bg-[#121212]' : 'bg-white'} w-full absolute gap-7 py-8 top-[100%] z-10 flex flex-col lg:flex-row`
            : `${darkMode ? 'bg-[#121212]' : 'bg-white'} gap-14 hidden px-6 z-10 lg:flex flex-col lg:flex-row lg:px-4 lg:right-0`
        }
      >
        {NavLinks.map((link, index) => (
          <a key={index} href={link.href} className="">
            <li
              className="text-lg text-violet-700 hover:text-violet-800 font-semibold font-poppins"
            >
              {link.label}
            </li>
          </a>
        ))}
      </ul>
      <div className="block lg:hidden">
        <FaBars
          size="30px"
          color="#6d28d9"
          onClick={toggleNavBar}
          className={isOpen ? "hidden" : "block cursor-pointer"}
        />
        <FaTimes
          size="30px"
          color="#6d28d9"
          onClick={toggleNavBar}
          className={isOpen ? "block cursor-pointer" : "hidden"}
        />
      </div>
    </nav>
  );
}
