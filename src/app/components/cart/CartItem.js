import React from "react";
import { Button } from "../share";
import { foodQuantityUpdate } from "./foodQuantityUpdate";
import { GiChickenOven, GiCow } from "react-icons/gi";
import { GrRestaurant } from "react-icons/gr";

function CartItem({
  id = "",
  name = "",
  description = "",
  amounts = [],
  img = "",
}) {
  return (



    <div className="bg-white p-4 lg:flex gap-1 items-center justify-between rounded-md mb-3">
      <img
        loading="lazy"
        src={img}
        alt="food img"
        className="lg:w-[80px] lg:h-[80px] w-[200px] h-[200px] object-cover rounded-md mx-auto"
      />

      <div className="p-3 w-5/6">
        <GiChickenOven size={25} className="mb-1" />
        <h3 className="uppercase mb-1">{name}</h3>
        <p className={`text-sm line-clamp-3`}>{description}</p>

        <div className="flex items-center gap-3">
          {amounts?.map((item, key) => (
            <div
              className="flex flex-col gap-3 mt-3 border border-[#999] px-3 py-2 rounded-md"
              key={key}
            >
              {item.name === "chicken" && <GiChickenOven size={20} />
              }
              {item.name === "cow" && <GiCow size={20} />}
              {item.name !== ("cow" || "chicken") && <GrRestaurant size={20} />}
              <div className="flex items-center font-bold gap-2">
                <p className="price">1</p>
                <p>×</p>
                <p className="price">5</p>
                <p className="price">=</p>
                <p className="price">5</p>
              </div>
              <div className="flex items-center gap-2">
                <Button text="-" />
                <p>452</p>
                <Button text="+" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
