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
    </ul>
  );
};

export default MenuOverlay;
