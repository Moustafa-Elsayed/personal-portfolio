import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-96 flex flex-col">
      {/* Image Section */}
      <div
        className="h-2/3 rounded-t-xl relative"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-4">
            <Link href={gitUrl}>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white transition-colors duration-300">
                <CodeBracketIcon className="h-8 w-8 text-white " />
              </div>
            </Link>
            <Link href={previewUrl}>
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-white transition-colors duration-300">
                <EyeIcon className="h-8 w-8 text-white " />
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="h-1/3 p-4 flex flex-col justify-center text-center">
        <h5 className="text-xl font-semibold mb-2 text-black dark:text-white">{title}</h5>
        <p className="text-gray-700 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
