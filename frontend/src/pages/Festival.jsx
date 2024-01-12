import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Division from "../component/AttractCom";

//images
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
      <div>
        <h1 className=" uppercase text-4xl mt-[100px] font-semibold text-center ">
          Festivals
        </h1>
      </div>
      <div>
        <div className="mt-5 ml-[150px] max-w-[1000px] mx-auto">
          <h2 className=" font-semibold text-2xl">Up Coming</h2>
        </div>

        <div className="flex justify-center">
          <div className=" mt-5 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-20">
            <div>
              <Division name="Vesak" img={Vesak} />
            </div>
            <div>
              <Division
                name="Sinhala and Tamil New Year"
                img={SinhalaAndTamilNewYear}
              />
            </div>
            <div>
              <Division name="Poson" img={Poson} />
            </div>
            <div>
              <Division name="Nallur Festival" img={NallurFestival} />
            </div>
            <div>
              <Division name="Deepavali" img={Deepavali} />
            </div>
            <div>
              <Division name="Thai Pongal" img={ThaiPongal} />
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
