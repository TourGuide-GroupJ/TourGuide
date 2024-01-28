import React from "react";
import HotelImg from "../assets/Hotel.jpg";
import Hotel from "../component/Hotel";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Accomadation = () => {
  return (
    <div className="w-full mx-auto ">
      <Navbar />
      <div className=" max-h-[500px] relative">
        <div className=" absolute w-full h-full text-white max-h-[500px] bg-black/50 flex flex-col justify-center">
          <h1 className="px-4 text-4xl font-semibold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            Find your
          </h1>
          <h1 className="px-4 text-4xl font-semibold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            Accommodations
          </h1>
        </div>

        <img src={HotelImg} className=" w-full max-h-[500px] object-cover" />
      </div>

      <Hotel />

      <Footer />
    </div>
  );
};

export default Accomadation;
