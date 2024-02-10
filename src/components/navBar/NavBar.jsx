"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import ThemeToggle from "../ThemeToggle";
3;
import DataObjectIcon from "@mui/icons-material/DataObject";
import Image from "next/image";

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
    <nav className="fixed top-0 right-0 left-0 z-40 bg-white dark:bg-black  bg-opacity-100 ">
      <div className="flex flex-wrap  items-center justify-between p-5 mx-auto px-6">
        <Link
          href={"/"}
          // className="bg-slate-500 dark:bg-white rounded-full h-16 w-16 flex items-center justify-center  "
        >
          {/* <DataObjectIcon
            sx={{
              fontSize: "55px",
              color: "black",
            }}
          /> */}
          <Image
            // src={"https://svgshare.com/i/12wC.svg"}
            src={"https://svgshare.com/i/12ua.svg"}
            alt="logo"
            className="md:w-20 w-9 text-black drak:text-white"
            width={50}
            height={20}
          />
        </Link>

        <div className="mobile-menu block md:hidden relative">
          {!navBarOpen ? (
            <div className="flex flex-row justify-center items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => {
                  setNavBarOpen(true);
                }}
                className="text-slate-500 p-3 border dark:border-white border-black  rounded-md flex items-center justify-center transition-all duration-300"
              >
                <Bars3Icon className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => {
                  setNavBarOpen(false);
                }}
                className="text-slate-500 p-3 border dark:border-white border-black rounded-md flex items-center justify-center transition-all duration-300"
              >
                <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
              </button>
            </div>
          )}
        </div>
        <div className="menu hidden md:block">
          <NavLinks navLinks={navLinks} />
        </div>
      </div>
      {navBarOpen ? (
        <MenuOverlay
          navLinks={navLinks}
          setNavBarOpen={setNavBarOpen}
          navBarOpen={navBarOpen}
        />
      ) : null}
    </nav>
  );
};

export default NavBar;
