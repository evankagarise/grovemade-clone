import React from 'react'

const Nav = () => {
  return (
    <div className='w-[80%] h-[80px] flex justify-between mx-auto m-4 sticky absolute'>
        <div className='justify-left flex gap-6 font-bold text-lg'>
            <p>Shop</p>
            <p>Explore</p>
        </div>
        <div className='justify-center uppercase font-bold text-2xl'>
            grovemade
        </div>
        <div className='justify-right uppercase font-bold cursor-pointer'>
            my cart
        </div>
    </div>
  )
}

export default Nav