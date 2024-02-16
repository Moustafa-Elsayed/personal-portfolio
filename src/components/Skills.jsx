import React from "react";
import CodeIcon from "@mui/icons-material/Code";
const data = [
  {
    icon: <CodeIcon />,
    title: "ui&ux",
    desc: "jdfhdljfhljdfh",
  },
  {
    icon: <CodeIcon />,
    title: "Frontend Developing",
    desc: "Making Front End of The Web and Use The Lastest Features OF FrameWorks and Predecessor .",
  },
  {
    icon: <CodeIcon />,
    title: "Mobile App Developer",
    desc: "jdfhdljfhljdfh",
  },
  {
    icon: <CodeIcon />,
    title: "ui&ux",
    desc: "jdfhdljfhljdfh",
  },
];
const Skills = () => {
  return (
    <section className="text-black">
      <div className="flex flex-row gap-4">
        {data.map((item) => {
          return (
            <div key={item.id} className="bg-gray-500 p-8 w-full h-full rounded-lg">
              <div >{item.icon}</div>
              <div className="text-white pt-3 pb-3">{item.title}</div>
              <div>{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
