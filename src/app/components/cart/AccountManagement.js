/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSuccessOrderFromCart, orderHistoryCollect, selectCarts } from "../../redux/slices/cartSlice";
import AccountItem from "./AccountItem";
import { Button } from "../share";
import useTimeFormatterHook from "../../hook/useTimeFormatterHook";

function AccountManagement() {
  const dispatch = useDispatch();
  const { timeData, customizesTimeFormatter } = useTimeFormatterHook();
  const allFoodsOfCartRedux = useSelector(selectCarts);
  const [allActiveShopping, setAllActiveShopping] = useState([]);
  const [proceedTotalAmount, setProceedTotalAmount] = useState(0);

  const proceedHandler = () => {
    customizesTimeFormatter();
    let value = {
      id: String(new Date()),
      timeFormat: timeData,
      orderData: allActiveShopping,
    };
    if (proceedTotalAmount > 0) {
      dispatch(orderHistoryCollect(value));
      dispatch(deleteSuccessOrderFromCart());
    }else{
      alert("Select product first...!!! ")
    }

  };

  useEffect(() => {
    // find shop for ready to proceed all data
    const result = allFoodsOfCartRedux.map(
      (item) => item.categoryShop > 0 && item
    );
    const purifyCategoryShop = result.filter(Boolean);
    const purifyAmountsData = purifyCategoryShop.map((v) => {
      let result = v.amounts.map((val) => val.shopping === true && val);
      const purifyAmount = result.filter(Boolean);
      return { ...v, amounts: purifyAmount };
    });

    setAllActiveShopping(purifyAmountsData);
  }, [allFoodsOfCartRedux]);

  useEffect(() => {
    // Get proceed Total amount
    let sunResult = allActiveShopping.reduce(function (
      accumulator,
      currentValue
    ) {
      return accumulator + currentValue.amountsTotal;
    },
    0);
    setProceedTotalAmount(sunResult);
  }, [allActiveShopping]);

  return (
    <div className="lg:col-span-1 col-span-3 shadow-md bg-white py-10 px-2">
      <h3 className="text-center my-2 uppercase text-3xl">Order Summary</h3>
      {allActiveShopping?.map((item, key) => (
        <AccountItem {...item} key={key} />
      ))}
      <div className="mx-6 mt-10">
        <h1 className="font-bold text-center md:text-3xl">
          {" "}
          Total : {proceedTotalAmount} TK
        </h1>
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
