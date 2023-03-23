/* eslint-disable react/style-prop-object */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cartDelete,
  selectAllCart,
  selectCarts,
} from "../../redux/slices/cartSlice";
import { AppTitle, Button } from "../share";
import NotProduct from "../share/NotProduct";
import CartItem from "./CartItem";

function Baskets() {
  const allFoodsOfCartRedux = useSelector(selectCarts);
  const dispatch = useDispatch();
  const [type, setType] = useState("select");

  const numberOfCart = (no_of_Carts) => {
    switch (no_of_Carts) {
      case 0:
        return "No Food";
      case 1:
        return "1 Food";

      default:
        return `${no_of_Carts} Foods`;
    }
  };

  const toggleCartHandler = (obj) => {
    dispatch(selectAllCart(obj));
    setType(type === "select" ? "unselect" : "select");
  };

  useEffect(() => {
    !allFoodsOfCartRedux.length && setType("select");

    allFoodsOfCartRedux?.map((item) => {
      if (item.amounts.length === 0) {
        dispatch(cartDelete(item.id));
        return true;
      }
      return;
    });
  }, [allFoodsOfCartRedux, dispatch]);

  return (
    <div className="lg:col-span-2 col-span-full p-3 py-6">
      <AppTitle
        firstText="There are have"
        secondText={`${numberOfCart(allFoodsOfCartRedux.length)}`}
      />

      <div className="mt-14 text-right">
        {!!allFoodsOfCartRedux.length && (
          <Button
            text={`${type} All foods`}
            style="mb-4 !bg-black"
            handelClick={() => toggleCartHandler({ type })}
          />
        )}

        {allFoodsOfCartRedux?.map((item, key) => (
          <CartItem item={item} key={key} />
        ))}
      </div>

      <NotProduct ArrayData={allFoodsOfCartRedux} />
    </div>
  );
}

export default Baskets;
