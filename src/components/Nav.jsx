import { NavLinks } from "../constants/index";
import { useState } from "react";
import { FaBars, FaSun, FaTimes } from "react-icons/fa";

export default function Nav(props) {
  const [isOpen, setisOpen] = useState(false);

  function toggleNavBar() {
    setisOpen(!isOpen);
  }

  return (
    <nav
      className={
        props.darkMode
          ? "bg-black sticky top-0 z-10 mx-auto py-4 px-4 m-0 flex w-full items-center justify-between shadow-xl"
          : "bg-white sticky top-0 z-10 mx-auto py-4 px-4 m-0 flex w-full items-center justify-between shadow-xl"
      }
    >
      <div>
        <a href="/">
          <h1 className="inline-block text-xl text-violet-600 font-inter font-bold">
            Akshat Mishra
          </h1>
        </a>
      </div>
      <div className="flex space-x-4">
        <ul
          className={
            isOpen
              ? "inline-block lg:flex-row flex flex-col w-full left-0 top-[20%] lg:gap-16 max-lg:divide-y max-lg:gap-10"
              : "hidden lg:flex-row flex "
          }
        >
          {NavLinks.map((item) => (
            <a href={item.href} className="">
              <li
                key={item.label}
                className="text-violet-600 text-bold m-0 hover:text-violet-800"
              >
                {item.label}
              </li>
            </a>
          ))}
          <li>
            <a href="https://akshat-scribes.onrender.com">
              <button className="bg-violet-600 hover:bg-violet-800 text-white font-semibold px-10 py-1 rounded-xl text-lg">
                Blog
              </button>
            </a>
          </li>
        </ul>

        <div>
          <FaSun
            size="25px"
            color={props.darkMode ? "white" : "black"}
            className="cursor-pointer inline-block"
            onClick={props.toggleDarkMode}
          />
        </div>
        <div className="px-2 lg:hidden">
          <FaBars
            size="30px"
            color="#7c3aed"
            onClick={toggleNavBar}
            className={isOpen ? "hidden" : "block cursor-pointer"}
          />
          <FaTimes
            size="30px"
            color="#7c3aed"
            onClick={toggleNavBar}
            className={isOpen ? "block cursor-pointer" : "hidden"}
          />
        </div>
      </div>
    </nav>
  );
}
