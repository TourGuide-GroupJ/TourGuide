import React from "react";
import Rating from "./Rating";

const HotelCom = (props) => {
  return (
    <div className="duration-300 border rounded-lg shadow-lg hover:scale-105">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex flex-row justify-between p-1">
        <div>
          <p className="font-bold text-black">{props.hotelName}</p>
        </div>
        <div>
          <Rating />
        </div>
      </div>
    </div>
  );
};

export default HotelCom;
