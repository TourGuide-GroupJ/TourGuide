import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import dolukanda1 from "../assets/dolukanda2.jpg";
import dolukanda2 from "../assets/dolukanda3.jpg";

function Dolukanda() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 mt-[100px]">
        <div className="col-span-3 lg:col-span-1">
          <img className="object-cover w-full" src={dolukanda1} />
        </div>
        <div className="p-10 bg-gray-200 w-[1000px] H-[500px] lg:col-span-2">
          <span className="text-4xl font-semibold">
          Dolukanda - hiking & camping mountain
          </span>
          <div className="mt-10"></div>
          <p className="text-justify ">Dolukanda is situated approximately 15 kilometers north of Anuradhapura,
          one of Sri Lanka's ancient capitals and a UNESCO World Heritage site. The hiking trail up Dolukanda is 
          relatively short and straightforward, making it suitable for a half-day excursion. The trail passes 
          through the surrounding countryside and offers scenic views of the landscape.
          </p>
          <div className="mt-5"></div>
          <p className="text-justify ">
          The area around Dolukanda features diverse flora and fauna. As you hike, you may encounter different 
          plant species, birds, and possibly some wildlife. Besides enjoying the natural beauty, hiking Dolukanda
          provides a cultural experience as you explore the ancient stupa and the surrounding archaeological remnants. 
          </p>

          <div className="mt-5"></div>
          <img
            className="object-cover "
            src={dolukanda2}
            width="600"
            height="400"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dolukanda;
