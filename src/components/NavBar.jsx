"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BeakerIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "Home",
    path: "#Home",
  },
  {
    title: "Home",
    path: "#Home",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "About me",
    path: "#about",
  },
];

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-black bg-opacity-90">
      <div className="flex flex-wrap  items-center justify-between p-8 mx-auto px-6">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          Logo
        </Link>
        {navBarOpen ? (
          <button>
            <BeakerIcon className="h-6 w-6 text-blue-500" />
          </button>
        ) : (
          <button>
            {" "}
            <BeakerIcon className="h-6 w-6 text-blue-500" />
          </button>
        )}
        <div className="mobile-menu hidden md:block">
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
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
