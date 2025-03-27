
export default function Footer() {
  return (
    <section>
      <div className="flex flex-row mt-2">
        <div className="hidden md:h-12 md:w-1/6">
          <img src="/images/SOne_index_logo.png" alt="" className="items-center h-12 mx-2"/>
        </div>
        <div
          className="
          flex
          items-start
          bg-black rounded-lg
          py-1
          my-1
          max-w-screen
          w-full
          md:w-5/6
        "
        >
          <h1 className="text-white ml-1">@Copyright 2025</h1>
        </div>
      </div>
    </section>
  );
}
