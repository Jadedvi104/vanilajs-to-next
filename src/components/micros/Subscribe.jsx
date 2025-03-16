import React from "react";
import { searchData } from "@/data/NavbarSelection";

const Subscribe = () => {
  return (
    <>
      <div className="flex flex-col bg-gray-500 w-1/4">
        <img src="/images/tips_01.jpg"></img>
        <div className="flex flex-row bg-white">
          <h1 className="text-black"> Subscription</h1>
          <input type="eamil" id="email-sub" placeholder="please input"></input>
          <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
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
