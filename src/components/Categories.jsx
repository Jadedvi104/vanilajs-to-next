import React from "react";

const Categories = () => {
  return (
    <>
      <section>
        {/* Top Bot Mid*/}
        <div className="flex flex-nowrap justify-between bg-orange-600 my-4 h-auto w-5/5">
          <div className="rounded-lg">Tyre</div>
          <div className="rounded-lg">Break</div>
          <div className="rounded-lg">Batteries</div>
          <div className="rounded-lg">Shock Up</div>
          <div className="rounded-lg">Engine Oil</div>
          <div className="rounded-lg">Warranty</div>
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
