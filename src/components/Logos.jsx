"use client";

import NextImage from "next/image";
import Form from "next/form";

export default function Logos() {
  return (
    <section className="
    flex 
    align-middle justify-between items-center 
    p-4 bg-white">
      {/* Left side*/}
      <div className="mx-4">
        <img src="/images/SOne_index_logo.png" ></img>
      </div>

      {/* Right side*/}
      <div className="hidden md:flex flex-col py-4">
        <div className="flex justify-end flex-row my-2">
          <div
            className="mx-1 
          bg-[url('/images/SOne_index_iconthai2.jpg')] hover:bg-[url('/images/SOne_index_iconthai.jpg')] 
          bg-cover 
          w-6 h-4"
          ></div>

          <div
            className="mx-1
          bg-[url('/images/SOne_index_iconeng2.jpg')] 
          hover:bg-[url('/images/SOne_index_iconeng.jpg')] bg-cover 
          w-6 h-4"
          ></div>
        </div>

        <div className="hidden md:flex flex-row justify-end my-2">
          <Form action="/search">
            {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
            <input name="query" placeholder="Search..." />
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </Form>
        </div>

        <div className="hidden md:flex flex-row space-x-2">
          <div >About S-ONE |</div>
          <div >Job Opportunity |</div>
          <div >Contact Us |</div>
          <div >Site Map</div>
        </div>
      </div>
    </section>
  );
}
