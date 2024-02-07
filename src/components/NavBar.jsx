import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-wrap  items-center justify-between p-8 mx-auto">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          {" "}
          Logo
        </Link>
        <div className="menu">
          <ul className="flex flex-row gap-5 items-center">
            <li>
              <Link
                href={"/about"}
                className="text-3xl text-Whit hover:text-blue-500 font-bold "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-3xl text-Whit hover:text-blue-500 font-bold "
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className="text-3xl text-Whit hover:text-blue-500 font-bold"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
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
