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
    <div>
    
      <div className=" flex flex-wrap space-x-2  xs:pl-10 sm:pl-16 ">
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
