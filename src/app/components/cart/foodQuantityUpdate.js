import React from 'react'
import { Button } from '../share'

function foodQuantityUpdate() {
  return (
    <div className="flex items-center gap-3 mt-3">
      <Button text="-" />
      <p>452</p>
      <Button text="+" />
    </div>
  )
}

export default foodQuantityUpdate