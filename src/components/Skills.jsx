import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import DevicesIcon from "@mui/icons-material/Devices";
const data = [
  {
    icon: <DevicesIcon sx={{}}/>,
    title: "Frontend Developing",
    desc: "Making Front End of The Web and Use The Lastest Features OF FrameWorks and Predecessor .",
  },
  {
    icon: <PhoneAndroidIcon />,
    title: "Mobile App Developer",
    desc: "Designing , Developing Mobile Apps With Cross Platform Framework For Android , IOS .",
  },
  {
    icon: <DesignServicesIcon />,
    title: "UX/UI Design",
    desc: "Designing The Web Looking Of Colors, Themes and Fonts With Multi Programms Like Figma , AdobeXD .",
  },
  {
    icon: <ManageHistoryIcon />,
    title: "SEO Optimize",
    desc: "Making Sure That The Design Works Perfectly,Loading Speed and Testing For Errors .",
  },
  {
    icon: <DeveloperBoardIcon />,
    title: "Developing My Skill",
    desc: "Making Sure That The Design Works Perfectly,Loading Speed and Testing For Errors .",
  },
];
const Skills = () => {
  return (
    <section className="text-black">
      <div className="text-center pb-6 ">
        <span className=" text-black dark:text-white p-3 rounded-lg border border-gray-500 font-bold">
          What I Can Offer
        </span>
      </div>

      <div className="flex flex-row gap-2 ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-blue-200 p-8 w-full h-full rounded-lg"
            >
              <div className="bg-white rounded-md w-fit p-2">{item.icon}</div>
              <div className="text-black font-bold pt-3 pb-3">{item.title}</div>
              <div className="text-black ">{item.desc}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
