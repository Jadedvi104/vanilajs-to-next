import React from "react";
import SearchBranch from "@/components/micros/SearchBranch";
import NewsAndEvents from "@/components/micros/NewsAndEvents";
import Subscribe from "@/components/micros/Subscribe";

const BottomSection = () => {
  return (
    <>
      <section>
        <div className="flex justify-center bg-white h-auto w-5/5">
          {/* Left*/}
          <SearchBranch />
          {/* Mid*/}
          <NewsAndEvents />
          {/* Right*/}
          <Subscribe/>
        </div>
      </section>
    </>
  );
};

export default BottomSection;
