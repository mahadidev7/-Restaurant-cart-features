import React from 'react'
import { THEME } from '../../utils/Theme'

function Hero() {
  return (
    <div className='w-screen md:h-screen MH_heroSection flex justify-center items-center md:p-0 sm:py-16 py-12'>
        <div className="md:w-3/5 w-[95%] flex flex-col gap-2 justify-center items-center text-center text-white">
            <h1 className='font-semibold text-5xl '>WE SERVE QUANTITY FOOD</h1>
            <p className='italic'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, ad repudiandae voluptate et reiciendis ipsa quasi. Facere temporibus, vero officiis veritatis velit autem necessitatibus eum pudiandae voluptate et reiciendis ipsa quasi. Facere temporibus, vero officiis veritatis velit autem necessitatibus eum a, quasi laborum ipsam perferendis debitis vitae obcaecati cumque quisquam beatae dicta.</p>
            <a href='#Menu' className={`bg-[${THEME.primary}] px-10 text-2xl py-2 rounded-full MH_appLink`}>Menu</a>
        </div>
    </div>
  )
}

export default Hero