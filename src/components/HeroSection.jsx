"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const HeroSection = () => {
  return (
    <section className="sm:pt-32 pb-52 relative" id="Home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start pt-10 "
        >
          <h1 className="dark:text-white text-balck mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text  bg-gradient-to-r from-slate-600 to-stone-600 dark:from-gray-200 dark:to-zinc-700">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Moustafa ElSayed",
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
          <p className="dark:text-[#ADB7BE] text-black text-base sm:text-lg mb-6 lg:text-xl">
            I’m Frontend and Mobile App Developer Working With
            ReactJS,NextJs,React Native , I Have +2 Years Experience and Iam Always Developing My self
          </p>
          <div className="flex flex-col gap-3 items-center md:items-start">
            <div className="flex flex-row gap-3  items-center">
              <LocationOnIcon className="dark:text-white text-black" />
              <div className="text-xs md:text-3xl text-black dark:text-white">
                Damnhour , Egypt
              </div>
            </div>
            <div className="flex flex-row gap-3  items-center">
              <RadioButtonCheckedIcon className="text-green-600" />
              <div className="text-xs md:text-3xl text-black dark:text-white">
                Available for new projects
              </div>
            </div>
            <div className="socials flex flex-row gap-2">
              <Link href="https://github.com/Moustafa-Elsayed">
                <GitHubIcon
                  className="text-black dark:text-white"
                  sx={{
                    fontSize: "45px",
                  }}
                />
              </Link>
              <Link href="https://www.linkedin.com/in/moustafa-hashem-0718872b7/">
                <LinkedInIcon
                  sx={{
                    fontSize: "45px",
                    color: "#0a66c2",
                  }}
                />
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=201559949947">
                <WhatsAppIcon
                  className="text-green-800"
                  style={{
                    fontSize: "45px",
                  }}
                />
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
        </motion.div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0 pt-8 md:pt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/WhatsApp Image 2023-12-22 at 20.34.41_d58b157b.jpg"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              alt="pesonal image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
