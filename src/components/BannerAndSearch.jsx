import React from "react";

const BannerAndSearch = () => {
  return (
    <>
    <section>
      <div className="
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
          <div className="
          bg-tyrefilterImg 
          w-full h-full 
          bg-no-repeat">
            <div>
       
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue>Choose a Tyre Width</option>
            <option value="220">220</option>
          </select>
        
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
