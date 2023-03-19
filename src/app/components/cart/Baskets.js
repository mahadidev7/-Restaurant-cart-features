import React from "react";
import { AppTitle } from "../share";
import CartItem from "./CartItem";

function Baskets() {
  return (
    <div className="col-span-2 p-3 py-6">
      <AppTitle firstText="Products" />
      <br />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}

export default Baskets;
