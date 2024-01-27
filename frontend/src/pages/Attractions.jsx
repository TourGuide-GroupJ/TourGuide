import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Navbar />
      <div>
        <h1 className=" uppercase text-4xl mt-[100px] font-semibold text-center ">
          Atrractions
        </h1>
      </div>
      <div>
        <div className="mt-5 ml-8 max-w-[1000px] mx-auto">
          <h2 className=" font-semibold text-2xl">Recommended</h2>
        </div>

        <div className="flex justify-center">
          <div className=" mt-5 max-w-[1200px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-20">
            <div>
              <Division
                name="Unawatuna"
                img={Unawatuna}
                description="Discover the enchanting allure of Unawatuna, where golden sands meet turquoise waters. Immerse yourself in a tropical paradise, renowned for its pristine beaches, vibrant coral reefs, and rich cultural charm."
              />
            </div>
            <div>
              <Division
                name="Galle"
                img={Galle}
                description="Discover Galle, Sri Lanka's coastal gem, where historic charm meets stunning landscapes. Wander through its UNESCO-listed fort, adorned with colonial architecture, and soak in the vibrant local culture by the sea."
              />
            </div>
            <div>
              <Division
                name="Rawana Falls"
                img={RawanaElla}
                description="Discover nature's masterpiece at Rawana Falls, Sri Lanka. Cascading gracefully amidst lush greenery, this enchanting waterfall captivates with its breathtaking beauty, offering a serene escape for all adventurers."
              />
            </div>
            <div>
              <Division
                name="Nine Arch Bridge"
                img={NineArchBridge}
                description="Marvel at the engineering feat of Nine Arch Bridge in Ella, Sri Lanka. Nestled amidst lush greenery, this iconic structure harmoniously blends nature and architecture, offering a captivating experience for all."
              />
            </div>
            <div>
              <Division
                name="Mirissa"
                img={Mirissa}
                description="Discover paradise in Mirissa, Sri Lanka – a coastal gem where golden sands meet turquoise waters. Embrace serene beaches, vibrant nightlife, and the allure of whale watching. Unforgettable moments await!"
              />
            </div>
            <div>
              <Division
                name="Ambuluwawa"
                img={Ambuluwawa}
                description="Discover Ambuluwawa Tower, a breathtaking architectural marvel nestled in the lush hills of Sri Lanka. Soaring above nature, this iconic tower offers panoramic views, cultural richness, and serene tranquility."
              />
            </div>
            <div>
              <Division
                name="Baker's Falls"
                img={BakersFalls}
                description="Baker's Falls, a nature lover's paradise nestled in lush greenery. Cascading water, tranquil ambiance, and breathtaking scenery make it a must-visit destination. Immerse yourself in the beauty of nature."
              />
            </div>
            <div>
              <Division
                name="Nuwara Eliya"
                img={NuwaraEliya}
                description="Nestled in the heart of Sri Lanka, Nuwara Eliya beckons with its lush tea plantations, cool climate, and colonial charm. Immerse yourself in breathtaking landscapes and timeless elegance."
              />
            </div>
          </div>
        </div>

        <div className="mt-[50px] ml-8 max-w-[1000px] mx-auto">
          <h2 className=" font-semibold text-2xl ml-0">Others</h2>
        </div>
        <div className=" flex flex-col justify-center mb-[50px] w-[1200px] m-auto gap-x-20 mt-[40px]">
          <Slider {...settings}>
            <div>
              <Division
                name="Hikkaduwa"
                img={Hikkaduwa}
                description="Discover the vibrant coastal charm of Hikkaduwa, Sri Lanka. Immerse yourself in its pristine beaches, renowned coral reefs, and lively atmosphere. A tropical paradise awaits your exploration."
              />
            </div>
            <div>
              <Division
                name="Baker's Falls"
                img={BakersFalls}
                description="Baker's Falls, a nature lover's paradise nestled in lush greenery. Cascading water, tranquil ambiance, and breathtaking scenery make it a must-visit destination. Immerse yourself in the beauty of nature."
              />
            </div>
            <div>
              <Division
                name="Nuwara Eliya"
                img={NuwaraEliya}
                description="Nestled in the heart of Sri Lanka, Nuwara Eliya beckons with its lush tea plantations, cool climate, and colonial charm. Immerse yourself in breathtaking landscapes and timeless elegance."
              />
            </div>
            <div>
              <Division
                name="Nine Arch Bridge"
                img={NineArchBridge}
                description="Marvel at the engineering feat of Nine Arch Bridge in Ella, Sri Lanka. Nestled amidst lush greenery, this iconic structure harmoniously blends nature and architecture, offering a captivating experience for all."
              />
            </div>
            <div>
              <Division
                name="Mirissa"
                img={Mirissa}
                description="Discover paradise in Mirissa, Sri Lanka – a coastal gem where golden sands meet turquoise waters. Embrace serene beaches, vibrant nightlife, and the allure of whale watching. Unforgettable moments await!"
              />
            </div>
            <div>
              <Division
                name="Ambuluwawa"
                img={Ambuluwawa}
                description="Discover Ambuluwawa Tower, a breathtaking architectural marvel nestled in the lush hills of Sri Lanka. Soaring above nature, this iconic tower offers panoramic views, cultural richness, and serene tranquility."
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="mt-15">
        <Footer />
      </div>
    </div>
  );
};

export default Attractions;
