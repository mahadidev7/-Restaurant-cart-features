/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  cartCategoryDelete,
  goToShop,
  quantityUpdate,
} from "../../redux/slices/cartSlice";
import { Button } from "../share";
import { GiChickenOven, GiCow } from "react-icons/gi";
import { GrRestaurant } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";

function CounterCard({ data, item }) {
  const dispatch = useDispatch();
  const [type, setType] = useState("increment");
  const [typeHelper, setTypeHelper] = useState(false);

  // cart quantity update 
  const QuantityUpdateHandler = (assets) => {
    dispatch(quantityUpdate({ ...assets, id: item.id }));
  };

  // cart item Delete from redux
  const DeleteCartCategoryHandler = (assets) => {
    dispatch(cartCategoryDelete(assets));
  };

  // ready for shop
  const goToShopHandler = (assets) => {
    dispatch(goToShop(assets));
    setTypeHelper(!typeHelper);
  };

useEffect(() => {
  if(typeHelper){
    setType("decrement")
  }else{
    setType("increment")
  }
}, [typeHelper]);

  return (
    <div
      className={`flex flex-col gap-3 mt-3 border border-[#999] p-3 rounded-md relative hover:shadow-lg pt-7 ${
        data.shopping && "bg-secondary "
      }`}
      title={data.name}
    >
      <Button
        text={<FaTimes size={14} />}
        style="!bg-black hover:!bg-primary !px-1 w-fit absolute top-3 right-3"
        handelClick={() =>
          DeleteCartCategoryHandler({
            categoryName: data.name,
            cartId: item.id,
          })
        }
      />

      {data.name === "chicken" && <GiChickenOven size={30} />}
      {data.name === "cow" && <GiCow size={30} />}
      {data.name !== "cow" && data.name !== "chicken" && (
        <GrRestaurant size={30} />
      )}

      <div className="flex items-center font-bold gap-2">
        <p className="price">{data.price}</p>
        <p>×</p>
        <p className="price">{data.quantity}</p>
        <p className="price">=</p>
        <p className="price">{data.totalPrice}</p>
      </div>
      <div className="flex items-center justify-between gap-2 border-t pt-2 border-[#e7e5e5]">
        <Button
          text="-"
          style="!bg-black"
          handelClick={() =>
            QuantityUpdateHandler({
              type: "decrement",
              categoryName: data.name,
            })
          }
        />
        <p className="font-bold">{data.quantity}</p>
        <Button
          text="+"
          style="!bg-black"
          handelClick={() =>
            QuantityUpdateHandler({
              type: "increment",
              categoryName: data.name,
            })
          }
        />
      </div>
      <Button
        style="!bg-black"
        text={data.shopping ? "remove" : "Add to Shop"}
        handelClick={() =>
          goToShopHandler({ categoryName: data.name, cartId: item.id, type })
        }
      />
    </div>
  );
}

export default CounterCard;
