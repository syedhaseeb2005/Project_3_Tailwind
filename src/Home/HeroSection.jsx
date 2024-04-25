import React, { useState } from "react";
import { ContentCopy } from "@mui/icons-material";
import img from "../assets/img1.gif";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <div id="home" className="max-w-7xl relative mx-auto lg:px-16">
        <div className="lg:flex lg:mt-3 sm:flex-row sm:mt-32 mt-4 flex flex-col items-center lg:flex-row lg:items-center md:justify-center ">
          <div>
            <img
              src={img}
              className="lg:h-[500px] h-[350px] lg:w-[550px]"
              alt="img"
            />
          </div>
          <div className="lg:flex lg:flex-col flex flex-col sm:mx-5 gap-6 ml-3 lg:ml-16">
            <div className="lg:text-9xl lg:text-start sm:text-6xl mt-3 text-center break-normal text-5xl unifrakturcook-bold font-bold tracking-widest">
              Lin- Kp<span>ue</span>i
            </div>
            <div className="flex flex-col gap-4">
              <a
                href=""
                className="lg:flex sm:flex-row flex flex-col gap-1 items-center rounded-2xl p-2 bg-[#05123F] text-white"
              >
                <span className="lg:text-sm sm:text-xs text-sm">
                  Contract: 0x786A2e06EBC4b4679393977616ab911946Fdcbea
                </span>{" "}
                <span className="font-sans">
                  <ContentCopy />
                </span>
              </a>

              <a
                href=""
                className="lg:flex flex justify-center gap-1 items-center rounded-2xl p-2 bg-[#05123F] text-white"
              >
                <span className="lg:text-sm text-sm">
                  Mail: Reflection@rlp.com
                </span>{" "}
                <span className="font-sans">
                  <ContentCopy />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="hidden lg:block lg:fixed lg:top-52 lg:right-5">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="activeLink"
            onSetActive={() => handleSetActiveLink("home")}
          >
            <div className={activeLink === "home" ? "activeLink" : ""}></div>
          </ScrollLink>
          <ScrollLink
            to="aboutUs" // Make sure this matches the id of the section you want to scroll to
            smooth={true}
            duration={500}
            spy={true}
            activeClass="activeLink"
            onSetActive={() => handleSetActiveLink("aboutUs")}
          >
            <div className={activeLink === "aboutUs" ? "activeLink" : ""}></div>
          </ScrollLink>
        </div> */}
      </div>
    </>
  );
};

export default HeroSection;
