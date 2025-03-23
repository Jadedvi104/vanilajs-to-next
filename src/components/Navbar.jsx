import { Tab, TabGroup, TabList } from "@headlessui/react";
import { navigation } from "@/data/NavbarSelection";

const roundedSquareArrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>`;

export default function Navbar() {
  return (
    <section>
      <div
        className="
     flex
     justify-between
     items-center
     bg-black rounded-sm
     py-4
     my-1
     max-w-screen
     "
      >
        <div className="">
          <TabGroup className="hidden md:block ">
            <TabList className={`flex space-x-4`}>
              {navigation.map((val, i) => (
                <Tab
                  key={val.name}
                  className="
                text-base font-medium text-gray-50 
                data-[selected]:text-amber-600"
                >
                  <div className="flex flex-row">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: roundedSquareArrowSVG,
                      }}
                    />
                    {val.name}
                  </div>
                </Tab>
              ))}
            </TabList>
          </TabGroup>
        </div>

        <div className="flex flex-row space-x-2 ">
          <div className=" text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55">
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fillRule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
