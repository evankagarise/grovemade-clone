import React from 'react'
import img1 from '../assets/desk1.jpg'
import img2 from '../assets/laptop.jpg'

const Products = () => {
  return (
    <div className='w-full h-[600px] bg-white flex gap-1 mt-10'>
        <div className='m-10 flex flex-col'>
            <img src={img1} alt="desk" />
            <h1 className='flex items-center justify-center mt-6 text-2xl font-bold'>Desk Pads</h1>
        </div>
        <div className='m-10 flex flex-col'>
            <img src={img2} alt="desk" />
            <h1 className='flex items-center justify-center mt-6 text-2xl font-bold'>Laptop Stands</h1>
        </div>
    </div>
  )
}

export default Products