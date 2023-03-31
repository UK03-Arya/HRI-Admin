import React from 'react'
import Img from "../../../Assets/Img.png"
import Add from "../../../Assets/Add.png"
const CourseImage = () => {
  
    // <div>
    //  <div className="xs:ml-10">
          
    //       <p className="text-black  font-semibold text-md">Course Detail</p>
    //     </div>
    //           <div className="relative box-content xs:ml-6  sm:ml-6 xs:h-[750px] xs:w-[300px] md:w-[650px] lg:w-[850px] lg:ml-16 lg:mt-8 xl:w-[1000px] md:h-96 md:pb-4 lg:pb-8 pb-4 xl:h-96 xl:pt-4 xl:pb-10   drop-shadow-xl rounded-2xl bg-white   "></div>
    // </div>

    const Image = [
      {
    
        Img:Img,
        Add:Add,
         
        },
    
      {
    
       Img:Img,
       Add:Add,
        
       },
       {
    
        Img:Img,
        Add:Add,
         
        },
        {
    
          Img:Img,
          Add:Add,
           
          },
      
    ];
    return (
      <div className="">
      
        <div className="  xs:grid xs:grid-cols-2 flex-wrap md:flex md:space-x-2 lg:space-x-10 ">
          {Image.map((elem, index) => (
            <div key={index} >
            <div className='relative box-content xs:w-[100px] xs:h-[80px] ms:w-[120px] ms:h-[100px] drop-shadow-xl sm:w-[175px] sm:h-[120px] sm:ml-8 rounded-xl border-2	xs:ml-6  xs:mt-6 md:w-[150px] md:h-[100px] xl:w-[225px] xl:h-[160px] bg-gray border-orange-400	'>
            <img className="mt-[20px] ml-[20px] xs:w-[60px] ms:w-[80px] sm:w-[110px] sm:ml-8 md:w-[80px] md:ml-[32px] xl:w-[120px] xl:ml-[50px] xl:mt-[30px]" src={Img} alt=''/>
            <img className="mt-[2px] ml-[85px] xs:w-[20px] ms:ml-[105px] sm:ml-[160px] md:ml-[140px] md:mt-1 xl:w-[30px] xl:ml-[200px] xl:mt-[18px]" src={Add} alt=''/>
            </div>


            </div>
          ))}
        </div>
      </div>
  )
}

export default CourseImage
