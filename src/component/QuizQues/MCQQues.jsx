import React,{useState} from "react";
import Back from "../..//Assets/Back.png";
const MCQQues = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  function handleChoiceSelection() {
    setSelectedChoice();
  }
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
        <div className="flex flex-wrap">
          <img src={Back} alt="img" className=" xs:ml-2 xs:w-3 xs:h-3 xs:mt-0.5  " />
          <p className="text-xs text-black xs:ml-4  font-semibold">Overview of quiz - Prototype</p>
        </div>
      
          <a href="AddQuesScreen" className="text-xs text-orange-600 xs:ml-14 font-semibold ">
            {" "}
            +Add Question
          </a>
    
      </div>
      <div className="">
      
      <div className="  xs:grid xs:grid-cols-1 xs:mt-10 lg:grid-cols-2 flex-wrap   ">
        {data.map((elem, index) => (
          <div key={index} >
          <div className="xs:w-[310px] xs:ml-2">
          <div className="flex">
       <div className="flex xs:space-x-1">
       <p className="text-sm text-black font-semibold">{elem.QNo}</p>
       <p className="text-sm  text-black font-semibold">{elem.Qes}</p>
       </div>
       <p className="text-sm text-red-600 font-semibold ">{elem.Del}</p>

       </div>
      
      <div className="grid grid-cols-1 xs:ml-6 xs:py-4 xs:space-y-2">
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm text-gray-500 font-semibold">{elem.Op1}</label>
      </div>
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm text-gray-500 font-semibold">{elem.Op2}</label>
      </div>
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm text-gray-500 font-semibold">{elem.Op3}</label>
      </div>
      <div className="flex space-x-2">
      <input type="radio"   onChange={() => handleChoiceSelection()}/>
      <label className="text-sm text-gray-500 font-semibold">{elem.Op4}</label>
      </div>
      

     
      </div>
      </div>
          </div>
        ))}
      </div>
    </div>
    <div className="xs:ml-16 xs:mt-10 xs:pb-10 ms:ml-16 md:ml-56 xl:ml-[400px] lg:ml-72 lg:mt-16">
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[85px] sm:ml-20 rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Cancel       </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Select        </button>
</div>
    </div>
  );
};

export default MCQQues;
