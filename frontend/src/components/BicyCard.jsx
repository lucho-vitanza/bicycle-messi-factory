import React from "react";

function BicyCard({ text, urlImg, price, coin }) {
  return (
    <div className="flex flex-col space-y-2 columns-2">
      <img alt={text} src={urlImg} className="rounded-md h-24 w-24" />
      <section>
        <p>{price}</p>
        <p>{coin}</p>
        <p>{text}</p>
      </section>
    </div>
  );
}

export default BicyCard;
