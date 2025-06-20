"use client";
import React from "react";
import Image from "next/image";

const skills = [
  {
    id: "1",
    src: "/images/js.webp",
    title: "javascript",
  },
  {
    id: "2",

    src: "/images/react.png",
    title: "React",
  },
  {
    id: "3",

    src: "/images/next js.png",
    title: "Next Js",
  },
  {
    id: "4",

    src: "/images/ts.png",
    title: "Typescript",
  },

  {
    id: "5",

    src: "/images/sass.png",
    title: "Sass",
  },
  {
    id: "6",

    src: "/images/tailwind.png",
    title: "Tailwind",
  },
  {
    id: "7",

    src: "/images/git.png",
    title: "Git ",
  },
  {
    id: "8",

    src: "/images/gihub.png",
    title: "GitHub",
  },
  {
    id: "9",

    src: "/images/mui.png",
    title: "Material ui",
  },
  {
    id: "10",

    src: "/images/bootstrap.png",
    title: "Bootstrap",
  },
  {
    id: "11",

    src: "/images/shadcn.png",
    title: "shadcn",
  },
  {
    id: "12",

    src: "/images/jest.png",
    title: "jest unit testing",
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
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-co flex-wrap sm:flex-row items-center justify-center gap-4">
          {skills.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 justify-center items-center md:self-end "
              >
                <Image alt={item.title} src={item.src} width={70} height={50} />
                <div className="text-black dark:text-gray-200">
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
