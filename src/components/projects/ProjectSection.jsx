import React from "react";

const ProjectSection = () => {
  return (
    <section id="projects">
      <h2 className="text-center text-3xl font-semibold">My Projects</h2>
      <div className="flex flex-row gap-5 justify-center items-center mt-10 ">
        <button className="p-4 rounded-full border border-blue-500 text-base md:text-3xl">All</button>
        <button className="p-4 rounded-full border border-blue-500 text-base md:text-3xl">Web</button>
        <button className="p-4 rounded-full border border-blue-500 text-base md:text-3xl">Mobile</button>
      </div>
      <p>Project card</p>
    </section>
  );
};

export default ProjectSection;
