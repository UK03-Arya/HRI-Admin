import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
// import FirstRow from "./FirstRow";
import Nav from "./Nav";
// import FirstRow from './FirstRow'
const Card = () => {
  return (
    <div>
      <Nav />
      
      <div className="flex flex-row w-[350px]">
        <Card2 />
    
        <Card1 />
      </div>
   
    
    </div>
  );
};

export default Card;
