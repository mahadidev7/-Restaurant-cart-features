import React from 'react'
import AppShortTitleIcon from '../../assets/home/title_icon.svg'
import { STYLE, THEME } from '../../utils/Theme'

function AppShortTitle({text=''}) {
  return (
    <div className='flex items-center gap-1'>
      <img src={AppShortTitleIcon} alt='AppShortTitle icon' />
      <div className={`MH_shortTitle text-[${STYLE.shortTitle}px] text-[${THEME.primary}] capitalize`}>
        {text}
      </div>
    </div>
  )
}

export default AppShortTitle