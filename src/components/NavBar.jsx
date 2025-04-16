import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AnimatePresence, motion } from "motion/react";

const NavBar = () => {
  const menu = [
    { name: "Home", path: "#" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Clients", path: "#clients" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full p-3 text-white  bg-black">
        <p className="text-center font-inter text-xs font-semibold">
          Elevate Your Online Presence with Stunning Websites!{" "}
          <span className="max-lg:hidden">
            {" "}
            Custom, Responsive, and SEO-Optimized Web Solutions. Let's Build
            Something Amazing Together!
          </span>
        </p>
      </div>
      <div className="font-inter h-fit flex max-lg:px-5  justify-between items-center z-30 w-full sticky bg-white top-0 py-3 px-10">
        <a href="#">
          <img src={logo} className="w-15 h-15 object-contain" />
        </a>
        <div className="flex max-xl:hidden">
          {menu.map((item, index) => {
            return (
              <a
                href={item.path}
                className="px-4 py-2 font-semibold text-sm"
                key={index}
              >
                {item.name}
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-3  bg-black max-lg:text-xs text-white font-semibold text-sm"
          >
            Contact
          </a>
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <HiOutlineMenuAlt4 className="text-2xl" />
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="bg-[#ffffff] pt-10 z-40 font-inter lg:hidden top-0 fixed h-full w-full right-0"
          >
            <button
              className="text-4xl w-full flex justify-end px-10"
              onClick={() => setOpen(false)}
            >
              <IoMdClose />
            </button>
            <div className="flex flex-col justify-between items-center h-[80vh]">
              <ul className="flex flex-col text-xl justify-start pt-16 items-center h-fit font-semibold gap-5">
                {menu.map((item, index) => (
                  <a
                    href={item.path}
                    key={index}
                    className="px-2 py-1 text-4xl hover:underline rounded-md hover:bg-neutral-100 cursor-pointer"
                  >
                    <button onClick={() => setOpen(false)}>{item.name}</button>
                  </a>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
