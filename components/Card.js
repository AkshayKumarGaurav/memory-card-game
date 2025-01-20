import React from "react";

const Card = ({ value, isFlipped, onClick }) => {
  return (
    <div
      className={`w-16 h-20 m-2 cursor-pointer ${
        isFlipped ? "bg-blue-500" : "bg-gray-400"
      } flex items-center justify-center`}
      onClick={onClick}
    >
        {isFlipped && <span className="text-white text-lg">{value}</span>}
    </div>
  );
};

export default Card;
