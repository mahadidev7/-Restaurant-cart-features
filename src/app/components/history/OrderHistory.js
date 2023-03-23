/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { OrderProductItem } from "../cart";
import { Button } from "../share";

function OrderHistory({ historyData }) {
  const summary = historyData.orderData;
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sunResult = summary.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.amountsTotal;
    }, 0);
    setTotalPrice(sunResult);
  }, [summary]);
  return (
    <div className="text-center my-3">
      <h3 className="capitalize text-3xl my-7">Thank you for your Order</h3>
      <div className="grid grid-cols-3 w-full">
        <div className="col-span-2 border-r border-[#c8c4c4]">
          {summary?.map((item) => (
            <OrderProductItem {...item} />
          ))}
        </div>
        <div className="">
          <div className="mt-3 text-center">
            <h1 className="font-bold text-center md:text-3xl underline my-5">
              {" "}
              Total : {totalPrice} TK
            </h1>
            <Button
              text="Download"
              style="!bg-secondary"
              handelClick={() => window.print()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
