import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-black bg-opacity-90">
      <div className="flex flex-wrap  items-center justify-between p-8 mx-auto px-4">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          {" "}
          Logo
        </Link>
        <div className="">
          <ul className="flex flex-row gap-5 items-center ">
            <li>
              <Link
                href={"/about"}
                className="text-sm text-White  font-bold "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-sm text-White  font-bold "
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-sm text-White  font-bold"
              >
                About me
              </Link>
            </li>
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
