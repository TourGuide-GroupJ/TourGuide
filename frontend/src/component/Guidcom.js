import React from "react";

export default function Guidcom(prop) {
  return (
    <div className="flex gap-[5px] mx-auto lg:flex-row sm:flex-col left-2 right-2">
      <div className="basis-1/3 rounded-2xl"><img src={prop.image} alt={prop.name} className="" /></div>
      <div className="grid grid-rows-6 basis-2/3 rounded-2xl">
        <div className="row-span-1 text-xl text-center bg-slate-700 rounded-2xl">{prop.guideName}</div>
        <div><span className="row-span-5 text-justify text-md bg-stone-400 rounded-2xl">{prop.guideDescription}</span></div>
      </div>
    </div>
  );
}
