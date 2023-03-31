import React from "react";
import ProtoQuiz from "./ProtoQuiz";

const ChapterQuiz3 = () => {
  return (
    <div>
      <div className="flex justify-between mt-8 xs:w-[250px] ms:w-[300px] md:w-[750px] xl:w-[1100px] xs:ml-4">
        <div>
          {" "}
          <p className="text-sm text-black font-semibold">Chapter 3 -</p>
        </div>
        <div>
          {" "}
          <a href="" className="text-sm text-red-600 font-semibold">
            Delete
          </a>
        </div>
      </div>
      <div className="lg:flex lg:flex-row lg:space-x-12 xl:space-x-28">



        <div className="flex flex-col mt-6 xs:ml-4">
          <label
            for="Cordinater"
            className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
          >
            Chapter Type{" "}
          </label>
          <div className="flex  xs:w-[250px] ms:w-[295px] sm:w-[400px] lg:w-[400px] sm:h-8 md:w-[600px] xl:w-[500px] pt-1 h-6 mt-2 rounded-full border-2	 border-gray-400 ">
            <label
              for="Cordinater"
              className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
            >
              Video
            </label>
          </div>{" "}
          <div className="flex  xs:w-[250px] ms:w-[295px] xl:w-[500px] pt-1  md:w-[600px] sm:w-[400px] lg:w-[400px] sm:h-8  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
            <label
              for="Cordinater"
              className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
            >
              {" "}
              Reading
            </label>
          </div>
          <div className="flex xs:w-[250px] ms:w-[295px] xl:w-[500px] pt-1 md:w-[600px] sm:w-[400px] lg:w-[400px] sm:h-8  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
            <label
              for="Cordinater"
              className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
            >
              Quiz
            </label>
          </div>
          <div className="flex  xs:w-[250px] ms:w-[295px] xl:w-[500px] pt-1  md:w-[600px] sm:w-[400px] lg:w-[400px] sm:h-8  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
            <label
              for="Cordinater"
              className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
            >
              Practice Quiz
            </label>
          </div>
        </div>



        <div className="flex flex-col mt-6 ml-4 ">
          <label
            for="Cordinater"
            className="block text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
          >
            Details of Quiz{" "}
          </label>
          <div className="flex  xs:w-[250px] ms:w-[295px]  md:w-[600px] xl:w-[500px] pt-1 lg:w-[400px] sm:w-[400px] sm:h-8  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
            <label
              for="Cordinater"
              className="ml-2 text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
            >
              Name of Quiz
            </label>
          </div>{" "}
          <div className="flex  xs:w-[250px] ms:w-[295px] lg:w-[400px] xl:w-[500px] pt-1 md:w-[600px] sm:w-[400px] sm:h-8  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
            <label
              for="Cordinater"
              className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
            >
              Markings-
            </label>
          </div>
          <div className="flex  xs:w-[250px] ms:w-[295px] lg:w-[400px] xl:w-[500px] pt-1 md:w-[600px] sm:w-[400px] sm:h-8  h-6 mt-2 rounded-full border-2	 border-gray-400 ">
            <label
              for="Cordinater"
              className="block pl-2  text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
            >
              Total Time Given -
            </label>
          </div>
        </div>
      </div>



      <div>
        <div className="xs:w-[275px] xs:ml-2 lg:w-[800px] xs:mt-2">
          <label
            for="Cordinater"
            className=" text-xs font-semibold text-gray-400 xl:text-md lg:text-md md:text-md"
          >
            Quizes Available (You can add/delete questions in quiz if you like)
          </label>
        </div>
        <button className="text-xs xs:ml-3 xs:mt-4 p-1 xs:h-[30px] xl:w-[500px]  md:w-[600px] lg:w-[410px] xs:w-[275px] ms:w-[290px] sm:w-[400px] sm:h-8  rounded-2xl border-2 border-dashed border-orange-400	 text-orange-400 focus:text-white bg-orange-200 focus:bg-orange-200">
          {" "}
          Create Quiz
        </button>
      </div>
      <ProtoQuiz />
      <button className="text-xs xs:ml-3 xs:mt-4 p-1 xs:h-[30px] xs:w-[90px] rounded-2xl border-2 border-dashed border-gray-400	 text-gray-400 focus:text-white bg-white focus:bg-orange-200">
        {" "}
        + Add Session
      </button>
    </div>
  );
};

export default ChapterQuiz3;
