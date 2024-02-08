"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>NextJs</li>
        <li>React Native</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>Materuil ui</li>
        <li>Sass</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];
const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4  xl:gap-16 sm:py-16 xl:px-16 ">
        <Image
          src="/images/about-image.png"
          alt="AboutMe"
          width={500}
          height={500}
          className="rounded-md"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-xl ">
            I am a <span className="text-blue-500">Frontend web</span> and{" "}
            <span className="text-blue-500">Mobile App</span> developer with a
            passion for creating interactive and responsive web applications. I
            have experience working with JavaScript, ReactJs,NextJs,React
            Native, Redux, HTML, CSS, and Git. I am a quick learner and I am
            always looking to expand my knowledge and skill set. I am a team
            player and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("tools")}
              active={tab === "tools"}
            >
              Tools
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
