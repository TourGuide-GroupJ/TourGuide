import React from "react";

export default function GuideSearch1() {
  return (
    <div className="border-2 border-b-slate-100 rounded-3xl w-[400px] h-auto">
        <div className="p-2 bg-slate-700">
          <span className="text-xl text-white">Find Your Guide</span>
        </div>
        <form action="" className="grid grid-rows-5 gap-3 p-2 bg-stone-400">
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
              <option>Historical guide</option>
              <option>Hiking guides</option>
              <option>City guide</option>
              <option>Nature guide</option>
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
          <div className="mt-[5px] items-end">
            <button
              type="submit"
              className="bg-zinc-600 rounded-2xl flex px-[12px] py-[6px] cursor-pointer hover:max-lg"
            >
              <span>Search</span>
            </button>
          </div>
        </form>
      
    </div>
  );
}
