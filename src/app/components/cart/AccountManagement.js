/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCarts } from "../../redux/slices/cartSlice";
import AccountItem from "./AccountItem";
import { Button } from "../share";

function AccountManagement() {
  const allFoodsOfCartRedux = useSelector(selectCarts);
  const [allActiveShopping, setAllActiveShopping] =
    useState([]);
  const [proceedTotalAmount, setProceedTotalAmount] = useState(0);

  const proceedHandler = () => {

  };

  // const proceedTotalAmountFun = (amount=0) => {
  //   setProceedTotalAmount(proceedTotalAmount => proceedTotalAmount + amount);
  // }

  useEffect(() => {
    // find shop for ready to proceed
    const result = allFoodsOfCartRedux.map(
      (item) => item.categoryShop > 0 && item
    );
    const data = result.filter(Boolean);
    setAllActiveShopping(data);

  }, [allFoodsOfCartRedux]);

  useEffect(() => {
    let sunResult = allActiveShopping.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue.amountsTotal;
    }, 0);
    setProceedTotalAmount(sunResult)
  }, [allActiveShopping]);


  return (
    <div className="lg:col-span-1 col-span-3 shadow-md bg-white py-10 px-2">
      <h3 className="text-center my-2 uppercase text-3xl">Order Summary</h3>
      {allActiveShopping?.map((item, key) => (
        <AccountItem {...item} key={key} />
      ))}
      <div className="mx-6 mt-10">
        <h1 className="font-bold text-center md:text-3xl"> Total : {proceedTotalAmount} TK</h1>
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
