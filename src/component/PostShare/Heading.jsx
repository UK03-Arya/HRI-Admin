import React from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";
const Heading = () => {
  return (
    <div>
    <div className='flex justify-center space-x-10 mt-8 lg:mt-2	'>
    <a href=""className=' text-sm lg:text-xs font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>Post Shares</a>
    
    <AiOutlineEllipsis className='mt-1 font-bold text-lg sm:mt-0 sm:text-xl text-gray-400 cursor-pointer  hover:underline hover:text-black	'/>
    </div>
         <div className='flex space-x-2 ml-6 mt-4'  >
            <h1 className='text-[20px]  font-bold '>31.6k</h1>
            <h1 className='text-[10px] pt-2  text-green-600 font-bold'>+22%</h1>

         </div>
             </div>
  )
}

export default Heading
