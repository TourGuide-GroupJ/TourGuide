import React from "react";
/*border-2 border-b-slate-100 rounded-xl lg:w-[400px] lg:h-[533px] sm:w-[300px] */

export default function GuideSearch1() {
  return (
    <div className="lg:w-[400px] lg:h-[520px] md:w-[400px] sm:w-[300px] border-2 border-b-slate-100 rounded-xl">
        <div className="flex justify-center p-4 bg-slate-700 rounded-t-xl">
          <span className="text-xl font-semibold text-center text-white">Find Your Guide</span>
        </div>
        <form action="" className="flex flex-col gap-5 p-4 bg-stone-400 rounded-b-xl">
          <div className="grid grid-rows-4 gap-3">
          <div className="grid grid-rows-2">
            <span>Enter The Tour Guide Name</span>
            <input
              type="text"
              placeholder="Enter the name"
              className="px-4 py-2 form-input rounded-2xl cursor-text"
            />
          </div>
          <div className="grid grid-rows-2">
            <span>Enter The Tour Guide Id</span>
            <input
              type="text"
              placeholder="Enter the id"
              className="px-4 py-2 form-input rounded-2xl cursor-text"
            />
          </div>
          <div className="grid grid-rows-2">
            <span>Guide Type</span>
            <select
              size="1"
              className="px-8 py-2 cursor-pointer form-input rounded-2xl"
            >
              <option>All Types</option>
              <option>Area</option>
              <option>Chauffeur</option>
              <option>National</option>
              <option>Site</option>
            </select>
          </div>
          <div className="grid grid-rows-2">
            <span>Language</span>
            <select
              size="1"
              className="px-8 py-2 cursor-pointer form-input rounded-2xl"
            >
              <option>English</option>
              <option>Italic</option>
              <option>Chinees</option>
              <option>Russian</option>
            </select>
          </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-slate-700 rounded-full px-[12px] py-[4px] cursor-pointer hover:bg-[#475569] mt-[4px]"
            >
              <span className="font-semibold text-center text-white">Search</span>
            </button>
          </div>
        </form>
      
    </div>
  );
}
