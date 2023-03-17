import React from "react";
import ActionScreen from "./Action/ActionScreen";
import Card1 from "./Card1";
import Card2 from "./Card2";
// import FirstRow from "./FirstRow";
import Nav from "./Nav";
// import FirstRow from './FirstRow'

const CardS = () => {
  return (
    <div>
      <Nav />
      
      <div className="flex flex-row w-[350px] ">
        <Card2 />
       

       <ActionScreen/>

      </div>
   
    
    </div>
  );
};

export default CardS;
