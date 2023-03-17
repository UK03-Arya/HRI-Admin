import React from 'react'
import ActionData from './ActionData'
// import FirstRow from './FirstRow'
const ActionScreen = () => {
  return (
    <div className=' '>
    
     <div className=" bg-gray-300 hidden md:block lg:block  xl:block  lg:ml-10 md:w-[300px] md:h-[2400px] lg:h-[1160px] xl:h-[1320px] xl:ml-16    ">
        
        <div className="flex space-x-20 ml-4 ">
        <a href="/" className="font-bold  text-sm mt-24 font-sans active:text-black text-slate-400  focus:text-black">New Messages</a>
        <a href="Screen2"className="font-bold text-slate-400 font-sans text-sm mt-24 active:text-black">Actions</a>


  
            


            
          
        </div>
        <ActionData/>
     </div> 



    </div>
  )
}

export default ActionScreen