/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDelete, selectCarts } from "../../redux/slices/cartSlice";
import { AppTitle } from "../share";
import CartItem from "./CartItem";

function Baskets() {
  const allFoodsOfCartRedux = useSelector(selectCarts);
  const dispatch = useDispatch();

  useEffect(() => {
    allFoodsOfCartRedux?.map((item) => {
      if (item.amounts.length === 0) {
        dispatch(cartDelete(item.id));
        return true;
      }
      return;
    });
  }, [allFoodsOfCartRedux, dispatch]);

  return (
    <div className="col-span-2 p-3 py-6">
      <AppTitle firstText="Products" />
      <br />
      {allFoodsOfCartRedux?.map((item, key) => (
        <CartItem item={item} key={key} />
      ))}
    </div>
  );
}

export default Baskets;
