import React from "react";

const FindTire = () => {
  return (
    <>
      <div>
        <form className="max-w-sm mx-auto">
          <label
            for="tyrewidth"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            TyreWidth
          </label>
          <select
            id="tyrewidth"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>--Choose a Tyre Width--</option>
            <option value="220">220</option>
          </select>
        </form>
        
      </div>
    </>
  );
};

export default FindTire;
