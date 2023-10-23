import React from 'react'
import banner1 from "../images/banner1.jpg";
import banner2 from "../images/banner2.jpg";

const Saleoff = () => {
  return (
    <div className='w-full'>
    <div className='w-full flex flex-wrap sm:flex-col vsm:flex-col md:flex-row'>
      <div className='flex-1 p-2 sm:w-full relative'>
        <img src={banner1} alt='bnnr' className='w-full h-auto' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
          <h2 className='text-2xl font-bold mb-2 text-black'>Text on Image 1</h2>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Button</button>
        </div>
      </div>
      <div className='flex-1 p-2 sm:w-full relative'>
        <img src={banner2} alt='bnnr' className='w-full h-auto' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center'>
          <h2 className='text-2xl font-bold mb-2 text-black'>Text on Image 2</h2>
          <button className='bg-blue-500 text-white py-2 px-4 rounded'>Button</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Saleoff
