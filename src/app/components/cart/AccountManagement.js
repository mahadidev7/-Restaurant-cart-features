/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCarts } from "../../redux/slices/cartSlice";
import AccountItem from "./AccountItem";
import { Button } from "../share";

function AccountManagement() {
  const allFoodsOfCartRedux = useSelector(selectCarts);
  const [allActiveShopping, setAllActiveShopping] =
    useState(allFoodsOfCartRedux);
  const [proceedTotalAmount, setProceedTotalAmount] = useState(0);

  const proceedHandler = () => {
    
  };

  useEffect(() => {
    const result = allFoodsOfCartRedux.map(
      (item) => item.categoryShop > 0 && item
    );
    const data = result.filter(Boolean);
    setAllActiveShopping(data);
  }, [allFoodsOfCartRedux]);

  useEffect(() => {
    // for (let i = 0; i < allActiveShopping.length; i++) {
    //   for (let j = 0; j < allActiveShopping[i].amounts.length; j++) {
    //     if (allActiveShopping[i].amounts[j].shopping) {
    //       setProceedTotalAmount(
    //         (oldAmounts) =>
    //           oldAmounts + allActiveShopping[i].amounts[j].totalPrice
    //       );
    //     }
    //   }
    // }
  }, [allActiveShopping]);

  return (
    <div className="lg:col-span-1 col-span-3 shadow-md bg-white py-10 px-2">
      <h3 className="text-center my-2 uppercase text-3xl">Order Summary</h3>
      {allActiveShopping?.map((item, key) => (
        <AccountItem {...item} key={key} />
      ))}
      <div className="mx-6 mt-10">
        <p className="font-bold text-center"> Total = {proceedTotalAmount}</p>
        <Button
          text="proceed to checkout"
          style="!bg-secondary text-black w-full my-3 py-3"
          handelClick={() => proceedHandler()}
        />
      </div>
    </div>
  );
}

export default AccountManagement;
