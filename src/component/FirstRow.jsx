import React from "react";


const FirstRow = ({ Heading,Number }) => {
  
  return (
    <div className="flex  ">
       
      
          
            
       <div className='flex flex-col   h-[60px] p-4 pt-2 xl:w-[1359px] xl:h-[60px]  md:w-[700px]  lg:w-[980px] lg:h-[60px] w-[90px]  xl:mx-40  lg:mx-12 md:mx-10  drop-shadow-md rounded-2xl bg-[#F8F8F8] justify-between   xl:space-x-80 lg:justify-between md:justify-between 	'>
            <p className="text-xs   font-semibold ">{Heading}</p>
            <p className="text-xs  ">{Number}</p>
            


            
          
        </div>
       
            </div>
        
        
  );
};

export default FirstRow;
