"use client";
import React from "react";
import Image from "next/image";

const skills = [
  {
    src: "https://svgshare.com/i/12vy.svg",
    title: "javascript",
  },
  {
    src: "https://svgshare.com/i/130J.svg",
    title: "React",
  },
  {
    src: "https://svgshare.com/i/12vW.svg",
    title: "Next Js",
  },
  {
    src: "https://svgshare.com/i/12sz.svg",
    title: "Typescript",
  },

  {
    src: "https://svgshare.com/i/12vz.svg",
    title: "Sass",
  },
  {
    src: "https://svgshare.com/i/12ve.svg",
    title: "Tailwind",
  },
  {
    src: "https://svgshare.com/i/12vp.svg",
    title: "Git ",
  },
  {
    src: "https://svgshare.com/i/130S.svg",
    title: "GitHub",
  },
  {
    src: "https://svgshare.com/i/12zg.svg",
    title: "Material ui",
  },
  {
    src: "https://svgshare.com/i/12zC.svg",
    title: "Bootstrap",
  },
];

const AchievementsSection = () => {
  return (
    <section>
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="text-center pb-6 ">
          <span className=" text-black dark:text-white p-3 rounded-lg border border-gray-500 font-bold">
            Skills
          </span>
        </div>
        <div className="text-center pb-6 text-black dark:text-[#ADB7BE]">
          The skills, tools and technologies I am really good at:
        </div>
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col flex-wrap sm:flex-row items-center justify-between gap-4">
          {skills.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 justify-evenly items-center md:self-end "
              >
                <Image alt={item.title} src={item.src} width={70} height={50} />
                <div className="text-blaack dark:text-gray-200">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
