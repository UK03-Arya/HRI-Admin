import React from "react";
import { useState } from "react";
const CreateCourseForm = () => {
  const [CourseLevel, setCourseLevel] = useState("Beginner");

  return (
    <div>
      <div className="xs:mt-28 xs:ml-0 sm:ml-0 lg:ml-4 xl:ml-20 ">
        <div className="xs:ml-1 ms:ml-1 sm:ml-8">
          <p className="text-black ml-10 font-semibold text-sm">Create Course</p>
          <p className="text-black ml-10 font-semibold text-md">Course Detail</p>
        </div>

        <div className="   ">
        <div className="relative box-content  xs:ml-6 sm:w-[465px] sm:h-[850px]  sm:ml-16 xs:h-[750px] xs:w-[300px] ms:w-[350px] md:w-[800px] lg:w-[900px] lg:ml-16 lg:mt-8 xl:w-[1200px]  md:h-[550px] lg:h-[500px] xl:h-[500px] md:pb-4 lg:pb-8 pb-4 xl:pt-4 xl:pb-10   drop-shadow-xl rounded-2xl bg-white   ">
            <div>
              <div className="flex flex-col lg:space-x-12 xl:space-x-24 lg:flex-row md:flex-row xl:flex-row ml-4 xl:ml-10 ">
                <div className="flex sm:ml-4 flex-col mt-6 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Title Of Course
                  </label>
                  <div className="flex   ">
                    <input
                      type="Name"
                      value="Tax Filling"
                      className="xs:w-[250px] ms:w-[300px] md:w-[350px] sm:h-8  sm:w-[400px]   h-6 mt-2 text-xs pl-4  xl:w-[500px] font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8   rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:ml-4 mt-2 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Cordinator{" "}
                  </label>
                  <div className="flex  ">
                    <input
                      type="Name"
                      value="Arya"
                      className="xs:w-[250px] ms:w-[300px] md:w-[350px] sm:h-8 sm:w-[400px]  h-6 mt-2 text-xs pl-4  xl:w-[500px] font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8  rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col lg:space-x-14 xl:space-x-24  lg:flex-row md:flex-row xl:flex-row ml-4 xl:ml-10 ">
                <div className="flex flex-col sm:ml-4  mt-2  ">
                  <label
                    for="Gender"
                    className="block  text-xs   font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Description
                  </label>
                  <div className="flex ">
                    <textarea
                      value="hello"
                      className="xs:w-[250px] ms:w-[300px] sm:w-[400px]  md:w-[350px] lg:w-[380px]  xl:w-[500px]  h-[120px] font-semibold  mt-2 px-4 pt-1 rounded-lg border-gray-400 border-2	"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:ml-4 mt-2 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="Cordinater"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Course Level (Select One)
                  </label>
                  {/* <div className="flex  rounded-full border-2	 border-gray-400 "> */}
                  {/* Hello
                    <input
                      type="checkbox"
                      checked={CourseLevel==="Beginner"}
                      onChange={()=>setCourseLevel("Beginner")}
                      value="Arya"
                      className="w-[250px] h-6 mt-2 text-xs pl-4  xl:w-96 font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-6 md:w-28 md:px-36 rounded-full border-2	 border-gray-400 focus:text-orange "
                    />
                  
                    
                  </div> */}
                   {/* <div className="flex  rounded-full border-2	 border-gray-400 ">
                  
                     Hello
                    <input
                      type="checkbox"
                      checked={CourseLevel==="Advance"}
                      onChange={()=>setCourseLevel("Advance")}
                      value="Arya"
                                          className="w-[250px] h-6 mt-2 text-xs pl-4  xl:w-96 font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-6 md:w-28 md:px-36 rounded-full "
                    />
                    
                  </div> */}

                  <div className="flex sm:w-[400px] lg:w-[375px] xl:w-[500px]  md:w-[350px] sm:h-8 xs:w-[250px] ms:w-[300px] h-6 mt-2 rounded-full border-2	 border-gray-400 ">
                  <label
                    for="Cordinater"
                    className="block pl-2 pt-1 text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
                  >beginner
                  </label>
                  
                  </div>  <div className="flex sm:w-[400px] md:w-[350px] lg:w-[375px] xl:w-[500px] sm:h-8  xs:w-[250px] ms:w-[300px]  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
                  <label
                    for="Cordinater"
                    className="block pl-2 pt-1 text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
                  >Intermediate
                  </label>
                  
                  </div>

                  <div className="flex sm:h-8 xs:w-[250px] lg:w-[375px]  md:w-[350px] sm:w-[400px]  ms:w-[300px] xl:w-[500px] h-6 mt-2 rounded-full border-2	 border-gray-400 ">
                  <label
                    for="Cordinater"
                    className="block pl-2 pt-1  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
                  >Advance
                  </label> 
                  
                  </div>
                </div>
              </div>
              <div className="flex lg:space-x-14 xl:space-x-24 flex-col lg:flex-row md:flex-row xl:flex-row ml-4 xl:ml-10 ">
                <div className="flex sm:ml-4 flex-col mt-4 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Time Duration
                  </label>
                  <div className="flex  ">
                    <input
                      type="Name"
                      value="Tax Filling"
                      className="xs:w-[250px] sm:w-[400px] xl:w-[500px]  md:w-[350px] sm:h-8 ms:w-[300px] h-6 mt-2 text-xs pl-4  font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8 rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:ml-4 mt-2 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Total Classes
                  </label>
                  <div className="flex  ">
                    <input
                      type="Name"
                      value="Arya"
                      className="xs:w-[250px] xl:w-[500px] md:w-[350px] sm:w-[400px] sm:h-8 ms:w-[300px] h-6 mt-2 text-xs pl-4   font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8  rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>
              </div>
            <div className="flex flex-col lg:space-x-14 xl:space-x-24 lg:flex-row md:flex-row xl:flex-row ml-4 xl:ml-10 ">
              <div className="flex flex-col    ">
                <div className="flex flex-col sm:ml-4 mt-2 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Pricing
                  </label>
                  <div className="flex  ">
                    <input
                      type="Name"
                      value="Free"
                      className="xs:w-[250px] xl:w-[500px] sm:w-[400px] sm:h-8  md:w-[350px] ms:w-[300px] h-6 mt-2 text-xs pl-4   font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8  rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>

                <div className="flex sm:ml-4 flex-col mt-2 md:mt-4 lg:mt-2 xl:mt-2">
                 
                  <div className="flex  ">
                    <input
                      type="Name"
                      value="Paid"
                      className="xs:w-[250px] sm:w-[400px] xl:w-[500px] md:w-[350px] sm:h-8 ms:w-[300px] h-6 mt-2 text-xs pl-4  font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8  rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>
                
             
              </div>
              <div className="flex sm:ml-4 flex-col mt-2 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                   Tax in %
                  </label>
                  <div className="flex  ">
                    <input
                      type="Name"
                      value="45%"
                      className="xs:w-[250px] xl:w-[500px]  md:w-[350px] sm:w-[400px] sm:h-8 ms:w-[300px]  h-6 mt-2 text-xs pl-4   font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8  rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>
              
</div>

<div className="flex sm:ml-8 flex-col ml-4 xl:ml-14 mt-2 md:mt-4 lg:mt-2 xl:mt-2">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                   Language used in video
                  </label>
                  <div className="flex  ">
                    <input
                      type="Name"
                      value="English"
                      className="xs:w-[250px] xl:w-[500px] sm:w-[400px] sm:h-8  md:w-[350px] ms:w-[300px] h-6 mt-2 text-xs pl-4   font-semibold xl:h-8 lg:w-96 lg:px-10 lg:h-8  rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseForm;
