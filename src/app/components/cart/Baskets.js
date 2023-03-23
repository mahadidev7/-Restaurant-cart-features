/* eslint-disable react/style-prop-object */
/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartDelete, selectCarts } from "../../redux/slices/cartSlice";
import { AppTitle, Button } from "../share";
import NotProduct from "../share/NotProduct";
import CartItem from "./CartItem";

function Baskets() {
  const allFoodsOfCartRedux = useSelector(selectCarts);
  const dispatch = useDispatch();

  const numberOfCart = (no_of_Carts) => {
    switch (no_of_Carts) {
      case 0:
        return "No product";
      case 1:
        return "1 product";

      default:
        return `${no_of_Carts} products`;
    }
  };

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
      <AppTitle
        firstText="There are have"
        secondText={`${numberOfCart(allFoodsOfCartRedux.length)}`}
      />

      <div className="mt-14 text-right">
      <Button text="select All foods" style="mb-4"/>
        {allFoodsOfCartRedux?.map((item, key) => (
        <CartItem item={item} key={key} />
      ))}
      </div>
      
      <NotProduct ArrayData={allFoodsOfCartRedux} />
    </div>
  );
}

export default Baskets;
