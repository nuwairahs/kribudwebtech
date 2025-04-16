import React from "react";
import ServiceCard from "./ServiceCard";
import { FaLaptopCode, FaMobileAlt, FaGlobe, FaUserCog } from "react-icons/fa";
const Services = () => {
  const services = [
    {
      name: "Web Development",
      des: "We specialize in creating and optimizing high-quality, custom websites for businesses and organizations of all sizes. Building mobile-friendly and easy-to-use websites and applications for clients.",
      icon: <FaLaptopCode className="text-4xl " />,
      bg: "bg-yellow-200",
    },
    {
      name: "Mobile App Development",
      des: "We develop high-quality, custom cross-platform mobile applications that are robust and optimized for performance, scalability, and accessibility.",
      icon: <FaMobileAlt className="text-4xl " />,
      bg: "bg-green-200",
    },
    {
      name: "Domain and Hosting Services",
      des: "We provide domain registration and web hosting services to individuals and organizations to enable them gain visibility in the digital space.",
      icon: <FaGlobe className="text-4xl " />,
      bg: "bg-rose-200",
    },
    {
      name: "General IT Consultations",
      des: "Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.",
      icon: <FaUserCog className="text-4xl " />,
      bg: "bg-blue-200",
    },
  ];

  return (
    <div
      id="services"
      className="w-full  h-fit font-inter flex flex-col px-20 max-lg:p-0  py-20 items-center gap-2 bg-gradient-to-br from-orange-50 via-white to-white "
    >
      <div className="w-full h-full flex flex-col gap-3 px-30 max-lg:py-10 max-lg:px-3  max-lg:rounded-none  text-white items-center rounded-xl py-30 bg-gradient-to-r from-black via-neutral-950 to-neutral-950">
        <h1 className="uppercase text-xl max-lg:text-sm font-semibold">
          What we do
        </h1>
        <p className="font-semibold text-5xl max-lg:px-5 max-lg:text-2xl max-lg:leading-7 max-lg:w-full text-center w-7/12 leading-15  font-poppins">
          We are deeply committed to the growth and{" "}
          <span className="text-amber-200">success</span> of our clients.
        </p>
        <div className="w-full grid grid-cols-3 max-lg:px-2 max-lg:grid-cols-1  mt-10 h-fit gap-5 ">
          {services.map((item, index) => {
            return (
              <div key={index}>
                <ServiceCard
                  name={item.name}
                  des={item.des}
                  icon={item.icon}
                  bg={item.bg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
