import React from 'react'
import img from '../assets/A006-1RE.jpg'
const Hero = () => {
  return (
    <div className='w-full h-[600px] mx-auto relative'>  <div className='w-full h-[600px] absolute bg-black/20 z-3'></div>
     <h1 className='absolute text-white text-5xl flex mx-auto mt-[250px]   justify-center items-center w-full font-bold '>Your desk made right</h1>
    
        <img src={img} alt="hero-image" className='w-full h-[600px] object-cover z-2'/>
      
    </div>
  )
}

export default Hero