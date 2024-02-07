"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-black bg-opacity-90">
      <div className="flex flex-wrap  items-center justify-between p-8 mx-auto px-6">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          Logo
        </Link>
        <div className="mobile-menu hidden md:block">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
