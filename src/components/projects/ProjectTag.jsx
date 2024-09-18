import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-blue-500 text-white border-blue-500"
    : "bg-gray-200 text-gray-700 hover:bg-blue-100 border-gray-400 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-5 py-2 transition-all duration-300 ease-in-out`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
