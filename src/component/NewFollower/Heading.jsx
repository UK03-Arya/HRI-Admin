import React from 'react'
import { AiOutlineEllipsis } from "react-icons/ai";
const Heading = () => {
  return (
    <div>
    <div className='flex justify-center space-x-10 mt-8 lg:mt-2	'>
    <a href=""className=' text-sm lg:text-xs   font-semibold text-gray-400 cursor-pointer  hover:underline hover:text-black	'>New Followers</a>
    
    <AiOutlineEllipsis className='mt-1 font-bold text-lg sm:text-xl sm:mt-0 text-gray-400 cursor-pointer  hover:underline hover:text-black	'/>
    </div>
         <div className='flex space-x-2 ml-6 mt-4'  >
            <h1 className='text-[20px]  font-bold '>2.7k</h1>
            <h1 className='text-[10px] pt-2  text-green-600 font-bold'>+8.5%</h1>

         </div>
             </div>
  )
}

export default Heading
