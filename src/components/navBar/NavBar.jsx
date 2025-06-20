"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from "../ThemeToggle";
import Image from "next/image";
import { CodeXml } from "lucide-react";

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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 right-0 left-0 z-40 bg-[#dedede] dark:bg-black bg-opacity-100 ">
      <div className="flex flex-wrap items-center justify-between p-2 mx-auto px-6">
        <Link href={"/"}>
          <CodeXml className="w-22 h-2w-22" />
        </Link>

        <div className="mobile-menu block md:hidden relative">
          {!navBarOpen ? (
            <div className="flex flex-row justify-center items-center gap-3">
              <ThemeToggle />
              <button
                onClick={() => {
                  setNavBarOpen(true);
                }}
                className="text-slate-500 p-3 border dark:border-white border-black rounded-md flex items-center justify-center transition-all duration-300"
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
          <NavLinks navLinks={navLinks} activeSection={activeSection} />
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
