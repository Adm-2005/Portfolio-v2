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
          ? "sticky top-0  w-full bg-[#121212] z-10 py-4 items-center justify-between shadow-xl shadow-[#202020] flex"
          : "sticky top-0  w-full bg-white z-10 py-4 items-center justify-between shadow-xl flex"
      }
    >
      <FaSun
        size="30px"
        color={props.darkMode ? "white" : "black"}
        className="cursor-pointer inline-block mx-4"
        onClick={props.toggleDarkMode}
      />
      <ul
        className={
          isOpen
            ? props.darkMode
              ? "bg-[#121212] w-full absolute gap-10 px-6 py-8 top-[100%] z-10 flex flex-col lg:flex-row"
              : "bg-white w-full absolute gap-10 px-6 py-8 top-[100%] z-10 flex flex-col lg:flex-row"
            : props.darkMode
              ? "absolute gap-14 px-6 hidden z-10 lg:flex flex-col lg:flex-row lg:px-4 lg:right-0"
              : "absolute gap-14 px-6 hidden z-10 lg:flex flex-col lg:flex-row lg:px-4 lg:right-0"
        }
      >
        {NavLinks.map((link) => (
          <a href={link.href} className="">
            <li
              key={link.label}
              className="text-xl text-violet-600 hover:text-violet-800 font-bold font-inter"
            >
              {link.label}
            </li>
          </a>
        ))}
      </ul>
      <div className="block mx-4 lg:hidden">
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
    </nav>
    // <nav
    //   className={
    //     props.darkMode
    //       ? "bg-[#121212] sticky top-0 z-10 mx-auto py-4 px-4 m-0 lg:mb-10 flex flex-wrap w-full items-center justify-between  shadow-xl shadow-[#121212]"
    //       : "bg-white sticky top-0 z-10 mx-auto py-4 px-4 m-0 flex flex-wrap w-full items-center justify-between shadow-xl"
    //   }
    // >
    //   <div>
    //     <a href="/"></a>
    //   </div>
    //   <div className="flex space-x-4">
    //     <ul
    //       className={
    //         isOpen
    //           ? "flex flex-col lg:flex-row space-y-12 top-[19%]  pb-12 w-full left-0 "
    //           : "hidden lg:flex inline-block space-x-16 pr-4 "
    //       }
    //     >
    //       {NavLinks.map((item) => (
    //         <a href={item.href} className="">
    //           <li
    //             key={item.label}
    //             className="text-violet-600 font-bold text-xl m-0 hover:text-violet-800 "
    //           >
    //             {item.label}
    //           </li>
    //         </a>
    //       ))}
    //       <li>
    //         <a href="https://akshat-scribes.onrender.com">
    //           <button className="inline-block bg-violet-600 hover:bg-violet-800 text-white font-semibold px-10 py-1 rounded-xl text-lg">
    //             Blog
    //           </button>
    //         </a>
    //       </li>
    //     </ul>
    //     <div>
    //       <FaSun
    //         size="25px"
    //         color={props.darkMode ? "white" : "black"}
    //         className="cursor-pointer inline-block lg:mr-12"
    //         onClick={props.toggleDarkMode}
    //       />
    //     </div>
    //     <div className="px-2 lg:hidden">
    //       <FaBars
    //         size="30px"
    //         color="#7c3aed"
    //         onClick={toggleNavBar}
    //         className={isOpen ? "hidden" : "block cursor-pointer"}
    //       />
    //       <FaTimes
    //         size="30px"
    //         color="#7c3aed"
    //         onClick={toggleNavBar}
    //         className={isOpen ? "block cursor-pointer" : "hidden"}
    //       />
    //     </div>
    //   </div>
    // </nav>
  );
}
