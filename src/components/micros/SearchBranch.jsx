import React from "react";
import { searchData } from "@/data/NavbarSelection";

const SearchBranch = () => {
  return (
    <>
      <div className="bg-orange-500 mx-2 w-1/4">
            <h1 className="text-white mx-2">
              Find Nearest Service Center
            </h1>
            <div className="bg-gray-700">
              <div className="flex flex-col items-center my-2 mx-4">
                <div className="my-2">
                  {searchData.map((value, i) => (
                    <div key={i} className="flex flex-row">
                      <span className="text-white mr-2">{value.name}</span>
                      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-[0.625rem] rounded-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-full p-2.5 my-1 text-xsdark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue>--Choose Width--</option>
                        <option value="220">220</option>
                      </select>
                    </div>
                  ))}
                </div>

                <div className="text-orange-600">
                  PS.Please choose one option
                </div>
                <button
                  type="button"
                  className={`text-white bg-orange-600 hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-md text-sm px-5 py-2 text-right inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 my-1 h-8 w-22`}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
    </>
  );
};

export default SearchBranch;
