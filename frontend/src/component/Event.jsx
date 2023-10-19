import React from "react";

const Event = (props) => {
  return (
    <div className="bg-slate-300 w-[300px] h-[450px] border-2 border-gray-200 rounded-3xl relative">
      <h1 className="absolute text-center left-2.5 right-2.5 top-2.5 uppercase text-3xl text-white font-bold">
        {props.eventName}
      </h1>
      <img
        className="rounded-3xl w-[300px] h-[200px]"
        src={props.eventImg}
        width="300"
        height="200"
      />
      <p className="p-1.5 text-justify text-[16px]">{props.eventDescription}</p>
    </div>
  );
};

export default Event;
