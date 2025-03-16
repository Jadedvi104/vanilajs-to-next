import React from "react";
import { newsAndEvents } from "@/data/NavbarSelection";

const NewsAndsEvents = () => {
  return (
    <>
      <div className="flex flex-col bg-orange-600 w-2/4">
            <div className="flex bg-white">
              <h1 className="text-black  grow">News & Events</h1>
              <h1 className="text-blac flex-none">tabs</h1>
            </div>
            <div className="flex flex-row justify-between bg-white">
              {newsAndEvents.map((val, i) => (
                <div key={i} className="my-2 mx-2">
                  <img src="/images/SOne_index_news_23.jpg" alt=""></img>
                  <span className="text-xs">{val.desc}</span>
                </div>
              ))}
            </div>
          </div>
    </>
  );
};

export default NewsAndsEvents;
