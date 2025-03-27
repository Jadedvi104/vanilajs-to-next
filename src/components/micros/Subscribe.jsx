import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="flex flex-col bg-white w-full md:w-[20%] p-1">
        <img src="/images/banner_promotion_01.jpg" className="w-full"></img>
        <div className="flex flex-row bg-white w-full p-2">
          <span className="text-sm font-mediumtext-black flex items-center h-10"> Subscription</span>
          <input
            type="email"
            id="email-sub"
            placeholder="please input"
            className=" 
            hidden lg:flex w-full
            px-2 py-1 border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-l-md 
            focus:ring-blue-500 
            focus:border-blue-500 
            focus:outline-none focus:ring-2
            h-10
            "
          />
          <button className="
          w-6 hidden lg:flex align-middle justify-center
          text-white bg-gray-800 
          hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 
          font-medium rounded-r-md 
          text-sm px-5 py-2.5 me-2 mb-2 
          dark:bg-gray-800 
          dark:hover:bg-gray-700 dark:focus:ring-gray-700 
          dark:border-gray-700
          h-10
          "
          >
            GO
          </button>
        </div>
        <hr className="mx-2 border-dashed"></hr>
        <h1>02-888-2222</h1>
      </div>
    </>
  );
};

export default Subscribe;
