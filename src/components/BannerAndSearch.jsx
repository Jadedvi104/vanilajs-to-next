import React from "react";
import FindTire from "@/components/micros/FindTire";

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
      min-h-[18rem]
      "
        >
          {/* Find Tire Section */}
          <FindTire />
            <div
              className="bg-bannerImage  
          w-max"
            ></div>
        </div>
      </section>
    </>
  );
};

export default BannerAndSearch;
