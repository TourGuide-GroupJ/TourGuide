import React from "react";
import Rating from "../component/Rating";

export default function Guidcom(prop) {
  return (
    <div className="flex gap-[5px] mx-auto lg:flex-row md:flex-col sm:flex-row left-2 right-2">
      <div className="flex justify-around p-2 rounded-full basis-2/5">
        <img src={prop.image} alt={prop.name} className="object-cover rounded-full lg:h-[290px] lg:w-auto md:h-[240px] md:w-auto sm:h-[200px] sm:w-auto" />
      </div>
      <div className="flex flex-col basis-3/5 rounded-2xl">
          <div className="flex justify-center p-2 text-2xl text-center text-white border-2 bg-slate-700 rounded-2xl">
            {prop.guideName}
          </div>
          <div className="border-2 border-b-slate-500 rounded-2xl">
            <div className="flex flex-col p-2 text-justify text-md bg-stone-400 rounded-2xl">
              <table>
              <thead></thead>
              <tbody>
              <tr><td>ID</td><td> - </td><td>{prop.id}</td></tr>
              <tr><td>Expired date of License</td><td> - </td><td>{prop.expDate}</td></tr>
              <tr><td>E-mail </td><td> - </td><td>{prop.email}</td></tr>
              <tr><td>Contact </td><td> - </td><td>{prop.contact}</td></tr>
              <tr><td>Type </td><td> - </td><td>{prop.type}</td></tr>
              <tr><td>Languages </td><td> - </td><td>{prop.language}</td></tr>
              <tr><Rating/></tr>
              </tbody>
              </table>
            </div>
          </div>
      </div>
    </div>
  );
}
