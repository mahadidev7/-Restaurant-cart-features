import React from 'react'
import { THEME } from '../../utils/Theme'

function AppTitle({firstText='', secondText=''}) {
  return (
    <div className='flex gap-3'>
      <p className='text-[55px] MH_appTitle font-bold'>{firstText}</p>
      <p className={`text-[55px] MH_shortTitle font-bold text-[${THEME.primary}]`}>{secondText}</p>
    </div>
  )
}

export default AppTitle