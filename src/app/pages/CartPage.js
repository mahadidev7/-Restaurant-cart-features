import React from "react";
import { Header } from "../components";
import { AccountManagement, Baskets } from "../components/cart";

function CartPage() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 MH_container !my-5">
        <Baskets />
        <AccountManagement />
      </div>
    </>
  );
}

export default CartPage;
