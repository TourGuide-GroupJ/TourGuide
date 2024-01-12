import React from "react";

const Division1 = (props) => {
  return (
    <div className="  w-[250px] h-[400px] border-2 border-white rounded-3xl shadow-md shadow-gray-400 relative hover:shadow-black">
      <h1 className="absolute text-center left-2.5 right-2.5 top-2.5 uppercase text-[30px] text-white font-semibold">
        {props.name}
      </h1>
      <img
        className=" rounded-t-3xl w-[300px] h-[200px] p-0"
        src={props.img}
        width="300"
        height="200"
      />
      <p className=" text-justify p-1">{props.description}</p>
    </div>
  );
};

export default Division1;
