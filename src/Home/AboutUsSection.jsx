import React from "react";
import video from "../assets/video.mp4";

const AboutUsSection = () => {
  return (
    <div
      id="aboutUs"
      className="max-w-7xl relative mt-32 sm:mr-5 sm:ml-5 ml-5 lg:mt-[500px] mb-20 mx-auto lg:px-16"
    >
      <div className="lg:flex sm:flex sm:flex-row sm:text-start lg:flex-row sm:gap-5 flex flex-col text-center">
        <div>
          <h1 className="lg:text-5xl text-3xl sm:text-3xl ">About Lin Kuei</h1>
          <p className="font-sans sm:text-xs sm:tracking-widest text-xs lg:text-base lg:w-[70%] mb-5">
            Lorem ipsum dolor sit amet consectetur. Mi at vitae eget molestie
            habitant. Rutrum nunc sed sit est mauris ac nisl. Phasellus dictumst
            auctor lectus ac eget ante. Turpis gravida cursus mattis tincidunt
            pharetra sed vitae massa. Nisl a justo massa adipiscing nisl tortor
            tortor a. Tincidunt gravida dapibus ipsum risus placerat ac iaculis
            pellentesque. Accumsan ac aliquam massa scelerisque lobortis nulla.
            Nunc tincidunt tempus sit convallis vitae pretium pulvinar duis
            proin. Nisl volutpat sit morbi dictum amet auctor diam.
          </p>
        </div>
        <div>
          <video className="border" autoPlay loop controls muted>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="lg:flex lg:gap-16 lg:items-center sm:grid sm:grid-cols-4 grid grid-cols-2 mt-10 gap-2 lg:justify-center lg:mt-6">
        <div className="ruslan-display-regular text-center ">
          <h1 className="mb-2 text-base">Ticker</h1>
          <a href="" className="bg-[#05123F] rounded-xl px-4 py-4  lg:px-10 lgpy-4">
            <span className="text-2xl  bg-gradient-to-t from-[#4695FF] to-[#0062E8] text-transparent bg-clip-text">
              SLINK
            </span>
          </a>
        </div>
        <div className="ruslan-display-regular text-center lg:mb-0 mb-4">
          <h1 className="mb-2 text-base">Total Supply</h1>
          <a href="" className="bg-[#05123F] rounded-xl px-4 py-4 lg:px-10 lg:py-4">
            <span className="text-2xl  bg-gradient-to-t from-[#4695FF] to-[#0062E8] text-transparent bg-clip-text">
              100M
            </span>
          </a>
        </div>
        <div className="ruslan-display-regular text-center">
          <h1 className="mb-2 text-base">TAX</h1>
          <a href="" className="bg-[#05123F] rounded-xl px-4 py-4 lg:px-10 lg:py-4">
            <span className="text-2xl  bg-gradient-to-t from-[#4695FF] to-[#0062E8] text-transparent bg-clip-text">
              6% / 6%
            </span>
          </a>
        </div>
        <div className="ruslan-display-regular text-center">
          <h1 className="mb-2 text-base">LP locked for</h1>
          <a href="" className="bg-[#05123F] rounded-xl sm:px-1 sm:py-3 px-2 py-4 lg:px-10 lg:py-4">
            <span className="text-2xl  bg-gradient-to-t from-[#4695FF] to-[#0062E8] text-transparent bg-clip-text">
              6 MONTHS
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
