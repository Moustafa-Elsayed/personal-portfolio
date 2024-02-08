"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
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
      "React/Mui/React Router Dom/Framer motion /Aos animation/Formik/Yup validation/Redux/i18n/multilanguage",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/kasper",
    previewUrl: "https://kasper-one.vercel.app/",
  },
  {
    id: 3,
    title: "NFT-marketPlace Application",
    description:
      "NFT-marketPlace APP (React Native Expo) A non-fungible token (NFT) is a unique cryptographic asset used to create and authenticate ownership of digital assets. NFTs are used with cartoons, music, film and video clips, JPEGs, postcards, sports trading cards, and ",
    image: "/images/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Moustafa-Elsayed/NFT-marketPlace",
    previewUrl: "https://github.com/Moustafa-Elsayed/NFT-marketPlace",
  },
  {
    id: 4,
    title: "Movies Application",
    description: "movies streaming App by React Native cli and TMDB APi ",
    image: "/images/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Moustafa-Elsayed/MoviesTime",
    previewUrl: "https://github.com/Moustafa-Elsayed/MoviesTime",
  },
  {
    id: 5,
    title: "MarketEase Website",
    description:
      "e-commerce project:react js/ redux toolkit/mui/rtk/framer motion/aos animation",
    image: "/images/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/MarketEase",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "AdminDashboard Website",
    description: "React/Material Ui/ React Router Dom/ ",
    image: "/images/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Moustafa-Elsayed/AdminDashboard",
    previewUrl: "https://admin-dashboard-eight-indol.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="sm:pt-28">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
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
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
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
