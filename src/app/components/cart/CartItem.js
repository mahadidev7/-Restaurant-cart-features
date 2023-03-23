/* eslint-disable react/style-prop-object */
import React from "react";
import { Button } from "../share";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartDelete } from "../../redux/slices/cartSlice";
import CounterCard from "./CounterCard";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { id, name, description, amounts, img } = item;
  
  // category Delete from cart and from redux
  const DeleteHandler = (id) => {
    dispatch(cartDelete(id));
  };

  return (
    <div className="bg-white p-4 lg:flex gap-1 items-center justify-between rounded-md mb-3 relative text-left">
      <Button
        text={<FaTimes size={14} className="w-fit" />}
        style="absolute top-3 right-3 !bg-[#dad8d8] hover:!bg-primary !px-1"
        handelClick={() => DeleteHandler(id)}
      />
      <img
        loading="lazy"
        src={img}
        alt="food img"
        className="lg:w-[80px] lg:h-[80px] w-[200px] h-[200px] object-cover rounded-md mx-auto"
      />

      <div className="p-3 w-5/6">
        <h3 className="uppercase mb-1">{name}</h3>
        <p className={`text-sm line-clamp-3`}>{description}</p>

        {/* Category selection of price  */}
        <div className="flex items-center gap-3 flex-wrap">
          {amounts?.map((data, key) => (
            <CounterCard data={data} item={item} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
