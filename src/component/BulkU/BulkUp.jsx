import React from 'react'
import Back from "../../../src/Assets/Back.png"
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const BulkUp = () => {
  return (
    <div>
    <div className="flex flex-wrap mt-4 xs:ml-4 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-[90px]">
      <img
        src={Back}
        alt="img"
        className=" xs:ml-2 xs:w-4 xs:h-4 xs:mt-1 ms:ml-10  "
      />
      <p className="text-sm text-black xs:ml-4  font-semibold">
       Bulk Upload
      </p>
    </div>
    

    <div className="flex flex-col space-y-3 xs:ml-6 xs:mt-6 ms:ml-10 sm:ml-14 md:ml-16 lg:ml-20 xl:ml-32">
      <label className="text-sm text-gray-500 font-semibold">
                     Topic
                    </label>
                    <label className="text-sm text-gray-500 font-semibold border-2 border-gray-400 rounded-2xl pt-1 pl-3 xs:w-[275px] sm:w-[470px] xs:h-[30px] ms:w-[322px] md:w-[770px] lg:w-[885px] xl:w-[1200px]">
                  </label>               
                  </div>




                  <div className="flex flex-col mt-4 xs:ml-6 ms:ml-10 sm:ml-14 lg:ml-[90px] xl:ml-[125px]">
        <label
          for="Cordinater"
          className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
        >
          Upload CSV / EXCEL File of the course{" "}
        </label>
      </div>
      <div className="xs:h-[150px] xs:w-[300px] ms:w-[322px] sm:w-[475px] sm:h-[180px]  md:w-[775px] md:h-[200px] lg:w-[885px] lg:h-[250px] xl:w-[1170px] xl:h-[350px] rounded-3xl border-2 border-dashed border-gray-400	sm:ml-14 lg:ml-20  bg-orange-100 xs:ml-5 xl:ml-[130px] ms:ml-10 xs:mt-4">
      <div className='xs:w-[280px] xs:h-[5px] ms:w-[300px] xs:ml-8 sm:ml-28 ms:ml-10 md:ml-[255px] lg:ml-[300px] xl:ml-[450px] '>        <p className='text-sm xs:mt-4 xs:ml-16 text-gray-400 font-semibold'> Upload CSV / EXCEL</p>
        <p className='text-xs mb-4 text-gray-400 font-semibold xs:ml-8'>File should not be more than 300mb</p></div>
        <BsFileEarmarkPdfFill className="text-gray-400 xs:text-2xl xs:mt-[60px] xs:ml-[150px] ms:ml-[140px] sm:ml-[230px] md:ml-[375px] lg:ml-[420px] xl:ml-[560px]" />
      </div>
      
      
      

                  <div className="xs:ml-16 xs:mt-4 xs:pb-10 ms:ml-24 md:ml-72 xl:ml-[580px] lg:ml-[350px] lg:mt-10 sm:ml-32">
      <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[85px] sm:ml-20 rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Cancel       </button>
      <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Upload        </button>
</div>
  </div>
  )
}

export default BulkUp
