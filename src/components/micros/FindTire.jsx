import React from "react";

const FindTire = () => {
  return (
    <>
      <div id="find-tyre"  className="max-w-max my-2">
            <h1 id="find-tyre-header" 
            className="text-gray-50 bg-orange-600">Find Tyre</h1>
            <div
              id="tyre-slections-bg"
              className="
              relative
              bg-gray-600 
              "
            >
              <img id="tyre-slections-bg" src="/images/SOne_index_bg_searchtype.jpg" className="z-0 object-fill w-full h-full"/>

              <div 
                id="tyre-slections" 
                className="
                z-10 absolute bottom-12 right-12">
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
