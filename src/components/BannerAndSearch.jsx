import React from "react";

const BannerAndSearch = () => {
  return (
    <>
      <section>
        <div
          className="
      flex 
      flex-nowrap 
      bg-gray
      h-auto 
      max-w-screen
      "
        >
          {/* Find Tire Section */}
          <div className="shrink-0 mr-2">
            <h1 className="text-gray-50 bg-orange-600 min-w-64">Find Tyre</h1>
            <div
              className="
              relative 
              bg-tyrefilterImg 
              w-full h-full 
              bg-no-repeat"
            >
              <div className="absolute right-[1.8rem]">
                <div className="">
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
                      <option defaultValue>--Choose Width--</option>
                      <option value="220">220</option>
                    </select>
                  </div>
                  <div>
                    <h1 className="text-white">Wheel Diameter</h1>
                    <p className="text-white text-xs">{`Size(mm)`}</p>
                    <select className="bg-gray-50 border border-gray-300 text-gray-900 text-[0.625rem] rounded-sm focus:ring-blue-500 focus:border-blue-500 block h-8 w-full p-2.5 text-xsdark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option defaultValue>--Choose Width--</option>
                      <option value="220">220</option>
                    </select>
                  </div>

                  
                </div>
              </div>
            </div>
          </div>

          <div className="grow">
            <figure
              className={`
            transition-all 
            duration-300 
            cursor-pointer 
            filter grayscale hover:grayscale-0`}
            >
              <a href="#">
                <img
                  className=""
                  src="/images/SOne_index_banner.jpg"
                  alt="image description"
                />
              </a>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAndSearch;
