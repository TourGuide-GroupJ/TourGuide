import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import whale1 from "../assets/whale2.jpg";
import whale2 from "../assets/whale3.jpg";

function BlueWhale() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 lg:mt-20">
        <div className="lg:col-span-1 mt-5">
          <img className="object-cover w-full" src={whale1} alt="whale1"/>
        </div>
        <div className="p-5 lg:p-10 bg-white lg:col-span-2">
          <span className="text-4xl font-semibold">
            Bentota and Koggala – For blue whale watching
          </span>
          <div className="mt-10"></div>
          <p className="text-justify ">
            Immerse yourself in the exhilarating delights of an exceptionally
            intense activity – the awe-inspiring Blue Whale watching tour. Found
            among the most adventurous destinations in Colombo, Bentota, and
            Koggala, these locations provide a unique opportunity to witness the
            captivating beauty of sea creatures. Should you have an inclination
            towards scuba diving in Colombo, Bentota stands ready to exceed your
            expectations.
          </p>
          <div className="mt-5"></div>
          <p className="text-justify ">
            Your journey commences promptly at 6 AM, with a pickup service from
            your hotel. Once aboard, you will be swiftly transported to the
            Mirissa Harbor, arriving by 6:30 AM. Embarking upon the awaiting
            boats, you will be transported to carefully chosen locations where
            glimpses of majestic whales may be encountered The duration of this
            enthralling activity typically spans between 2 to 4 hours,
            contingent upon the visibility of the whales.Following this
            remarkable encounter, you may choose to extend your expedition to
            the turtle hatchery point.
          </p>

          <div className="mt-10"></div>
          <img
            className="object-cover w-full lg:w-auto "
            src={whale2}
            width="600"
            height="400"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlueWhale;
