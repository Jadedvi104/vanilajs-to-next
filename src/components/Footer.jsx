import { Tab, TabGroup, TabList } from "@headlessui/react";
import { navigation } from "@/data/NavbarSelection";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-row mt-2">
        <div className="justify-center h-12 w-1/6">
          <img src="/images/SOne_index_logo.png" alt="" className="h-12"/>
        </div>
        <div
          className="
          flex
          items-start
          bg-black rounded-sm
          py-1
          my-1
          max-w-screen
          w-5/6
        "
        >
          <h1 className="text-white">@Copyright</h1>
        </div>
      </div>
    </section>
  );
}
