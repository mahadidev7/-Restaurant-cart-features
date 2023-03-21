/* eslint-disable react/style-prop-object */
import React from "react";
import { Button } from "../share";
import { GiChickenOven, GiCow } from "react-icons/gi";
import { GrRestaurant } from "react-icons/gr";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartCategoryDelete, cartDelete, quantityUpdate } from "../../redux/slices/foodSlice";

function CartItem({
  id = "",
  name = "",
  description = "",
  amounts = [],
  img = "",
}) {
  const dispatch = useDispatch();

  const QuantityUpdateHandler = (item) => {
    dispatch(quantityUpdate({ ...item, id }));
  };

  // cart item Delete from redux
  const DeleteCartCategoryHandler = (item) => {
    dispatch(cartCategoryDelete(item));
  };
  
  // category Delete from cart and from redux
  const DeleteHandler = (id) => {
    dispatch(cartDelete(id));
  };

  return (
    <div className="bg-white p-4 lg:flex gap-1 items-center justify-between rounded-md mb-3 relative">
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
        <div className="flex items-center gap-3">
          {amounts?.map((item, key) => {
            if (item.cart === true) {
              return (
                <div
                  className="flex flex-col gap-3 mt-3 border border-[#999] px-3 py-2 rounded-md relative pt-7"
                  key={key}
                >
                  <Button
                    text={<FaTimes size={14} className="w-fit" />}
                    style="absolute top-3 right-3 !bg-[#dad8d8] hover:!bg-primary !px-1"
                    handelClick={() =>
                      DeleteCartCategoryHandler({ categoryName: item.name, id: id })
                    }
                  />

                  {item.name === "chicken" && <GiChickenOven size={20} />}
                  {item.name === "cow" && <GiCow size={20} />}
                  {item.name !== "cow" && item.name !== "chicken" && (
                    <GrRestaurant size={20} />
                  )}

                  <div className="flex items-center font-bold gap-2">
                    <p className="price">{item.price}</p>
                    <p>×</p>
                    <p className="price">{item.quantity}</p>
                    <p className="price">=</p>
                    <p className="price">{item.totalPrice}</p>
                  </div>
                  <div className="flex items-center gap-2 border-t pt-2 border-[#e7e5e5]">
                    <Button
                      text="-"
                      style="!bg-secondary"
                      handelClick={() =>
                        QuantityUpdateHandler({
                          type: "decrement",
                          categoryName: item.name,
                        })
                      }
                    />
                    <p>{item.quantity}</p>
                    <Button
                      text="+"
                      style="!bg-secondary"
                      handelClick={() =>
                        QuantityUpdateHandler({
                          type: "increment",
                          categoryName: item.name,
                        })
                      }
                    />
                  </div>
                </div>
              );
            }
            return false;
          })}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
