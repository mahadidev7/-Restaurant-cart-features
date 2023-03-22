/* eslint-disable react/style-prop-object */
import React from "react";
import { GiChickenOven, GiCow } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { addFoodToCart } from "../../../redux/slices/cartSlice";
import { Button } from "../../share";

function MenuItem({ assets, layout='flex' }) {
  const { id, name, description, img, amounts, categoryShop, style } = assets;
  const dispatch = useDispatch();

  const handelCart = (categoryName, price) => {
    const item = {
      ...assets,
      amounts: [
        {
          name: categoryName,
          price,
          quantity: 1,
          totalPrice: price,
          shopping: false,
        },
      ],
    };
    dispatch(addFoodToCart(item));
    // dispatch(disabledBtnUpdate({name:categoryName, id}));

    // console.log(item)
  };

  return (
    <div
      className={`bg-white p-4 md:py-4 py-9 gap-1 items-center justify-between rounded-md my-2 shadow-md border border-[#e0dede] ${style} lg:${layout} block`}
    >
      <img
        loading="lazy"
        src={img}
        alt="food img"
        className="lg:w-[80px] lg:h-[80px] w-[200px] h-[200px] object-cover rounded-md mx-auto"
      />

      <div className={`p-3 ${layout==='flex' ? 'lg:w-4/5' : 'w-full'}`}>
        <h3 className="uppercase mb-1">{name}</h3>
        <p className={`text-sm line-clamp-3`}>{description}</p>
      </div>
      <FoodPriceComponent amounts={amounts} handelCart={handelCart} />
    </div>
  );
}

const FoodPriceComponent = ({ amounts = [], handelCart }) => {
  return (
    <div className="flex gap-5 justify-around items-center">
      {amounts?.map((item, key) => (
        <PriceSplit {...item} handelCart={handelCart} key={key} />
      ))}
    </div>
  );
};

const PriceSplit = ({ name = "", price = "", handelCart }) => {
  return (
    <div className="">
      {name === "chicken" && (
        <GiChickenOven size={25} className="m-auto mb-1" />
      )}
      {name === "cow" && <GiCow size={25} className="m-auto mb-1" />}
      <p className="text-secondary py-1 rounded-full font-semibold price mb-2 text-center">
        {price || " "} TK
      </p>
      <Button
        disabled={false}
        handelClick={() => handelCart(name, price)}
        style="!bg-secondary"
      />
    </div>
  );
};

export default MenuItem;
