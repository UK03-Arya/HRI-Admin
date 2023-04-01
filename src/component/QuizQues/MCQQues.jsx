import React,{useState} from "react";
import Back from "../..//Assets/Back.png";
import { useNavigate } from 'react-router-dom'
// import DeleteM from "../Modals/DeleteM";

import { confirm } from "react-confirm-box";

const MCQQues = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);
  const history =useNavigate()

  function handleChoiceSelection() {
    setSelectedChoice();
  }
  const onClick = async () => {
    const result = await confirm("Are you sure?");
    if (result) {
      <button>You click yes!</button>
      return;
    }
    <buttton>You click No!</buttton> 
  };
  const data = [
    { QNo:"Q1)", Qes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", Del:"Delete", Op1:"Bob’s Burgers", Op2:"Stranger Things", Op3:"Naruto", Op4:"Seven deadly sins" },
    { QNo:"Q2)", Qes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", Del:"Delete", Op1:"Bob’s Burgers", Op2:"Stranger Things", Op3:"Naruto", Op4:"Seven deadly sins" },
    { QNo:"Q3)", Qes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", Del:"Delete", Op1:"Bob’s Burgers", Op2:"Stranger Things",  Op3:"Naruto", Op4:"Seven deadly sins" },
    { QNo:"Q4)", Qes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", Del:"Delete", Op1:"Bob’s Burgers", Op2:"Stranger Things", Op3:"Naruto", Op4:"Seven deadly sins" },
    { QNo:"Q5)", Qes:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?", Del:"Delete", Op1:"Bob’s Burgers", Op2:"Stranger Things", Op3:"Naruto", Op4:"Seven deadly sins" },
   
  
  
    
  ];
  return (
    <div>
      <div className="flex xs:mt-28 flex-wrap">
        <div className="flex flex-wrap xs:ml-4 ms:ml-8 sm:ml-12 md:ml-14 lg:ml-16">
         
        <button onClick={()=>history(-1)}>
          <img src={Back} alt="img" className=" xs:ml-2 xs:w-3 xs:h-3 xs:mt-0.5 sm:w-4 sm:h-4 sm:mt-1.5  " />
          
          </button>
          <p className="text-xs text-black xs:ml-2 sm:text-lg font-semibold">Overview of quiz - Prototype</p>
        </div>
      
          <p href="AddQuesScreen" className="text-xs sm:text-lg text-orange-600 xs:ml-8 ms:ml-14 sm:ml-24 md:ml-[395px] lg:ml-[500px] xl:ml-[900px] font-semibold ">
            {" "}
            +Add Question
          </p>
        
    
      </div>
      <div className="">
      
      <div className="  xs:grid xs:grid-cols-1 xs:mt-10  flex-wrap   ">
        {data.map((elem, index) => (
          <div key={index} >
          <div className="xs:w-[290px] ms:w-[310px] sm:w-[475px] md:w-[800px] lg:w-[950px] xl:w-[1300px] ms:ml-10 xs:ml-6 sm:ml-14 md:ml-[65px] lg:ml-[70px]">
          <div className="flex">
       <div className="flex xs:space-x-1">
       <p className="text-sm sm:text-lg text-black font-semibold">{elem.QNo}</p>
       <p className="text-sm sm:text-lg text-black font-semibold">{elem.Qes}</p>
       </div>
       <a href="DeleteM" className="text-sm sm:text-lg md:ml-60 lg:ml-[350px] xl:ml-[700px] text-red-600 font-semibold ">{elem.Del}</a>

       </div>
{/* <div><DeleteM/></div> */}
      
      
      <div className="grid grid-cols-1 xs:ml-6 xs:py-4 xs:space-y-2">
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm sm:text-lg text-gray-500 font-semibold">{elem.Op1}</label>
      </div>
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm sm:text-lg text-gray-500 font-semibold">{elem.Op2}</label>
      </div>
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm sm:text-lg text-gray-500 font-semibold">{elem.Op3}</label>
      </div>
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm sm:text-lg text-gray-500 font-semibold">{elem.Op4}</label>
      </div>
      

     
      </div>
      </div>
          </div>
        ))}
      </div>
    </div>
    <div className="xs:ml-[70px] xs:mt-10 xs:pb-10 ms:ml-[90px] md:ml-[250px] xl:ml-[550px] sm:ml-[100px] lg:ml-[350px] lg:mt-16">
        <button className="text-xs sm:text-lg xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[85px] sm:w-[100px] m:h-[4s0px] sm:ml-20 sm:pt-0 rounded-full border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Cancel       </button>
        <button className="text-xs sm:text-lg  xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] sm:w-[100px] ms:h-[30px] sm:ml-4 sm:pt-0 xl:h-[30px] md:h-[30px] sm:h-[30px]  rounded-full  border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Select        </button>
</div>
    </div>
  );
};

export default MCQQues;   
