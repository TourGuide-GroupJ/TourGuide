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
      <h1 className="text-4xl font-semibold text-center text-cyan-800">
        Recommended Hotels
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col justify-between lg:flex-row">
        {/* Fliter Type */}
        <div>
          <p className="text-xl font-bold text-gray-700">Filter Type</p>
          <div className="flex flex-wrap gap-4 justfiy-between">
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
          <p className="text-xl font-bold text-gray-700">Filter Package</p>
          <div className="flex justify-between max-w-[390px] w-full gap-4">
            <button
              onClick={() => filterPackage("50$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              50$
            </button>
            <button
              onClick={() => filterPackage("100$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              100$
            </button>
            <button
              onClick={() => filterPackage("200$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              200$
            </button>
            <button
              onClick={() => filterPackage("500$")}
              className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
            >
              500$
            </button>
          </div>
        </div>
      </div>

      {/* Display Hotels */}
      <div className="grid gap-6 pt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {hotels.map((hotel, index) => (
          <div
            key={index}
            className="duration-300 border rounded-lg shadow-lg hover:scale-105"
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
