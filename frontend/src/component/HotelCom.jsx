import React from "react";

const HotelCom = (props) => {
  return (
    <div className="duration-300 border rounded-lg shadow-lg hover:scale-105">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold text-black">{props.hotelName}</p>
        <p>
          <span>{props.price}</span>
        </p>
      </div>
    </div>
  );
};

export default HotelCom;
