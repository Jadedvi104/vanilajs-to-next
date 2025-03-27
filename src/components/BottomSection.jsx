import React from "react";
import SearchBranch from "@/components/micros/SearchBranch";
import NewsAndEvents from "@/components/micros/NewsAndEvents";
import Subscribe from "@/components/micros/Subscribe";

const BottomSection = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row justify-center bg-white h-auto w-full">
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
