import React from "react";
import Navbar from "../component/Navbar";
import Division from "../component/AttractCom";
import Footer from "../component/Footer";

//images
import Hikkaduwa from "../assets/Hikkaduwa.jpg";
import Mirissa from "../assets/Mirissa.jpg";
import Galle from "../assets/Galle.jpg";
import NineArchBridge from "../assets/NineArchBridge.jpg";
import Ambuluwawa from "../assets/Ambuluwawa.jpg";
import RawanaElla from "../assets/RawanaElla.jpg";
import BakersFalls from "../assets/Baker's Falls.jpg";
import Unawatuna from "../assets/Unawatuna.jpg";
import NuwaraEliya from "../assets/Nuwara Eliya.jpg";

const Attractions = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className=" uppercase text-4xl mt-[100px] font-semibold text-center ">
          Atrractions
        </h1>
      </div>
      <div className="mt-5 ml-[150px] max-w-[1000px] mx-auto">
        <h2 className=" font-semibold text-2xl">Recommended</h2>
      </div>

      <div className="flex justify-center">
        <div className=" mt-5 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-20">
          <div>
            <Division attractionName="Unawatuna" attractionImg={Unawatuna} />
          </div>
          <div>
            <Division attractionName="Galle" attractionImg={Galle} />
          </div>
          <div>
            <Division
              attractionName="Rawana Falls"
              attractionImg={RawanaElla}
            />
          </div>
          <div>
            <Division
              attractionName="Nine Arch Bridge"
              attractionImg={NineArchBridge}
            />
          </div>
          <div>
            <Division attractionName="Mirissa" attractionImg={Mirissa} />
          </div>
          <div>
            <Division attractionName="Ambuluwawa" attractionImg={Ambuluwawa} />
          </div>
          <div>
            <Division
              attractionName="Baker's Falls"
              attractionImg={BakersFalls}
            />
          </div>
          <div>
            <Division
              attractionName="Nuwara Eliya"
              attractionImg={NuwaraEliya}
            />
          </div>
          <div>
            <Division attractionName="Hikkaduwa" attractionImg={Hikkaduwa} />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Attractions;
