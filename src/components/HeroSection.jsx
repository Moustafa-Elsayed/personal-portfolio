"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const HeroSection = () => {
  return (
    <section className="sm:pt-32 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Moustafa El-Sayed",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={10}
              delaySpeed={2000}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I’m Frontend and Mobile App Developer Working With
            ReactJS,NextJs,React Native and constantly learning to expand my
            knowledge and skills
          </p>
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-row gap-3">
              <LocationOnIcon />
              <div className="text-xl md:text-3xl">Egypt,Damnhour</div>
            </div>
            <div className="flex flex-row gap-3">
              <WorkIcon />
              <div className="text-xl md:text-3xl"> Available for new projects</div>
            </div>
            <div className="socials flex flex-row gap-2">
              <Link href="github.com">
                <GitHubIcon className="text-6xl " />
              </Link>
              <Link href="linkedin.com">
                <LinkedInIcon className="text-6xl text-blue-500" />
              </Link>
            </div>
            {/* <Link
              href="/contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-blue-200 to-blue-600 bg-white hover:bg-slate-200 text-black"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-200 to-blue-600 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                Download CV
              </span>
            </Link> */}
          </div>
        </motion.div>{" "}
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"https://svgshare.com/i/12pS.svg"}
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="pesonal image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
