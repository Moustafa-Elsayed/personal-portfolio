import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <section className="dark:bg-black bg-white border-t dark:border-white border-black">
      <div className="flex flex-col justify-center items-center gap-7 p-10 ">
        <div className="flex flex-row gap-3 justify-center items-center">
          <EmailIcon className="text-black dark:text-white" />
          <a
            href="mailto:moelsayed949@gmail.com"
            class="text-xl md:text-2xl text-black dark:text-white"
          >
            moelsayed949@gmail.com
          </a>
        </div>
        <div className="flex flex-row gap-3 justify-center items-center text-white">
          <LocalPhoneIcon className="text-black dark:text-white" />
          <a
            href="tel:01559949947"
            class="text-xl md:text-2xl text-black dark:text-white"
          >
            +0201559949947
          </a>
        </div>
        <h1 className="text-center text-xl md:text-2xl text-black dark:text-[#ADB7BE]">
          You may also find me on these platforms!
        </h1>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Moustafa-Elsayed">
            <GitHubIcon
              className="text-black dark:text-white"
              sx={{
                fontSize: "45px",
              }}
            />
          </Link>
          <Link href="/">
            <FacebookIcon
              sx={{
                fontSize: "45px",
                color: "blue",
              }}
            />
          </Link>
          <Link href="/">
            <InstagramIcon
              sx={{
                fontSize: "45px",
                color: "#df456c",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
            <LinkedInIcon
              sx={{
                fontSize: "45px",
                color: "#0a66c2",
              }}
            />
          </Link>
          <Link href="/">
            <XIcon
              className="text-black dark:text-white"
              sx={{
                fontSize: "45px",
              }}
            />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=201559949947">
            <WhatsAppIcon
              className="text-green-800"
              style={{
                fontSize: "45px",
              }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
