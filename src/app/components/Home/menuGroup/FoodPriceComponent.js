import React from 'react'
import PriceSplit from './PriceSplit'

function FoodPriceComponent({ amounts = [], handelCart }) {
  return (
    <div className="flex gap-5 justify-around items-center lg:w-2/6">
      {amounts?.map((item, key) => (
        <PriceSplit {...item} handelCart={handelCart} key={key} />
      ))}
    </div>
  )
}

export default FoodPriceComponent