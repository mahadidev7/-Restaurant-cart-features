import React from "react";
import { Header } from "../components";
import { AccountManagement, Baskets } from "../components/cart";
import Footer from "../components/Footer";

function CartPage() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 MH_container !my-24">
        <Baskets />
        <AccountManagement />
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
