import Link from "next/link";
import React from "react";

const MenuOverlay = ({ navLinks }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {navLinks.map((item, index) => {
        return (
          <li key={index}>
            <Link
              href={item.path}
              className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-blue-400"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
      <li>
        <Link
          href="/contact"
          className="px-6 inline-block py-3 w-full sm:w-fit rounded-md mr-4  bg-white hover:bg-slate-200 text-black font-bold"
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
};

export default MenuOverlay;
