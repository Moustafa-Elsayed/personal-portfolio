"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
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

 
];
const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-black bg-opacity-100">
      <div className="flex flex-wrap  items-center justify-between p-8 mx-auto px-6">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          Logo
        </Link>
        <div className="mobile-menu block md:hidden relative">
          {!navBarOpen ? (
            <button
              onClick={() => {
                setNavBarOpen(true);
              }}
              className="text-slate-500 p-3 border border-white rounded-md flex items-center justify-center transition-all duration-300"
            >
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          ) : (
            <button
              onClick={() => {
                setNavBarOpen(false);
              }}
              className="text-slate-500 p-3 border border-white rounded-md flex items-center justify-center transition-all duration-300"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block">
          <NavLinks navLinks={navLinks} />
        </div>
      </div>
      {navBarOpen ? <MenuOverlay navLinks={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
