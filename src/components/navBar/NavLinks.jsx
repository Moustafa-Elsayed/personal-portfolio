import Link from "next/link";
import React from "react";
import ThemeToggle from "../ThemeToggle";

const NavLinks = ({ navLinks, activeSection }) => {
  return (
    <ul className="flex flex-row gap-5 items-center ">
      <li>
        <ThemeToggle />
      </li>
      {navLinks.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.path}
              className={`block py-2 pl-3 pr-4 dark:text-white text-black sm:text-xl rounded md:p-0 hover:text-blue-400 dark:hover:text-yellow-400 font-semibold ${
                item.path === `#${activeSection}`
                  ? "text-blue-400 dark:text-yellow-400 "
                  : ""
              }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
      <li className="border-l border-gray-500  dark:border-yellow-400">
        <Link
          href="https://drive.google.com/file/d/17Qofmv-9ngfblAXPfAjP05X-lKpFbuXD/view?usp=sharing"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gray-600 dark:bg-yellow-400 text-white ml-3 "
        >
          <span className="block bg-[#121212] hover:bg-slate-800  rounded-full px-5 py-2 font-semibold">
            Download CV
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
