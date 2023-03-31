import React from 'react'
import Menu from "../Assets/Menu.png";
import Bell from "../Assets/Bell.png";
import DownArrow from "../Assets/DownArrow.png";

import Profile from "../Assets/Profile.png";




const Nav = () => {
  return (
    <div className='flex  ml-4 justify-center '>
    <div className='flex flex-wrap mt-4 2xl:w-[1400px] absolute h-10 sm:h-16 p-8   xl:w-[1359px] xl:h-[60px]  md:w-[800px] md:ml-40  lg:w-[900px] lg:h-[60px] xs:w-[320px] xs:ml-2 ms:w-[325px] sm:w-[500px] xl:mx-40 sm:ml-40  lg:mx-12 md:mx-10  drop-shadow-xl rounded-2xl bg-white justify-between space-x-4    xl:space-x-80 lg:justify-between md:justify-between 	'>
    <div className='flex flex-wrap space-x-2 ml-2 xl:ml-8'>
    <img src={Menu} alt="img" className="w-4 h-4 mt-1 " />
    <p className="font-bold text-orange-500	" >
              Learn
              <span className="font-semibold text-black">Net </span>{" "}
            </p>
            </div>
            <div className='flex flex-wrap pl-1  xl:pl-80 lg:pl-80 md:pl-80 xl:mr-40  '>
            <img src={Bell} alt="img" className="w-3 h-3 mt-2 xl:ml-10 xl:block lg:block md:block hidden  " />

<p className='text-xs ml-2 mt-1 sm:mt-0 sm:space-x-2 xl:ml-4 xl:block lg:block md:block hidden '> Help & FAQ</p>
<img src={Profile} alt="img" className="w-4 h-4 mt-1 ml-4 sm:w-6 sm:h-6  " />
<img src={DownArrow} alt="img" className="w-2 h-2 mt-2 ml-3 xl:ml-10 sm:w-3 sm:h-3 sm:mb-8 " />

            </div>
    </div></div>
  )
}

export default Nav