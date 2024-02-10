import Link from "next/link";
import React from "react";

const NavLinks = ({ navLinks }) => {
  return (
    <ul className="flex flex-row gap-5 items-center ">
      {navLinks.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.path}
              className="block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-blue-400 font-semibold"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
      <li className="border-l border-gray-500">
        <Link
          href="/"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gray-600 text-white ml-3 "
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-semibold">
            Download CV
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
