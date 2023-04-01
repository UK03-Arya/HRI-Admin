import React from 'react'
import Back from "../../../src/Assets/Back.png"
import Search from "../../../src/Assets/Search.png"

const QuestBank = () => {
    const data = [
        { Pro:"Prototype Question Quiz", data:"View"},
        { Pro:"Prototype Question Quiz", data:"View"},
        { Pro:"Prototype Question Quiz", data:"View"},
        { Pro:"Prototype Question Quiz", data:"View"},
        { Pro:"Prototype Question Quiz", data:"View"},
        { Pro:"Prototype Question Quiz", data:"View"},
      
        
      ];
      return (
        <div className="">
        <div className='sm:flex sm:flex-row sm:ml-4 md:ml-4 xl:ml-8 '>
         <div className="flex xs:w-[260px] ms:w-[255px] md:w-[575px] lg:w-[700px] xl:w-[1000px]  xs:ml-10 xs:mt-28 ms:ml-14 h-8">
        <label className="text-sm text-black font-semibold mt-1">
          Question Bank
        </label>
        <div className=" flex rounded-3xl xs:ml-6 sm:ml-2   pl-3 xl:w-[700px] md:w-[400px] md:ml-[50px] sm:w-[200px]  lg:w-[500px]  xs:w-[350px] ms:w-[250px]  py-1 border-2 ms:ml-16 border-gray-400    xl:mb-0 md:mb-1  ">
          <input
            type="text"
            placeholder="Search team member..."
            className=" lg:text-sm md:text-sm xl:text-sm text-xs "
          />
          <img src={Search} alt="img" className="w-3 h-3 mt-1 xs:mr-2 ms:mr-4 text-xs mr-2 md:ml-48 lg:ml-[250px] xl:ml-[450px] " />
        </div>
      </div>

      <div className="xs:ml-10 sm:mt-28 sm:ml-2 xs:space-x-20 xs:mt-8 ms:space-x-32 sm:space-x-2 ms:ml-12     lg:mt-30 ms:mt-8 xl:space-x-16 xl:ml-12 ">
        <a href='AddQuesForm' className="text-xs  xs:mt-2 p-1 xs:h-[30px] xs:w-[100px]  rounded-2xl border-2 border-orange-400 focus:border-orange-400	 text-orange-400 focus:text-white bg-white focus:bg-orange-400 font-semibold">
          + Add Manually{" "}
        </a>
        <a href='BulkUpload' className="text-xs p-1 ms:ml-2  rounded-2xl border-2 border-orange-400 focus:border-orange-400	 text-orange-400 focus:text-white bg-white focus:bg-orange-400 font-semibold ">
          Bulk Upload{" "}
        </a>
      </div>
</div>
      <div className="flex flex-wrap mt-6 sm:mt-8 sm:ml-[68px] xs:ml-10 ms:ml-14 xl:ml-20 ">
       
        <p className="text-sm text-gray-400    font-semibold">
Recently Added      </p>
      </div>
          <div className="  xs:grid xs:grid-cols-1 sm:ml-[50px]  xs:mt-4 flex-wrap ms:ml-[40px] xl:ml-16  ">
            {data.map((elem, index) => (
              <div key={index} >
              <div className='relative box-content px-2 ms:ml-3 xs:w-[250px] xl:w-[800px]  ms:w-[280px] xs:h-[20px]  sm:w-[450px] sm:pt-1  md:w-[600px] lg:w-[600px] sm:h-8  xs:pt-1 drop-shadow-xl  rounded-2xl border-2	xs:ml-10  xs:mt-2  bg-gray border-gray-400 flex justify-between	'>
  <div className='xs:text-xs  text-black sm:pt-1 font-semibold'>{elem.Pro}</div>
  <a href='MCQQuesScreen' className='text-orange-400 sm:pt-1 font-semibold xs:text-xs'>View</a>
  </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap mt-6 xs:ml-10 ms:ml-14 sm:ml-[68px] xl:ml-20">
       
       <p className="text-sm text-gray-400   font-semibold">
Other     </p>
     </div>
         <div className="  xs:grid xs:mt-4 xs:grid-cols-1 sm:ml-[24px] ms:ml-3   flex-wrap xl:ml-10  ">
           {data.map((elem, index) => (
             <div key={index} >
             <div className='relative box-content px-2 xs:w-[250px] xl:w-[800px]  ms:w-[280px] xs:h-[20px] sm:pt-1   sm:w-[450px]  md:w-[600px] lg:w-[600px]  sm:h-8  xs:pt-1 drop-shadow-xl  rounded-2xl border-2	xs:ml-10  xs:mt-2  bg-gray border-gray-400 flex justify-between 	'>
 <div className='xs:text-xs  text-black font-semibold sm:pt-1'>{elem.Pro}</div>
 <a href='MCQQuesScreen' className='text-orange-400  font-semibold xs:text-xs sm:pt-1'>View</a>
 </div>
             </div>
           ))}
         </div>
        </div>
    )
  }

export default QuestBank