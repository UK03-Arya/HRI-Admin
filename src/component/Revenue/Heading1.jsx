import React from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";
const Heading1 = () => {
  return (
    <div>
    <div className='flex justify-center space-x-6 sm:space-x-10 mt-8 lg:space-x-2 pt-4 2xl:pt-0 xl:space-x-6 xl:mt-6	lg:pt-1 2xl:space-x-10'>
    <a href=""className=' text-sm sm:text-lg lg:text-xs lg:text-lg font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>Reach</a>
    <a href=""className='text-sm sm:text-lg lg:text-xs  lg:text-lg font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>Impressions</a>
    <a href=""className='text-sm  sm:text-lg lg:text-xs  lg:text-lg font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>New followers</a>
    <AiOutlineEllipsis className='mt-1 font-bold text-lg  sm:text-xl text-gray-400 cursor-pointer  hover:underline hover:text-black	'/>
    </div>
         <div className='lg:ml-8 xl:pt-10 xl:ml-2 2xl:pt-2 ' >
            <h1 className='text-[60px] lg:text-[40px] pr-36 font-bold '>1.05m</h1>
            <h1 className='text-[20px] lg:text-[16px] pr-52  text-green-600 font-bold'>+8.5%</h1>

         </div>
             </div>
  )
}

export default Heading1
