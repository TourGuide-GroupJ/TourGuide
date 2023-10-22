import React from "react";

export default function Guidcom(prop) {
  return (
    <div className="flex gap-[5px] mx-auto lg:flex-row sm:flex-col left-2 right-2">
      <div className="flex justify-around basis-2/5 rounded-2xl ">
        <img src={prop.image} alt={prop.name} className="object-cover rounded-2xl h-[400px] w-auto" />
      </div>
      <div className="grid grid-rows-7 basis-3/5 rounded-2xl ">
        <div className="flex justify-center row-span-1 text-2xl text-center text-white bg-slate-700 rounded-2xl">
          {prop.guideName}
        </div>
        <div className="row-span-6 border-2 border-b-slate-500">
          <div className="flex flex-col p-2 text-justify text-md bg-stone-400 rounded-2xl">
            <div>{prop.id}</div>
            <div>{prop.address}</div>
            <div>{prop.email}</div>
            <div>{prop.contact}</div>
            <div>{prop.type}</div>
            <div>{prop.language}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
