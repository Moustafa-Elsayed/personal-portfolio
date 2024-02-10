"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const skills = [
  {
    src: "https://svgshare.com/i/12vy.svg",
    title: "javascript",
  },
  {
    src: "https://svgshare.com/i/12un.svg",
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
];

const AchievementsSection = () => {
  return (
    <section>
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })} */}

          {skills.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col gap-2 justify-center items-center self-end"
              >
                <Image alt={item.title} src={item.src} width={70} height={50} />
                <div className="text-gray-200">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
