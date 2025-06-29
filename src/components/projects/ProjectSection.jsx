"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 4,
    title: "Amazon clone",
    description:
      "Amazon clone Built With: Next JS ,Typescript , Tailwind ,Redux Toolkit ,stripe and Redux persists",
    image: "/images/amazon.png" || "",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/amazon-clone",
    previewUrl:
      "https://amazon-clone-b43kipbyl-moustafa-elsayeds-projects.vercel.app/",
  },
  {
    id: 8,
    title: "AdminDashboard Website",
    description: "React/Material Ui/ React Router Dom/ ",
    image: "/images/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/AdminDashboard",
    previewUrl: "https://admin-dashboard-eight-indol.vercel.app/",
  },
  {
    id: 6,
    title: "online-course platform",
    description:
      "Mern Stack Project Build With:Next JS /Redux Toolkit/Material Ui /Express JS /Mango DB ",
    image: "/images/image8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/onlinecourse",
    previewUrl: "https://onlinecourse-ho3r.vercel.app/",
  },
  {
    id: 9,
    title: "Movies Application",
    description: "movies streaming App by React Native cli and TMDB APi ",
    image: "/images/moviestime.png" || "",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Moustafa-Elsayed/MoviesTime",
    previewUrl: "https://github.com/Moustafa-Elsayed/MoviesTime",
  },
  {
    id: 1,
    title: "Onix Website",
    description:
      " React/Mui/React Router Dom/Framer motion /Aos animation/Formik/Yup validation ",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/onix",
    previewUrl: "https://onix-alpha.vercel.app/",
  },
  {
    id: 2,
    title: "Kasper E-commerce Website",
    description:
      "Mui/React Router Dom/Framer motion /Aos animation/Formik/Yup validation/Redux/i18n",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/kasper",
    previewUrl: "https://kasper-one.vercel.app/",
  },
  {
    id: 3,
    title: "NFT-marketPlace Application",
    description: "NFT-marketPlace APP (React Native Expo)  ",
    image: "/images/nft.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Moustafa-Elsayed/NFT-marketPlace",
    previewUrl: "https://github.com/Moustafa-Elsayed/NFT-marketPlace",
  },
  {
    id: 5,
    title: "MarketEase Website",
    description:
      "e-commerce project:react js/ redux toolkit/mui/rtk/framer motion/aos animation",
    image: "" || "/images/no.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/MarketEase",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Weather App",
    description: "Weather App(react native cli) with weather Api",
    image: "/images/weather.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Moustafa-Elsayed/Weather",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Eflyer Website",
    description:
      "Eflyer E-commerce  Website: React js/Redux toolkit/Mui/React React Dom/",
    image: "/images/eflyer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/eflyer",
    previewUrl: "https://eflyer-mocha.vercel.app/",
  },
  {
    id: 11,
    title: "Facebook-app clone",
    description:
      "Facebook clone Built With: React Native cli ,vector icons,stripe and react-navigation ",
    image: "/images/fc.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Moustafa-Elsayed/FaceBookClone",
    previewUrl: "https://github.com/Moustafa-Elsayed/FaceBookClone",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const uniqueProjectsData = projectsData.filter(
    (project, index, self) =>
      index === self.findIndex((p) => p.id === project.id)
  );

  const filteredProjects = uniqueProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="sm:pt-28 pt-24">
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
        Projects
      </h2>
      <div className="flex justify-center items-center gap-3 mb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
