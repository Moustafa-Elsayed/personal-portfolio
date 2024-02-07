import Link from "next/link";
import React from "react";
const navLinks = [
  {
    title: "Home",
    path: "#Home",
  },
  {
    title: "About me",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },

  {
    title: "Contact Me",
    path: "#contact",
  },
];
const NavLinks = () => {
  return (
    <ul className="flex flex-row gap-5 items-center ">
      {navLinks.map((item, index) => {
        return (
          <li key={item.id}>
            <Link
              href={item.path}
              className="text-xl text-White hover:text-blue-500  font-bold "
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

export default NavLinks;
