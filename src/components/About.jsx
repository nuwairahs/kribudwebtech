import React from "react";
import hero from "../assets/about.png";
import { IoIosCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
const About = () => {
  return (
    <div id="about" className="w-full max-lg:flex-col h-[100vh] flex  ">
      <div className="w-[40%] relative max-lg:w-full h-full flex justify-start">
        <div className="w-full h-full flex items-center justify-end  absolute">
          <div className="h-8/12 max-lg:h-full w-7/12 bg-gradient-to-r from-yellow-700   via-amber-300 to-amber-200">
            <img
              src={hero}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="w-7/12 bg-[#000000] max-lg:w-full h-full"></div>
      </div>
      <div className="w-[60%] max-lg:w-full max-lg:p-8 h-full p-20 px-30 gap-6 font-poppins flex flex-col ">
        <h1 className="font-semibold text-[#333333] max-lg:text-3xl  text-7xl">
          About us
        </h1>

        <p className="font- text-lg max-lg:text-sm mt-3 lg:w-9/12 text-neutral-500">
          We develop high quality bespoke web and mobile applications for
          organizations, institutions and SMEs
          <br />
          Our team is well vast in software development and is ready to help
          develop the applications of your choice. We take responsibility for
          building custom software solutions that caters for automation of your
          business processes and improve efficiency
        </p>
        <div className="font-inter flex flex-col gap-2 text-neutral-700 font-semibold">
          <p className="flex gap-2 items-center">
            <IoIosCall className="text-xl" />
            +91 7780133244
          </p>
          <p className="flex items-center gap-2">
            <IoMailOutline className="text-xl" />
            admin@kribudwebtech.com
          </p>
        </div>
        <a
          href="#contact"
          className="font-semibold w-[30%] max-lg:w-fit max-lg:px-8 text-center text-white mt-10 bg-neutral-900 rounded-full py-4 px-4"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default About;
