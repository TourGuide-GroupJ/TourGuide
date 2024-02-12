import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Division from "../component/AttractCom";

//images
import FestivalImg from "../assets/FestivalImg.jpg";
import Vesak from "../assets/Vesak.jpg";
import Poson from "../assets/Poson.jpg";
import SinhalaAndTamilNewYear from "../assets/SinhalaAndTamilNewYear.jpg";
import ThaiPongal from "../assets/Thai Pongal.jpg";
import Deepavali from "../assets/Deepavali.jpeg";
import NallurFestival from "../assets/Nallur Festival.jpg";

const Festival = () => {
  return (
    <div>
      <Navbar />

      <div className="w-full mx-auto">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center ">
            <span className="px-4 text-5xl font-semibold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
              Festivals
            </span>
          </div>
          <img
            src={FestivalImg}
            className="w-full max-h-[500px] object-cover"
          />
        </div>
      </div>

      <div>
        <h1 className=" uppercase text-4xl mt-[40px] font-semibold text-center "></h1>
      </div>
      <div>
        <div className="mt-5 ml-[150px] max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-semibold ">Up Coming</h2>
        </div>

        <div className="flex justify-center">
          <div className=" mt-5 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-20">
            <div>
              <Division
                name="Vesak"
                img={Vesak}
                description="Celebrate enlightenment and joy at the mesmerizing Vesak Festival, an exuberant Buddhist celebration honoring the birth, enlightenment, and passing of Buddha. Join us for a luminous cultural experience!"
              />
            </div>
            <div>
              <Division
                name="Sinhala and Tamil New Year"
                img={SinhalaAndTamilNewYear}
                description="Experience the vibrant cultural celebration of Sinhala and Tamil New Year in Sri Lanka. Immerse yourself in traditional rituals, festive foods, and joyous gatherings, marking a unique cultural spectacle."
              />
            </div>
            <div>
              <Division
                name="Poson"
                img={Poson}
                description="Discover the sacred allure of Poson, Sri Lanka's spiritual haven. Immerse in the cultural tapestry of this ancient city, adorned with historic temples and vibrant festivities, embracing serenity and tradition."
              />
            </div>
            <div>
              <Division
                name="Nallur Festival"
                img={NallurFestival}
                description="Experience the vibrant Nallur Festival, an annual celebration in Jaffna, Sri Lanka. Immerse yourself in colorful processions, traditional music, and the spiritual energy of this cultural extravaganza."
              />
            </div>
            <div>
              <Division
                name="Deepavali"
                img={Deepavali}
                description="Experience the vibrant festival of Deepavali, illuminating the city with a kaleidoscope of lights, intricate rangoli designs, and joyous celebrations. Immerse in the cultural richness of this dazzling festival!"
              />
            </div>
            <div>
              <Division
                name="Thai Pongal"
                img={ThaiPongal}
                description="Experience the vibrant celebration of Thai Pongal, a harvest festival in Tamil culture. Join in the joyous festivities, traditional rituals, and delectable feasts that mark this auspicious occasion."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Festival;
