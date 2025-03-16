import React from "react";
import { catagories } from "@/data/NavbarSelection";

const Categories = () => {
  return (
    <>
      <section>
        {/* Top Bot Mid*/}
        <div
          className="flex flex-wrap 
        justify-center 
        bg-white my-2.5 h-auto w-5/5"
        >
          {catagories.map((val, i) => (
            <button key={i} type="button" style={{'--image-url': `url(${val.url})`}} className={`text-white bg-[image:var(--image-url)] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-sm text-sm px-5 py-2 text-right inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 my-1 h-12 w-48`}>
            </button>
          ))}
        </div>

        {/* Very Bottom Mid*/}
        <div className="flex justify-between bg-orange-600 h-auto w-5/5">
          {/* Left*/}
          <div className="">
            <h1 className="text-gray-50">Find Service Center</h1>
            <figure
              className={`relative w-5/5 transition-all 
            duration-300 
            cursor-pointer 
            filter grayscale hover:grayscale-0`}
            >
              <a href="#">
                <img
                  className=""
                  src="/images/SOne_index_bg_searchtype.jpg"
                  alt="image description"
                />
              </a>
            </figure>
          </div>

          {/* Mid*/}
          <div className="">
            <h1 className="text-gray-50">News & Events</h1>
            <figure
              className={`relative w-5/5 transition-all 
            duration-300 
            cursor-pointer 
            filter grayscale hover:grayscale-0`}
            >
              <a href="#">
                <img
                  className=""
                  src="/images/SOne_index_bg_searchtype.jpg"
                  alt="image description"
                />
              </a>
            </figure>
          </div>

          {/* Right*/}
          <div className="">
            <h1 className="text-gray-50">Subscription</h1>
            <figure
              className={`relative w-5/5 transition-all 
            duration-300 
            cursor-pointer 
            filter grayscale hover:grayscale-0`}
            >
              <a href="#">
                <img
                  className=""
                  src="/images/SOne_index_bg_searchtype.jpg"
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

export default Categories;
