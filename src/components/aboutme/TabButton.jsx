import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-blue-500 border-b border-blue-500 dark:text-yellow-400 dark:border-yellow-400"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold  hover:text-blue-500 dark:hover:text-yellow-400  ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
