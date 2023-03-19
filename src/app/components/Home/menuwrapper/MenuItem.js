import React from "react";
import { STYLE } from "../../../utils/Theme";

function MenuItem({
  name = "",
  description = "",
  totalPrice = "",
  chicken = "",
  cow = "",
}) {
  return (
    <div className="grid gap-2 grid-cols-3 border-b py-2">
      <div className="col-span-2">
        <h3 className="uppercase ">{name ? name : " "}</h3>
        <p className={`text-[${STYLE.smallSize}px]`}>{description ? description : " "}</p>
      </div>
      <div className={`grid gap-1 grid-cols-1 items-center text-center`}>
        {totalPrice ? (
          <div>
            <p>{totalPrice + " "} TK</p>
            <button>order</button>
          </div>
        ) : (
          <div className="grid gap-1 grid-cols-2">
            <div>
              <p>{chicken + " "} TK</p>
              <button>order</button>
            </div>
            <div>
              <p>{cow + " "} TK</p>
              <button>order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
