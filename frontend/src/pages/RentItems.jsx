import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Division from "../component/AttractCom";

import camping1 from "../assets/camping1.jpeg"
import rentCar from "../assets/rentCar.png"
import campingTent from "../assets/campingTent.jpeg"
import rentBicycles from "../assets/rentBicycles.jpeg"
import rentTukTuk from "../assets/rentTukTuk.jpeg"
import campingBag from "../assets/campingBag.jpg"
import campingCookingItem from "../assets/campingCookingItem.jpg"


const RentItems = () => {
  return (
    <div className="w-full mx-auto ">
    <Navbar />
    <div className=" max-h-[500px] relative">
      <div className=" absolute w-full h-full text-white max-h-[500px] bg-black/50 flex flex-col justify-center">
      <h1 className="px-4 text-4xl font-semibold tracking-wide text-center sm:text-5xl md:text-6xl lg:text-7xl">
      Rent Vehicles and Equipments
    </h1>
      </div>

      <img src={camping1} className=" w-full max-h-[500px] object-cover" />
    </div>
    
    <div>
        <div className="mt-5 ml-[150px] max-w-[1000px] mx-auto">
          <h2 className="text-2xl font-semibold ">Rent Item</h2>
        </div>

        <div className="flex justify-center">
          <div className=" mt-5 max-w-[1200px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-20 gap-y-20">
            <div>
              <Division
                name="Car"
                img={rentCar}
                description="Explore new horizons with our reliable car rental service, tailored for your travel adventures. Enjoy comfort, freedom, and convenience on your journey with our diverse vehicle selection."
              />
            </div>
            <div>
              <Division
                name="Bicycles"
                img={rentBicycles}
                description="Embark on unforgettable journeys with our bicycle rental service. Experience the freedom of exploration, eco-friendly travel, and scenic routes, perfect for adventurous souls seeking unforgettable travel experiences."
              />
            </div>
            <div>
              <Division
                name="Tuk Tuk"
                img={rentTukTuk}
                description="Traverse bustling streets and scenic paths, soaking in the sights and sounds of your destination. Enjoy the convenience and charm of this iconic mode of transportation for an unforgettable travel experience."
              />
            </div>
            
                      
            <div>
              <Division
                name="Camping Tent"
                img={campingTent}
                description="Designed for comfort and convenience, they provide shelter and security wherever your travels take you. Experience the beauty of nature while enjoying a cozy retreat under the stars"
              />
            </div>
            <div>
              <Division
                name="Camping Bag"
                img={campingBag}
                description="Built for durability and functionality, they offer ample storage for all your essentials, ensuring you're prepared for any adventure. Travel light and efficiently with our reliable camping bags by your side."
              />
            </div>
            <div>
              <Division
                name="Camping Cooking item"
                img={campingCookingItem}
                description="From compact stoves to lightweight cookware, our gear ensures delicious meals anywhere. Enjoy the convenience and versatility of our cooking essentials, making your camping adventures tastier and more memorable."
              />
            </div> 
          </div>
        </div>
      </div>

    
    
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  )
}

export default RentItems

