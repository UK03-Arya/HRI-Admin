import React from 'react'
// import { BsFiletypePdf } from "react-icons/bs";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

const Chapter2 = () => {
  return (
    <div>
    <div className="flex justify-between mt-8 xs:w-[250px] ms:w-[300px] sm:w-[400px] md:w-[750px] lg:w-[850px] xl:w-[1100px] xs:ml-4">
        <div>
          {" "}
          <p className="text-sm text-black font-semibold">Chapter 2 -</p>
        </div>
        <div>
          {" "}
          <a href="" className="text-sm text-red-600 font-semibold">
            Delete
          </a>
        </div>
      </div>
      <div className="flex flex-col mt-2 xs:ml-4">
        <label
          for="Cordinater"
          className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
        >
          Chapter Type{" "}
        </label>
        <div className="flex   xs:w-[250px] ms:w-[295px] sm:w-[400px] md:w-[600px]  lg:w-[400px] sm:h-8 h-6 mt-2 rounded-full border-2	 border-gray-400 ">
          <label
            for="Cordinater"
            className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
          >
            Video
          </label>
        </div>{" "}
        <div className="flex lg:w-[400px]  xs:w-[250px] ms:w-[295px] sm:w-[400px] md:w-[600px] sm:h-8 h-6 mt-2 rounded-full border-2	 border-gray-400 ">
          <label
            for="Cordinater"
            className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
          >
            {" "}
            Reading
          </label>
        </div>
        <div className="flex lg:w-[400px] xs:w-[250px] ms:w-[295px] sm:w-[400px] md:w-[600px] sm:h-8  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
          <label
            for="Cordinater"
            className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
          >
            Quiz
          </label>
        </div>
        <div className="flex lg:w-[400px] xs:w-[250px] ms:w-[295px] sm:w-[400px] md:w-[600px] sm:h-8 h-6 mt-2 rounded-full border-2	 border-gray-400 ">
          <label
            for="Cordinater"
            className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
          >
            Practice Quiz
          </label>
        </div>
      </div>
      <div className="flex flex-col mt-4 xs:ml-4">
        <label
          for="Cordinater"
          className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
        >
          Upload PDF file of the course{" "}
        </label>
      </div>
      <div className="xs:h-[150px] xs:w-[275px] ms:w-[315px] sm:w-[455px] sm:h-[180px]  md:w-[755px] md:h-[200px] lg:w-[880px] lg:h-[250px] xl:w-[1170px] xl:h-[350px] rounded-3xl border-2 border-dashed border-gray-400	   bg-orange-100 xs:ml-3 xs:mt-4">
      <div className='xs:w-[200px] xs:h-[5px] ms:w-[250px] xs:ml-8 sm:ml-28 ms:ml-12 md:ml-[250px] lg:ml-[330px] xl:ml-[450px]'>        <p className='text-sm xs:mt-4 xs:ml-16 text-gray-400 font-semibold'> Upload Pdf</p>
        <p className='text-xs mb-4 text-gray-400 font-semibold'>File should not be more than 300mb</p></div>

        <BsFileEarmarkPdfFill className="text-gray-400 xs:text-2xl xs:mt-[60px] xs:ml-[120px] ms:ml-[140px] sm:ml-[200px] md:ml-[350px] lg:ml-[420px] xl:ml-[540px]" />
      </div>
                <div className="flex flex-col  mt-4 xs:ml-3 ">
                  <label
                    for="Gender"
                    className="  text-xs  font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
                  >
                    Description (Optional)
                  </label>
                  <div className="flex  ">
                    <textarea
                      value="qwerty"
                      className=" font-semibold xs:w-[275px] ms:w-[315px] xl:w-[1170px] xl:h-[350px]  xs:h-[150px] sm:w-[455px] sm:h-[180px]  md:w-[755px] md:h-[200px] lg:w-[880px] lg:h-[250px]  mt-2 px-4 pt-1 rounded-lg border-gray-400 border-2	"
                    />
                  </div>
                </div>
                <button className="text-xs xs:ml-3 xs:mt-4 p-1 xs:h-[30px] xs:w-[90px] rounded-2xl border-2 border-dashed border-gray-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-200">
          {" "}
          + Add Session
        </button>
    
    </div>
  )
}

export default Chapter2
