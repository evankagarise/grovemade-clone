import React from 'react'
import img from '../assets/desk2.png'
const Inspo = () => {
  return (
    <div className='w-full h-[600px] mx-auto relative mb-20 '>
        <div className='w-full h-[600px] absolute bg-black/20 z-3 ' />
        <h1 className='text-white  w-full text-5xl absolute mt-[250px] flex items-center justify-center mx-auto z-3'>Home Office Inspiration</h1>
        <p className='text-white w-full absolute mt-[350px] flex items-center mx-auto justify-center '>Working from home can be a challenge-see some creative solutions to get it just right</p>
        <img src={img} alt="office" className='w-full h-[600px] object-cover z-2 ' />
    </div>
  )
}

export default Inspo