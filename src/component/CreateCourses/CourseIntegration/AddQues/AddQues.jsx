import React, { useState } from "react";
import Back from "../../../../Assets/Back.png";
import Search from "../../../../Assets/Search.png";

const AddQues = () => {
  const [selectedChoice, setSelectedChoice] = useState(null);

  function handleChoiceSelection() {
    setSelectedChoice();
  }
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    show(!setShow);
  };

  // const handleMenuClick = () => {
  //   setShow(!show);
  // };
  const data = [
    {
      QNo: "Q1)",
      Qes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      Del: "Delete",
      Op1: "Bob’s Burgers",
      Op2: "Stranger Things",
      Op3: "Naruto",
      Op4: "Seven deadly sins",
    },
    {
      QNo: "Q2)",
      Qes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      Del: "Delete",
      Op1: "Bob’s Burgers",
      Op2: "Stranger Things",
      Op3: "Naruto",
      Op4: "Seven deadly sins",
    },
    {
      QNo: "Q3)",
      Qes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      Del: "Delete",
      Op1: "Bob’s Burgers",
      Op2: "Stranger Things",
      Op3: "Naruto",
      Op4: "Seven deadly sins",
    },
    {
      QNo: "Q4)",
      Qes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      Del: "Delete",
      Op1: "Bob’s Burgers",
      Op2: "Stranger Things",
      Op3: "Naruto",
      Op4: "Seven deadly sins",
    },
    {
      QNo: "Q5)",
      Qes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      Del: "Delete",
      Op1: "Bob’s Burgers",
      Op2: "Stranger Things",
      Op3: "Naruto",
      Op4: "Seven deadly sins",
    },
  ];
  return (
    <div>
      {/* <div className="flex xs:mt-28 flex-wrap">
        <div className="flex flex-wrap">
          <img src={Back} alt="img" className=" xs:ml-2 xs:w-3 xs:h-3 xs:mt-0.5  " />
          <p className="text-xs text-black xs:ml-4  font-semibold">Overview of quiz - Prototype</p>
        </div>
      
          <a href="AddQuesScreen" className="text-xs text-orange-600 xs:ml-14 font-semibold ">
            {" "}
            +Add Question
          </a>
    
      </div> */}
{/* <div className=" sm:flex sm:flex-row ">
      <div className="flex xs:w-[280px] ms:w-[300px] sm:w-[200px] ms:ml-12 xs:ml-8 xs:mt-28">
        <label className="text-sm text-black font-semibold">
          Question Bank
        </label>
        <div className=" flex rounded-3xl ml-6 xl:px-10 lg:px-7 px-3 xl:w-[400px] lg:w-[400px] md:w-[300px]  xs:w-[350px] py-1 border-2 border-gray-400 xl:space-x-40   xl:mb-0 md:mb-1 md:space-x-20 lg:space-x-40">
          <input
            type="text"
            placeholder="Search team member..."
            className=" lg:text-sm md:text-sm xl:text-sm text-xs "
          />
          <img src={Search} alt="img" className="w-3 h-3 mt-2 text-xs" />
        </div>
      </div>

      <div className="xs:ml-6 xs:space-x-20 ms:space-x-24 xs:mt-4  ms:ml-10 md:ml-56 xl:ml-[400px] lg:ml-72 lg:mt-16">
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[100px] sm:ml-20 rounded-2xl border-2 border-orange-400 focus:border-orange-400	 text-orange-400 focus:text-white bg-white focus:bg-orange-400 font-semibold">
          + Add Manually{" "}
        </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[100px] sm:ml-20 rounded-2xl border-2 border-orange-400 focus:border-orange-400	 text-orange-400 focus:text-white bg-white focus:bg-orange-400 font-semibold">
          Bulk Upload{" "}
        </button>
      </div>
</div> */}
<div className='sm:flex sm:flex-row sm:ml-4 md:ml-4 xl:ml-10 '>
         <div className="flex xs:w-[260px] ms:w-[260px] md:w-[575px] lg:w-[700px] xl:w-[1000px]  xs:ml-10 xs:mt-28 ms:ml-14 h-8">
        <label className="text-sm text-black font-semibold mt-1">
          Question Bank
        </label>
        <div className=" flex rounded-3xl xs:ml-6 sm:ml-2   pl-2 xl:w-[800px] md:w-[400px] md:ml-[50px] sm:w-[200px] ms:w-[275px]  lg:w-[500px]  xs:w-[350px]   py-1 border-2 ms:ml-16 border-gray-400    xl:mb-0 md:mb-1  ">
          <input
            type="text"
            placeholder="Search team member..."
            className=" lg:text-sm md:text-sm xl:text-sm text-xs "
          />
          <img src={Search} alt="img" className="w-3 h-3 mt-1 mr-4 text-xs md:ml-48 lg:ml-[250px] xl:ml-[550px] " />
        </div>
      </div>

      <div className="xs:ml-10 sm:mt-28 sm:ml-2 xs:space-x-20 xs:mt-8 ms:space-x-32 sm:space-x-2 ms:ml-12     lg:mt-30 ms:mt-8 xl:space-x-16 xl:ml-12 ">
        <a href='AddQuesForm' className="text-xs  xs:mt-2 p-1 xs:h-[30px] xs:w-[100px]  rounded-2xl border-2 border-orange-400 focus:border-orange-400	 text-orange-400 focus:text-white bg-white focus:bg-orange-400 font-semibold">
          + Add Manually{" "}
        </a>
        <a href='BulkUpload' className="text-xs p-1 ms:ml-2  rounded-2xl border-2 border-orange-400 focus:border-orange-400	 text-orange-400 focus:text-white bg-white focus:bg-orange-400 font-semibold ">
          Bulk Upload{" "}
        </a>
      </div>
</div>

      <div className="flex flex-wrap mt-8 xs:ml-4 ms:ml-10 sm:ml-16 ">
        <img
          src={Back}
          alt="img"
          className=" xs:ml-2 xs:w-4 xs:h-4 xs:mt-1  "
        />
        <p className="text-sm text-black xs:ml-4  font-semibold">
          Overview of quiz - Prototype
        </p>
      </div>

      <div className="">
        <div className="  xs:grid xs:grid-cols-1 xs:mt-10  flex-wrap ms:ml-6 sm:ml-16  ">
          {data.map((elem, index) => (
            <div key={index}>
              <div className="xs:w-[330px] sm:w-[475px] md:w-[800px] lg:w-[900px] xl:w-[1400px] xs:ml-2">
                <div className="flex">
                  <div className="flex xs:space-x-1">
                    <p className="text-sm text-black font-semibold">
                      {elem.QNo}
                    </p>
                    <p className="text-sm  text-black font-semibold">
                      {elem.Qes}
                    </p>
                  </div>
                  {/* <p className="text-sm text-red-600 font-semibold ">{elem.Del}</p> */}
                  <div className="flex space-x-6 md:ml-60 lg:ml-[350px] xl:ml-[800px]">
                  <p className=" text-xs font-semibold text-gray-400">View All</p>
                  <a href="QuestionBank" className=" text-xs font-semibold text-orange-400">Added Question</a>
                  </div>
                </div>

                <div className="grid grid-cols-1 xs:ml-6 xs:py-4 xs:space-y-2">
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold">
                      {elem.Op1}
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold">
                      {elem.Op2}
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold">
                      {elem.Op3}
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="radio"
                      onChange={() => handleChoiceSelection()}
                    />
                    <label className="text-sm text-gray-500 font-semibold">
                      {elem.Op4}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default AddQues;
