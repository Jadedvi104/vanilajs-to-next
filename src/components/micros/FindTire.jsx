import React from "react";

const FindTire = () => {
  return (
    <>
      <div className="shrink-0 mr-2">
            <h1 className="text-gray-50 bg-orange-600 min-w-64">Find Tyre</h1>
            <div
              className="
              bg-orange-600
              relative 
              bg-tyrefilterImg 
              w-full h-[92%]
              bg-no-repeat"
            >
              <div className="absolute right-[1.8rem]">
                  <div>
                    <h1 className="text-white">TyreWidth</h1>
                    <p className="text-white text-xs">{`Size(mm)`}</p>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-[0.625rem] rounded-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-full p-2.5 text-xsdark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option defaultValue>--Choose Width--</option>
                      <option value="220">220</option>
                    </select>
                  </div>
                  <div>
                    <h1 className="text-white">Series</h1>
                    <p className="text-white text-xs">{`Hieght Ratio (%)`}</p>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-[0.625rem] rounded-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-full p-2.5 text-xsdark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option defaultValue>--Choose Series--</option>
                      <option value="220">220</option>
                    </select>
                  </div>
                  <div>
                    <h1 className="text-white">Wheel Diameter</h1>
                    <p className="text-white text-xs">{`Diameter(inch)`}</p>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-[0.625rem] rounded-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-full p-2.5 text-xsdark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option defaultValue>--Choose Wheel--</option>
                      <option value="220">220</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default FindTire;
