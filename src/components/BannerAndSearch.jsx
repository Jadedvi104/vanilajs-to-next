import React from "react";
import FindTire from "@/components/micros/FindTire"

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
          <FindTire/>
          <div className="grow bg-bannerImage  
          w-max min-h-[18rem]">
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAndSearch;
