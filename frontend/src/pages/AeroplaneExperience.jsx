import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import plane1 from "../assets/Aeroplane4.jpg";
import plane2 from "../assets/Aeroplane2.jpg";

function Aeroplane() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 lg:mt-20">
        <div className="lg:col-span-1 mt-5">
          <img className="object-cover w-full" src={plane1} alt="plane1" />
        </div>
        <div className="p-5 lg:p-10 bg-white lg:col-span-2">
          <span className="text-3xl font-semibold">
            To the skies – Experience the 360-degree view of Colombo in an
            aeroplane
          </span>
          <div className="mt-5"></div>
          <p className="text-justify">
            In Sri Lanka, adventure seekers can escape their daily routines and
            embrace a thrilling experience with Cinnamon Air Scenic Flights in
            Colombo. These flights offer a unique opportunity to witness the
            breathtaking beauty of the island from above, providing a
            mesmerizing bird's-eye view of the stunning landscapes
          </p>
          <div className="mt-5"></div>
          <p className="text-justify">
            Embark on a journey that promises enchanting tranquility and the
            ethereal allure of Sri Lanka's paradise island. Cinnamon Air Scenic
            Flights take passengers on an exploration of the remarkable terrains
            below, offering a captivating perspective of iconic cities and
            townships within the island. In just a brief span of 20 minutes,
            participants can immerse themselves in an unparalleled sense of
            surreal bliss as the scenic flights traverse the wondrous expanses
            of Colombo. Despite the concise timeframe, the experience is bound
            to create memories that will be etched forever in the consciousness
            of those who embark on this awe-inspiring adventure.
          </p>
          <div className="mt-10"></div>
          <img
            className="object-cover w-full lg:w-auto"
            src={plane2}
            alt="plane2"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Aeroplane;
