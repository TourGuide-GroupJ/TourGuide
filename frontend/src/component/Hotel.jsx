import React, { useState } from "react";
import { data } from "../data/data.js";

const Hotel = () => {
  const [hotels, setHotels] = useState(data);

  //Filter type
  const filterType = (category) => {
    setHotels(
      data.filter((hotel) => {
        return hotel.category === category;
      })
    );
  };

  //   Filter package
  const filterPackage = (price) => {
    setHotels(
      data.filter((hotel) => {
        return hotel.price === price;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className=" text-cyan-800 font-bold text-4xl text-center">
        Top Rated Hotels
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter Type</p>
          <div className="flex justfiy-between flex-wrap gap-4">
            <button
              onClick={() => setHotels(data)}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              All
            </button>
            <button
              onClick={() => filterType("Hotel")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              Hotel
            </button>
            <button
              onClick={() => filterType("Resort")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              Resort
            </button>
            <button
              onClick={() => filterType("Bungalow")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              Bungalow
            </button>
          </div>
        </div>

        {/* Filter Package */}
        <div>
          <p className="font-bold text-gray-700 text-xl">Filter Package</p>
          <div className="flex justify-between max-w-[390px] w-full gap-4">
            <button
              onClick={() => filterPackage("$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              $
            </button>
            <button
              onClick={() => filterPackage("$$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              $$
            </button>
            <button
              onClick={() => filterPackage("$$$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              $$$
            </button>
            <button
              onClick={() => filterPackage("$$$$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Hotels */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{hotel.name}</p>
              <p>
                <span>{hotel.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
