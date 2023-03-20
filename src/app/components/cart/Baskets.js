import React from "react";
import { useSelector } from "react-redux";
import { selectFoods } from "../../redux/slices/foodSlice";
import { AppTitle } from "../share";
import CartItem from "./CartItem";

function Baskets() {
  const allFoodsOfCartRedux = useSelector(selectFoods);
console.log('====================================');
console.log(allFoodsOfCartRedux);
console.log('====================================');
  return (
    <div className="col-span-2 p-3 py-6">
      <AppTitle firstText="Products" />
      <br />
      {
        allFoodsOfCartRedux?.map((item, key) => <CartItem {...item} key={key} />)
      }
      
    </div>
  );
}

export default Baskets;
