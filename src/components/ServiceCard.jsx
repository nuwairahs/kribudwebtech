import React from "react";

const ServiceCard = ({ icon, name, des, bg }) => {
  return (
    <div
      className={`w-full h-[350px] flex flex-col gap-8 text-black justify-center max-lg:h-fit p-10 ${bg}`}
    >
      <div className="text-black bg-white p-3 w-fit ">{icon}</div>
      <h1 className="font-semibold text-xl underline">{name}</h1>
      <p className="font-medium text-neutral-800">{des}</p>
    </div>
  );
};

export default ServiceCard;
