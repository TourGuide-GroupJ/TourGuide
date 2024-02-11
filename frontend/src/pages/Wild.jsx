import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Division from "../component/AttractCom";

import campingTent from "../assets/campingTent.jpeg"

const Wild = () => {
  return (
    <div className="flex">
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-bold">Camping Tent & Gear Lk</h2>
      <p>This is the content of section 1.</p>
      <div>
      <img src={campingTent} className=" w-full max-h-[500px] " />
      </div>
      <div>
        <p></p>
      </div>

    </div>
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-bold">Section 2</h2>
      <p>This is the content of section 2.</p>
    </div>
    <div className="w-1/3 p-4">
      <h2 className="text-lg font-bold">Section 3</h2>
      <p>This is the content of section 3.</p>
    </div>
  </div>
  );
};

export default Wild




