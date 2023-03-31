import React from 'react'
import { useState } from 'react';
import Back from "../../../src/Assets/Back.png"
const QuesForm = () => {
    const [selectedChoice, setSelectedChoice] = useState(null);

    function handleChoiceSelection() {
      setSelectedChoice();
    }
  return (
    <div>
    <div className="flex flex-wrap mt-4 xs:ml-4 sm:ml-14 md:ml-16 ms:ml-8 lg:ml-16 xl:ml-[90px]">
        <img
          src={Back}
          alt="img"
          className=" xs:ml-4 xs:w-4 xs:h-4 xs:mt-1 sm:mt-1 "
        />
        <p className="text-sm text-black xs:ml-4 sm:text-lg  font-semibold">
         Add question manually
        </p>
      </div>
      <div className="flex flex-col space-y-3 xs:ml-8 xs:mt-6 md:ml-20  sm:ml-16 ms:ml-12 xl:ml-24">
      <label className="text-sm text-gray-500 font-semibold sm:text-lg ">
                     Topic
                    </label>
                    <label className="text-sm text-gray-500 font-semibold border-2 border-gray-400 rounded-2xl pt-1 pl-3 xs:w-[250px] sm:w-[350px] xs:h-[30px] ms:w-[300px] md:w-[600px] lg:w-[700px] xl:w-[900px]">
                  </label>
                   
                 
                  </div>
      <div className="xs:w-[330px] ms:w-[365px] sm:w-[500px] md:w-[800px] xs:ml-2 ms:ml-4 sm:ml-12 xs:mt-6 xl:ml-16">
                <div className="flex">
                  <div className="flex xs:space-x-1 ml-4 ms:ml-6">
                    <p className="text-sm text-black sm:text-lg  font-semibold">
                    Q1                    </p>
                    <p className="text-sm sm:text-lg   text-black font-semibold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                    </p>
                  </div>
                  {/* <p className="text-sm text-red-600 font-semibold ">{elem.Del}</p> */}
                 
                </div>

                <div className="grid grid-cols-1  xs:ml-4 ms:ml-8 xs:py-4 xs:space-y-2">
                  <div className="flex space-x-2 ">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold border-2 border-gray-400 rounded-2xl pt-1 pl-3 xs:w-[250px] ms:w-[280px] xs:h-[30px] sm:w-[320px] md:w-[500px] ">
Bob’s Burgers                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold border-2 border-gray-400 rounded-2xl pt-1 pl-3 xs:w-[250px] ms:w-[280px] xs:h-[30px] sm:w-[320px] md:w-[500px]">
                      Bob’s Burgers
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold border-2 border-gray-400 rounded-2xl pt-1 pl-3 xs:w-[250px] ms:w-[280px] xs:h-[30px] sm:w-[320px] md:w-[500px]">
                     Naruto
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold border-2 border-gray-400 rounded-2xl pt-1 pl-3 xs:w-[250px] ms:w-[280px] xs:h-[30px] sm:w-[320px] md:w-[500px]">
                      Seven deadly sins
                    </label>
                  </div>
                </div>
              </div>

              <p className='text-xs text-gray-400 sm:text-lg  xs:ml-6 ms:ml-10 py-4 xs:w-[300px] ms:w-[330px] sm:w-[450px] md:w-[800px] sm:ml-20 xl:ml-24'>
                Add question manually - Fill the question and option of your choice then select the correct answer
              </p>

              <div className="xs:ml-[75px] xs:mt-4 xs:pb-10 ms:ml-28 md:ml-64 xl:ml-[550px] lg:ml-[300px] sm:w-[350px] lg:mt-16">
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[85px] sm:ml-20 rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Cancel       </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Add        </button>
</div>
    </div>
  )
}

export default QuesForm
