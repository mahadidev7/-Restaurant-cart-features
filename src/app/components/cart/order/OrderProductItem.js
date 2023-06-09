import React from "react";

function OrderProductItem({
  name = "",
  description = "",
  amounts = [],
  amountsTotal,
}) {
  return (
    <div className="p-3">
      {amountsTotal === 0 ? (
        " "
      ) : (
        <div className="">
          <h4 className="uppercase text-left">{name}</h4>
          <p className="line-clamp-1 text-left">{description}</p>
          <table className="table border-separate border border-[#ddd6d6] rounded-md w-full">
            <thead>
              <tr>
                <th>Name & Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {amounts?.map((item, key) => (
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
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default OrderProductItem;
