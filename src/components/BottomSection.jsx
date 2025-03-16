import React from "react";
import SearchBranch from "@/components/micros/SearchBranch";
import NewsAndEvents from "@/components/micros/NewsAndEvents";

const BottomSection = () => {
  return (
    <>
      <section>
        <div className="flex justify-center bg-white h-auto w-5/5">
          {/* Left*/}
            <SearchBranch />
          {/* Mid*/}
           <NewsAndEvents/>
          {/* Right*/}
          <div className="bg-gray-500 w-1/4">
            <h1 className="text-gray-50">Subscription</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomSection;
