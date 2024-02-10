import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import image from "../assets/Adventure.jpg";
import Division from "../component/AttractCom";
import plane1 from "../assets/Aeroplane3.jpg";
import whale from "../assets/whale1.jpg";
import kithulgala from "../assets/kithulgala1.jpg";
import kirigalpoththa from "../assets/kirigalpoththa1.jpg";
import dolukanda from "../assets/dolukanda1.jpg";
import yala from "../assets/yala1.jpg";

const Adventure = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full mx-auto">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center ">
            <span className="px-4 text-5xl font-semibold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
              ADVENTURE
            </span>
          </div>
          <img src={image} className="w-full max-h-[500px] object-cover" />
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" mt-10 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-20">
          <Link to="/aeroplane">
            <div>
              <Division
                name="Aeroplane Experience"
                img={plane1}
                description="Cinnamon Air Scenic Flights in Sri Lanka provide an unforgettable opportunity to explore the beauty of Colombo from above, 
                offering a unique and thrilling adventure that promises to create lasting memories."
              />
            </div>
          </Link>

          <Link to="/kithulgala">
            <div>
              <Division
                name="Kithulgala Rafting"
                img={kithulgala}
                description="Experience the thrill of white water rafting in Sri Lanka, particularly in the town of Kitulgala, south of Kandy.This destination serves as the
                 gateway to the Kelaniya Ganga's rapids, offering  for both beginners and experienced rafters. "
              />
            </div>
          </Link>

          <Link to="/kirigalpoththa">
            <div>
              <Division
                name="Kirigalpoththa Mountain Peak"
                img={kirigalpoththa}
                description="Embark on a hiking adventure in Colombo by exploring Kirigalpoththa, Sri Lanka's second-highest mountain, located just after Pidurutalagala,
                the highest peak.Standing at an elevation of 2,388 meters above sea level."
              />
            </div>
          </Link>

          <Link to="/blueWhale">
            <div>
              <Division
                name="BlueWhale Watching"
                img={whale}
                description="Embark on an exhilarating Blue Whale watching tour in Colombo, Bentota, or Koggala, offering a unique chance to witness sea creatures' beauty.
                the journey takes you to Mirissa Harbor for a 2 to 4-hour boat excursion to spot majestic whales."
              />
            </div>
          </Link>

          <Link to="/dolukanda">
            <div>
              <Division
                name="Dolukanda hiking"
                img={dolukanda}
                description="Dolukanda is a small mountain located in the North Central Province of Sri Lanka, near the town of Anuradhapura.The area is known for its historical significance and offers a 
                relatively easy hiking experience."
              />
            </div>
          </Link>

          <Link to="/yala">
            <div>
              <Division
                name="Yala safari"
                img={yala}
                description="Yala National Park is located in the southeastern part of Sri Lanka, covering approximately 978 square kilometers. It is situated in the Hambantota district 
                and is the second-largest national park in the country."
              />
            </div>
          </Link>

          <div className="mt-10"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adventure;
