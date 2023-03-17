import React from "react";
import FirstRow from "./FirstRow";

const FirstRowData = () => {
  const FirstRow1 = [
    {
     Heading:"Total Courses",
     Number:"12,99,000",
     
    },
  
    {
      Heading:"Total Users",
      Number:"30,000",
      
     },
     {
      Heading:"Courses Creators",
      Number:"12,99,000",
      
     },
  ];
  return (
    <div className="">
    
      <div className=" md:grid grid-cols-3 flex  space-x-2 sm:space-x-0  xs:pl-8  ms:ml-4 ">
        {FirstRow1.map((elem, index) => (
          <FirstRow
            key={index}
           Heading={elem.Heading}       
               Number={elem.Number}
              





          />
        ))}
      </div>
    </div>
  );
};

export default FirstRowData;
