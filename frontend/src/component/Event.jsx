import React from "react";

const Event = (props) => {
  return (
    <div className="bg-gray-200 w-[300px] h-[450px] border-2 border-gray-300 rounded-3xl relative">
      <h1 className="absolute text-center left-2.5 right-2.5 top-2.5 uppercase text-[30px] text-white font-semibold">
        {props.eventName}
      </h1>
      <img
        className=" rounded-t-3xl w-[300px] h-[200px] p-0"
        src={props.eventImg}
        width="300"
        height="200"
      />
      <p className="p-[15px] text-justify text-[16px]">
        {props.eventDescription}
      </p>
    </div>
  );
};

export default Event;
