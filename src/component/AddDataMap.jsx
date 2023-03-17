import React from "react";


const AddDataMap = ({  img,
           
    CourseN,
    Name,
    Star,
    StarRating,
    TotalRating,
    team,
    teamNumber,
    Learn,
    save,
    Number,
        Course,
    Watch,
    Week }) => {
  
  return (
    <div className=" lg:flex lg:w-[620px] lg:h-[100px] 2xl:w-[900px]  bg-white xs:h-[200px] xs:w-[310px] sm:w-[480px] sm:ml-4 sm:h-[250px] xl:w-[900px] xl:h-[100px] xs:ml-2 md:w-[480px] md:h-[250px] xl:mt-2 xl:ml-12 rounded-lg xl:rounded-full lg:rounded-full ">
    <div className="flex ">
       <div><img src={img} alt="img" className="xs:w-28 xs:h-20 sm:w-[200px] sm:h-[110px] lg:w-36 lg:h-[100px] xl:w-48 xl:h-[100px] 2xl:w-[200px] " /></div>
      <div className="xs:ml-8 xs:mb-2 lg:mt-4 xl:mt-4 xl:ml-20 2xl:ml-20">
        <p className="text-sm sm:text-lg lg:text-xs font-bold text-black">{CourseN}</p>
        <p className="text-xs sm:text-sm lg:text-xs text-slate-600	">{Name}</p>
        <div className="flex mt-2 space-x-2">
        <p className="text-xs lg:text-xs sm:text-lg  text-gray">{Star}</p>
        <p className="text-xs sm:text-lg  lg:text-xs text-inherit	 text-black">{StarRating}</p>
        <p className="text-sm  sm:text-lg lg:text-xs font-bold text-black mb-4">{TotalRating}</p>
</div>
    </div>
      </div>
          
        <div className="sm:ml-6 xl:ml-24 2xl:ml-24">
        <div className="flex space-x-2 mt-4"><img src={team} alt="img" className="xs:w-4 xs:h-4 sm:w-6 sm:h-6 xs:ml-2 lg:w-3 lg:h-3 " />
<p className="text-xs lg:text-xs sm:text-lg">{teamNumber}</p>
<p className="text-xs lg:text-xs sm:text-lg">{Learn}</p>
<div className="flex space-x-2 pl-16 xl:pl-36 2xl:pl-28 lg:pl-4 sm:pl-30">
        <img src={Watch} alt="img" className="xs:w-4 xs:h-4  sm:w-6 sm:h-6 lg:w-3 lg:h-3 " />
        <p className="text-xs lg:text-xs sm:text-lg">{Week}</p>
</div>
</div>

<div className="flex  space-x-2 my-6"><img src={save} alt="img" className="xs:w-4 xs:h-4 lg:w-3 lg:h-3 sm:w-6 sm:h-6 xs:ml-2 " />
<p className="text-xs sm:text-lg lg:text-xs">{Number}</p>
<p className="text-xs sm:text-lg lg:text-xs">{Course}</p>
        <div className="flex space-x-2 pl-20 lg:pl-8 2xl:pl-32 xl:pl-40 ">
        <img src={Watch} alt="img" className="xs:w-4 xs:h-4 lg:w-3 lg:h-3 sm:w-6 sm:h-6 " />
        <p className="text-xs lg:text-xs sm:text-lg">{Week}</p>
</div>
</div> 
        </div>
       
            


            
          
        </div>
       
          
        
  );
};

export default AddDataMap;
