/* eslint-disable react/style-prop-object */
import React from "react";
import { GiChickenOven, GiCow } from "react-icons/gi";
import {Button} from "../../share";

function MenuItem({ name = "", description = "", img = "", amounts = [], style='' }) {

  return (
    <div className={`grid gap-1 grid-cols-10 items-center justify-center py-5 mb-2 shadow-lg bg-[#fff] rounded-md px-2 ${style}`}>
      <div className="lg:col-span-2 col-span-full m-auto">
        <img loading="lazy"
          src={img}
          alt="food img"
          className="lg:w-[80px] lg:h-[80px] w-[200px] h-[200px] object-cover rounded-md mx-auto"
        />
      </div>
      <div className="lg:col-span-5 col-span-full">
        <h3 className="uppercase mb-1">{name ? name : " "}</h3>
        <p className={`text-sm line-clamp-3`}>
          {description ? description : " "}
        </p>
      </div>
      <div className="lg:col-span-3 col-span-full">
        <FoodPriceComponent amounts={amounts} />
      </div>
    </div>
  );
}

const FoodPriceComponent = ({ amounts = [] }) => {
  return (
    <div className="grid gap-1 grid-cols-1 items-center text-center col-span-2 lg:mt-0 mt-3">
      <div className="flex gap-5 justify-between items-center">
        {amounts?.map((item, key) => (
          <PriceSplit {...item} />
        ))}
      </div>
    </div>
  );
};

const PriceSplit = ({ name = "", price }) => {
  return (
    <div className="w-full">
    {
      name === "chicken" && <GiChickenOven size={25} className="m-auto mb-1" />
    }
    {
      name === "cow" && <GiCow size={25} className="m-auto mb-1" />
    }
      <p className="bg-secondary py-1 text-white rounded-full font-semibold price mb-2">
        {price || " "} TK
      </p>
      <Button handelClick={() => alert("452")} style="bg-[#333]" />
    </div>
  );
};

export default MenuItem;
