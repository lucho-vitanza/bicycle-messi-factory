import React from "react";

const BicyCard = ({ text, urlImg, price, coin }) => {
  return (
    <div className="w-56 h-64 m-2 rounded-lg border border-green-100">
      <div className="w-full h-40 relative">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={urlImg}
          alt=""
        />
      </div>
      <div className="bottom-0 left-0 right-0 p-2">
        <div className="bg-yellow-200 p-3 rounded-lg">
          <p className="mb-1 items-center text-sm font-medium">{price}</p>
          <p className="item-center text-xs">{coin}</p>
          <p className="mt-1 text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default BicyCard;
