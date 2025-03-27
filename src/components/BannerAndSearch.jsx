import React from "react";
import FindTire from "@/components/micros/FindTire";
import MainBanner from "@/components/micros/MainBanner";

const BannerAndSearch = () => {
  return (
    <>
      <section
        id="banner"
        className="
          h-auto 
          max-w-screen
          min-h-[18rem]
          "
      >
        <div
          id="banner-container"
          className="
          flex 
          flex-col lg:flex-row
          justify-center
          align-middle
          items-center
          "
        >
          <FindTire />
          <MainBanner />
        </div>
      </section>
    </>
  );
};

export default BannerAndSearch;
