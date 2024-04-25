import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Close, Menu, Telegram, Twitter } from "@mui/icons-material";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };
  return (
    <nav className="max-w-7xl mx-auto pt-5 pb-4 lg:px-10 top-0 sticky z-50  backdrop-blur-lg border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0">
            <img
              className="h-6 w-full sm:h-10 mr-2 lg:h-9 md:h-9"
              src={logo}
              alt=""
            />
          </div>
          <ul className="hidden lg:flex text-base space-x-12">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                onSetActive={() => handleSetActiveLink("home")}
              >
                <a href="" className={activeLink === "home" ? "active" : ""}>
                  HOME
                </a>
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="aboutUs"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                onSetActive={() => handleSetActiveLink("aboutUs")}
              >
                <a className={activeLink === "aboutUs" ? "active" : ""} href="">
                  About US
                </a>
              </ScrollLink>
            </li>
            <li>
              <a className="" href="">
                Tokenomics
              </a>
            </li>
            <li>
              <ScrollLink
                to="roadmap"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                onSetActive={() => handleSetActiveLink("roadmap")}
              >
                <a className={activeLink === "roadmap" ? "active" : ""} href="">
                  Roadmap
                </a>
              </ScrollLink>
            </li>
          </ul>
          <div className="hidden sm:flex cursor-pointer sm:gap-2 lg:flex lg:gap-2 lg:items-center">
            <a href="#" className="border py-2 px-2">
              <Telegram />
            </a>
            <a href="#" className="border py-2 px-2">
              <Twitter />
            </a>
            <a
              href="#"
              className="border lg:flex py-2 px-4 sm:hidden cursor-pointer text-base font-bold bg-gradient-to-tl from-[#4695FF] to-[#0062E8] "
            >
              Buy Now
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={handleMenu} className="ease-in-out duration-1000">
              {menuOpen ? <Close /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center">
            <ul className="text-center text-xl">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  onSetActive={() => handleSetActiveLink("home")}
                  onClick={()=>setMenuOpen(false)}
                >
                  <a href="" className={activeLink === "home" ? "active" : ""}>
                    HOME
                  </a>
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="aboutUs"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  onSetActive={() => handleSetActiveLink("aboutUs")}
                  onClick={()=>setMenuOpen(false)}
                >
                  <a
                    className={activeLink === "aboutUs" ? "active" : ""}
                    href=""
                  >
                    About US
                  </a>
                </ScrollLink>
              </li>
              <li>
                <a className="" href="">
                  Tokenomics
                </a>
              </li>
              <li>
                <ScrollLink
                  to="roadmap"
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  onSetActive={() => handleSetActiveLink("roadmap")}
                  onClick={()=>setMenuOpen(false)}
                >
                  <a
                    className={activeLink === "roadmap" ? "active" : ""}
                    href=""
                  >
                    Roadmap
                  </a>
                </ScrollLink>
              </li>
            </ul>
            <div className="mt-3 flex flex-col gap-2 items-center">
              <div className="flex gap-2">
                <a href="#" className="border py-1 px-1">
                  <Telegram />
                </a>
                <a href="#" className="border py-1 px-1">
                  <Twitter />
                </a>
              </div>
              <a
                href="#"
                className="border py-1 px-3 text-base font-bold bg-gradient-to-tl from-[#4695FF] to-[#0062E8] "
              >
                Buy Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
