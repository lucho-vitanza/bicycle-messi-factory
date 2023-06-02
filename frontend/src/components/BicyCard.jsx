import React from "react";

const BicyCard = ({ text, urlImg, price, coin }) => {
  return (
    <div className="w-1/2 p-2">
    <div className="sm:w-4 sm:h-40 relative">
      <img
        className="w-6/8 h-24 object-cover rounded-lg"
        src={urlImg}
        alt=""
      />
    </div>
    <div className="bottom-0 left-0 right-0 p-2">
      <div className="bg-white p-2 rounded-lg">
        <p className="mb-1 items-center text-sm font-medium">{price}</p>
        <p className="item-center text-xs">{coin}</p>
        <p className="mt-1 text-sm">{text}</p>
      </div>
      
    </div>
  </div>
  );
};

export default BicyCard;
