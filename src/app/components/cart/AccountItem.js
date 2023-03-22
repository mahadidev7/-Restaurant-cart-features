import React, { useEffect, useState } from "react";

function AccountItem({
  id = "",
  name = "",
  description = "",
  img = "",
  amounts = [],
  amountsTotal,
}) {

  return (
    <div className="p-3">
      <div className="">
        <h4 className="uppercase">{name}</h4>
        <table className="table border-separate border border-[#ddd6d6] rounded-md w-full">
          <thead>
            <tr>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {amounts?.map((item, key) => {
              if (item.shopping) {
                return (
                  <tr key={key}>
                    <td>
                      <p>
                         {item.name} - {item?.price}tk
                      </p>
                    </td>
                    <td>
                      <p>{item?.quantity}</p>
                    </td>
                    <td>
                      <h6 className="font-bold">= {item?.totalPrice} tk</h6>
                    </td>
                  </tr>
                );
              }
              return false;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountItem;