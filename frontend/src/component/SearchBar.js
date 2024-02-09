import React from "react";

export default function SearchBar(props) {
  return (
    <div>
      <form className="flex items-center">
        <label for="simple-search" class="sr-only"></label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="text"
            name={props.name}
            id=""
            placeholder={props.plcHolder}
            size={props.txt}
            maxLength={props.max}
            onChange={props.func1}
            className="px-5 py-1.5 border-blue-700 border rounded-2xl border-3 cursor-text"
          ></input>
        </div>
        <button
          type="submit"
          onClick={props.search}
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-2xl border border-blue-700 hover:bg-blue-800   dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
}
