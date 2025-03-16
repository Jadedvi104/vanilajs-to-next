import React from "react";
import FindTire from "@/components/micros/FindTire";
import MainBanner from "@/components/micros/MainBanner";

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
          <MainBanner/>
        </div>
      </section>
    </>
  );
};

export default BannerAndSearch;
