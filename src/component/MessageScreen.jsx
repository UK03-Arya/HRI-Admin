import React from "react";


const MessageScreen = ({  P, UserN,LastSeen,Comment}) => {
  
  return (
    <div className="flex my-2">
    <div className="md:ml-6">
<img src={P} alt="img" className=" " />

</div>
   <div className="ml-2">
   <div className="flex space-x-6">
   <p className="text-sm font-bold">{UserN}</p>
    <p className="text-xs text-slate-400	mt-1">{LastSeen}</p>
   </div>
   
   
     <p className="text-sm text-slate-500">{Comment}</p>

   </div>
       
   </div>        
        
  );
};

export default MessageScreen;
