import React from "react";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpeg";
const Clients = () => {
  const clientData = [
    { name: "Abroad Room", img: client1 },
    { name: "Nuwairah's", img: client2 },
  ];
  return (
    <div
      id="clients"
      className="w-full h-[50vh] max-lg:h-fit flex flex-col items-center py-10 text-white bg-black "
    >
      <h1 className="font-poppins text-4xl font-semibold">Our Clients</h1>
      <div className="w-8/12 grid grid-cols-2 mt-10 max-lg:w-full max-lg:gap-5  max-lg:grid-cols-1">
        {clientData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-5 items-center">
              <img
                src={item.img}
                className="w-50 rounded-md object-center h-50 object-cover"
              />
              <p className="font-semibold text-xl uppercase font-inter">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
