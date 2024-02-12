import Link from "next/link";
import React from "react";

const MenuOverlay = ({ navLinks, setNavBarOpen, navBarOpen }) => {
  return (
    <ul
      className={`flex flex-col py-4 items-center transition-opacity duration-300 ${
        navBarOpen ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      {navLinks.map((item, index) => (
        <li
          key={index}
          onClick={() => {
            setNavBarOpen(false);
          }}
        >
          <Link
            href={item.path}
            className="block py-2 pl-3 pr-4 text-black dark:text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-blue-400"
          >
            {item.title}
          </Link>
        </li>
      ))}
      <li className="">
        <Link
          href="https://docs.google.com/document/d/1yKSpkyB-qzQZYteOViwTI3i9Oz-IpnVXROZrN-vLK3w/edit"
          className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gray-600 text-white "
        >
          <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 font-semibold">
            Download CV
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default MenuOverlay;
