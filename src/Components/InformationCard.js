import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function InformationCard({ title, description, icon }) {
  return (
    <div className="relative border-2 border-gray-300 rounded-lg bg-white p-8 hover:bg-blue-100 transition-colors duration-300">
      <span className="absolute top-[-24px] left-1/2 transform -translate-x-1/2 p-2 bg-blue-100 rounded-full">
        <FontAwesomeIcon className="text-blue-600 text-2xl" icon={icon} />
      </span>
      <p className="mt-16 mb-10 text-black font-bold text-2xl font-poppins tracking-wide">{title}</p>
      <p className="text-gray-700 text-lg font-rubik leading-6 tracking-wide">{description}</p>
    </div>
  );
}

export default InformationCard;
