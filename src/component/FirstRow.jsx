import React from "react";


const FirstRow = ({ Heading,Number }) => {
  
  return (
    <div className="flex  ">
       
      
          
        
       <div className='flex flex-col  2xl:h-[100px] 2xl:w-[250px] 2xl:pl-12 2xl:ml-20  h-[60px] p-4 pt-2 mt-2  md:w-[400px]  lg:w-[600px] xl:h-[100px] lg:h-[80px] w-[90px]  md:h-[60px] lg:mx-1   drop-shadow-md rounded-2xl  bg-[#F8F8F8] justify-between sm:w-[140px]  sm:mr-10 xl:ml-10 lg:justify-between md:justify-between lg:mr-4	'>
            <p className="text-xs xl:text-lg md:text-md  font-semibold ">{Heading}</p>
            <p className="text-xs md:text-md xl:text-lg ">{Number}</p>
            


            
          
        </div>
       
            </div>
        
        
  );
};

export default FirstRow;
