import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
const Footer = () => {
  return (
    <section className="bg-black border-t border-white">
      <div className="flex flex-col justify-center items-center gap-7 p-10 ">
        <div className="flex flex-row gap-3 justify-center items-center">
          <EmailIcon />
          <span className="text-xl md:text-2xl">moelsayed949@gmail.com</span>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center">
          <LocalPhoneIcon />{" "}
          <span className="text-xl md:text-2xl">+0201002602130</span>
        </div>
        <h1 className="text-center text-xl md:text-2xl text-[#ADB7BE]">
          You may also find me on these platforms!
        </h1>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <GitHubIcon
              sx={{
                fontSize: "45px",
                color: "white",
              }}
            />
          </Link>
          <Link href="linkedin.com">
            <FacebookIcon
              sx={{
                fontSize: "45px",
                color: "blue",
              }}
            />
          </Link>
          <Link href="linkedin.com">
            <InstagramIcon
              sx={{
                fontSize: "45px",
                color: "#df456c",
              }}
            />
          </Link>
          <Link href="linkedin.com">
            <LinkedInIcon
              sx={{
                fontSize: "45px",
                color: "#0a66c2",
              }}
            />
          </Link>
          <Link href="linkedin.com">
            <XIcon
              sx={{
                fontSize: "45px",
                color: "black",
              }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
