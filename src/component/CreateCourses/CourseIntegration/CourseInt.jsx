import React from "react";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import Chapter2 from "./Chapter2";
import ChapterQuiz2 from "./ChapterQuiz2";
import ChapterQuiz3 from "./ChapterQuiz3";

const CourseInt = () => {
  return (
    <div>
      <p className="text-xs mt-8 ml-2 md:text-sm text-gray-600">
        Enter your Course content and course title here
      </p>
      <div className="grid grid-cols-3 md:flex xs:mt-2 xs:w-[300px] ms:w-[340px] sm:w-[480px] xl:w-[1200px] bg-orange-100 xs:h-[100px] md:w-[785px] md:space-x-6 lg:w-[910px] lg:space-x-14  md:pt-4 ">
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] sm:w-[110px] md:w-[130px] md:h-[40px] md:rounded-3xl md:text-sm rounded-2xl  border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
          Session 1
        </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] sm:w-[110px] rounded-2xl md:w-[130px] md:h-[40px] md:rounded-3xl md:text-sm border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
          Session 2
        </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] sm:w-[110px] md:w-[130px] md:h-[40px] md:rounded-3xl md:text-sm rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
          Session 3
        </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] sm:w-[110px] rounded-2xl border-2 md:w-[130px] md:h-[40px] md:rounded-3xl md:text-sm border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
          Session 4
        </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[90px]  sm:w-[110px] rounded-2xl border-2 md:w-[130px] md:h-[40px] md:rounded-3xl md:text-sm border-dashed border-orange-400	 text-orange-400 focus:text-white bg-white focus:bg-orange-200">
          {" "}
          + Add Session
        </button>
      </div>
      <div className="flex justify-between mt-8 xs:w-[250px] ms:w-[300px] sm:w-[400px] md:w-[750px] lg:w-[850px] xl:w-[1100px] xs:ml-4">
        <div>
          {" "}
          <p className="text-sm text-black font-semibold">Chapter 1 -</p>
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
        <div className="flex  xs:w-[250px] ms:w-[295px] sm:w-[400px] md:w-[600px] lg:w-[400px] sm:h-8  sm:pt-1 h-6 mt-2 rounded-full border-2	 border-gray-400 ">
          <label
            for="Cordinater"
            className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
          >
            Video
          </label>
        </div>{" "}
        <div className="flex  xs:w-[250px] ms:w-[295px] sm:w-[400px] lg:w-[400px] sm:h-8   sm:pt-1 h-6 mt-2 md:w-[600px] rounded-full border-2	 border-gray-400 ">
          <label
            for="Cordinater"
            className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
          >
            {" "}
            Reading
          </label>
        </div>
        <div className="flex  xs:w-[250px] ms:w-[295px]  sm:w-[400px] md:w-[600px] lg:w-[400px] sm:h-8  sm:pt-1 h-6 mt-2 rounded-full border-2	 border-gray-400 ">
          <label
            for="Cordinater"
            className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
          >
            Quiz
          </label>
        </div>
        <div className="flex  xs:w-[250px] ms:w-[295px] sm:w-[400px] md:w-[600px] lg:w-[400px] sm:h-8  sm:pt-1  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
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
          Upload video of the course{" "}
        </label>
      </div>
      <div className="xs:h-[150px] xs:w-[275px] ms:w-[315px] sm:w-[455px] sm:h-[180px] md:w-[755px] md:h-[200px] lg:w-[880px] lg:h-[250px] xl:w-[1170px] xl:h-[350px] rounded-3xl border-2 border-dashed border-gray-400	   bg-orange-100 xs:ml-3 xs:mt-4">
      <div className='xs:w-[200px] xs:h-[5px] ms:w-[250px] sm:ml-28 xs:ml-8 ms:ml-12 md:ml-[250px] lg:ml-[330px] xl:ml-[450px]'>        <p className='text-sm xs:mt-4 xs:ml-16 text-gray-400 font-semibold'> Upload Video</p>
        <p className='text-xs mb-4 text-gray-400 font-semibold'>Video should not be more than 5000px</p></div>
        <BsFillCaretRightSquareFill className="text-gray-400 xs:text-2xl xs:mt-[60px] xs:ml-[120px] ms:ml-[150px] sm:ml-[200px] md:ml-[350px] lg:ml-[420px] xl:ml-[540px]" />
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
                      className=" font-semibold xs:w-[275px] ms:w-[315px] xs:h-[150px] sm:w-[455px] sm:h-[180px]  md:w-[755px] md:h-[200px] lg:w-[880px] lg:h-[250px] xl:w-[1170px] xl:h-[350px] mt-2 px-4 pt-1 rounded-lg border-gray-400 border-2	"
                    />
                  </div>
                </div>
                <button className="text-xs xs:ml-3 xs:mt-4 p-1 xs:h-[30px] xs:w-[90px] rounded-2xl border-2 border-dashed border-gray-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-200">
          {" "}
          + Add Session
        </button>
        <Chapter2/>
        <ChapterQuiz2/>
        <ChapterQuiz3/>
        <div className="xs:ml-14 xs:mt-10 xs:pb-10 ms:ml-16 md:ml-56 xl:ml-[400px] lg:ml-72 lg:mt-16">
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[85px] sm:ml-20 rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Save as draft        </button>
        <button className="text-xs xs:ml-2 xs:mt-2 p-1 xs:h-[30px] xs:w-[80px] rounded-2xl border-2 border-neutral-300 focus:border-orange-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-400">
Upload        </button>
</div>
    </div>
  );
};

export default CourseInt;
