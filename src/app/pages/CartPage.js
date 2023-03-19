import React from 'react'
import { Header } from '../components'
import { Baskets, Payment } from '../components/cart'

function CartPage() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-cols-3 MH_container !my-5">
        <Baskets />
        <Payment />
      </div>
    </>
  )
}

export default CartPage