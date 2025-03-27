import React from "react";

const FindTire = () => {
  return (
    <>
      <div id="find-tyre" className="max-w-max my-2">
        <h1 id="find-tyre-header" className="text-gray-50 bg-orange-600">
          Find Tyre
        </h1>
        <div
          id="tyre-slections-bg"
          className="
          bg-gray-600 
          relative
          "
        >
          <div className="static">
            <img
              id="tyre-slections-bg"
              src="/images/SOne_index_bg_searchtype.jpg"
              className="z-0 object-fill w-full h-full"
            />

            <div
              id="tyre-slections"
              className="
              flex
              flex-col
              z-10 
              absolute 
              top-2 bottom-14 left-[6.25em] right-4 
              "
            >
              <div id="tyre-slections-tyrewidth" className="flex flex-col">
                <h1 className="text-white text-nowrap text-[0.825rem] ">TyreWidth</h1>
                <p className="text-white text-[0.625rem]">{`Size(mm)`}</p>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block 
                 text-[0.62rem] h-[2.5em] w-[12.0em] pl-1
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultValue>--Choose Width--</option>
                  <option value="220">220</option>
                </select>
              </div>
              <div>
                <h1 className="text-white text-nowrap text-[0.825rem]">Series</h1>
                <p className="text-white text-[0.625rem]">{`Hieght Ratio (%)`}</p>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block 
                 text-[0.62rem] h-[2.5em] w-[12.0em] pl-1
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultValue>--Choose Series--</option>
                  <option value="220">220</option>
                </select>
              </div>
              <div>
                <h1 className="text-white text-nowrap text-[0.825rem]">Wheel Diameter</h1>
                <p className="text-white text-[0.625rem]">{`Diameter(inch)`}</p>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-blue-500 block 
                 text-[0.62rem] h-[2.5em] w-[12.0em] pl-1
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option defaultValue>--Choose Wheel--</option>
                  <option value="220">220</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindTire;
