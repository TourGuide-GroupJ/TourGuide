import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import kirigalpoththa1 from "../assets/kirigalpoththa2.jpg";
import kirigalpoththa2 from "../assets/kirigalpoththa3.jpg";

function Kirigalpoththa() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 lg:mt-20">
        <div className="lg:col-span-1 mt-5">
          <img className="object-cover w-full h-full" src={kirigalpoththa1} alt="kirigalpotha1" />
        </div>
        <div className="p-5 lg:p-10 bg-white lg:col-span-2">
          <span className="text-4xl font-semibold">
            Kirigalpoththa Mountain Peak – For an exciting trek
          </span>
          <div className="mt-10"></div>
          <p className="text-justify ">It is part of the Horton Plains National Park, 
            which is a protected area in the central highlands of Sri Lanka.
            Want to go hiking in Colombo- Explore the second highest mountain of
            Sri Lanka, Kirigalpoththa. It comes just after the highest peak
            Pidurutalagala. The peak is elevated 2,388 metres above sea level
            and the peak's 7 km trail is not only accessible to the public it
            also happens to be one of the cherished trek routes.
          </p>
          <div className="mt-5"></div>
          <p className="text-justify ">
            You can reach the starting point of this trek early on around 6.30
            AM. Reach at the Horton Plain National Park and begin your trek.
            It's just about 5 hours till you reach the end. You can halt a lot
            of times and relax while you trek.The trail to the summit is surrounded by
            beautiful landscapes, including grasslands, montane forests, and unique flora and fauna. 
          </p>

          <div className="mt-5 "></div>
          <img
            className="object-cover w-full lg:w-auto  "
            src={kirigalpoththa2}
            width="600"
            height="400"
            alt="kirigalpoththa2"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kirigalpoththa;
