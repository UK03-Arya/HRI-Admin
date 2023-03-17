import React from "react";
import Card1 from "../Card1";
import MessageScreen from "../MessageScreen";
import MessageData from "../MessageData";
import { AiFillMessage } from "react-icons/ai";
export default function MessagePop() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div div className="md:hidden lg:hidden xl:hidden 2xl:hidden xs:block ms:block sm:block">
      {/* <button
        className="bg-gray-400 text-white active:bg-gray-400 font-bold  text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      > */}
      <AiFillMessage  className="text-lg top-12 absolute right-24 text-inherit  sm:mt-1 sm:right-10 sm:text-xl	"
        type="button"
        onClick={() => setShowModal(true)}/>
    
      {/* </button> */}
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto  ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col xs:w-[300px] sm:w-[400px] bg-white outline-none focus:outline-none">
                {/*header*/}
                
                {/*body*/}
                
    
    <div className=" bg-gray-300    ">
       
       <div className="flex xs:pt-60 xs:space-x-20 xs:ml-4 sm:pt-20  ">
       <a href="/" className="font-bold  text-sm  font-sans active:text-black text-slate-400  focus:text-black">New Messages</a>
       <a href="Screen2" className="font-bold text-slate-400 font-sans text-sm  active:text-black">Actions</a>


 
           


           
         
       </div>
       <MessageData/>
    </div> 
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid bg-gray-300  rounded-b">
                  <button
                    className="text-black bg-gray-300  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}