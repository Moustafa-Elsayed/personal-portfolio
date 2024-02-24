import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-blue-500 border-blue-500 dark:text-yellow-500 dark:border-yellow-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-blue-500 dark:hover:border-yellow-500";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
