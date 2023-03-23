/* eslint-disable react/style-prop-object */
import React from "react";
import { GiChickenOven, GiCow } from "react-icons/gi";
import { Button } from "../../share";

function PriceSplit({ name = "", price = "", handelCart }) {
  return (
    <div className="">
      {name === "chicken" && (
        <GiChickenOven size={25} className="m-auto mb-1" />
      )}
      {name === "cow" && <GiCow size={25} className="m-auto mb-1" />}
      <p className="text-secondary py-1 rounded-full font-semibold price mb-2 text-center">
        {price || " "} TK
      </p>
      <Button
        handelClick={() => handelCart(name, price)}
      />
    </div>
  );
}

export default PriceSplit;
