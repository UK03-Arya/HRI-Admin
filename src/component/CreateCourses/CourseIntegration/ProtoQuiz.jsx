import React from 'react'
// import Img from "../../../Assets/Img.png"
// import Add from "../../../Assets/Add.png"
const ProtoQuiz = () => {
  
    // <div>
    //  <div className="xs:ml-10">
          
    //       <p className="text-black  font-semibold text-md">Course Detail</p>
    //     </div>
    //           <div className="relative box-content xs:ml-6  sm:ml-6 xs:h-[750px] xs:w-[300px] md:w-[650px] lg:w-[850px] lg:ml-16 lg:mt-8 xl:w-[1000px] md:h-96 md:pb-4 lg:pb-8 pb-4 xl:h-96 xl:pt-4 xl:pb-10   drop-shadow-xl rounded-2xl bg-white   "></div>
    // </div>

    const data = [
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
      { Pro:"Prototype Question Quiz", data:"View"},
    
    
      
    ];
    return (
      <div className="">
      
        <div className="  xs:grid xs:grid-cols-1 lg:grid-cols-2 flex-wrap   ">
          {data.map((elem, index) => (
            <div key={index} >
            <div className='relative box-content px-2 xs:w-[255px] xl:w-[500px]  ms:w-[280px] xs:h-[20px]  sm:w-[400px]  md:w-[600px] lg:w-[400px] sm:h-8  xs:pt-1 drop-shadow-xl  rounded-2xl border-2	xs:ml-3  xs:mt-2  bg-gray border-gray-400 flex justify-between	'>
<div className='xs:text-xs pt-1 text-black font-semibold'>{elem.Pro}</div>
<a href='MCQQuesScreen' className='text-orange-400 pt-1 font-semibold xs:text-xs'>View</a>
</div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default ProtoQuiz
