import React from "react";
import { Header } from "../components";
import { Baskets } from "../components/cart";
import OrderWrapper from "../components/cart/order/OrderWrapper";
import Footer from "../components/Footer";

function CartPage() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 MH_container !my-24">
        <Baskets />
        <OrderWrapper />
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
