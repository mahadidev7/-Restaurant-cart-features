import React from "react";
import { Button } from "../share";
import { GiChickenOven, GiCow } from "react-icons/gi";

function CartItem() {
  return (
    <div className="bg-[#fff] p-4 lg:flex gap-1 items-center justify-between rounded-md mb-3">
      <img
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="food img"
        className="lg:w-[80px] lg:h-[80px] w-[200px] h-[200px] object-cover rounded-md mx-auto"
      />

      <div className="p-3">
        <GiChickenOven size={25} className="mb-1" />
        <h3 className="uppercase mb-1">MR. MODERATE</h3>
        <p className={`text-sm line-clamp-3`}>
          Burger, coke, fries, chicken nuggets Objectively pontificate quality
          models before intuitive information. Dramatically Burger,
        </p>
        <p>7 × 3 = 20</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Button text="-" />
        <p>452</p>
        <Button text="+" />
      </div>
    </div>
  );
}

export default CartItem;
