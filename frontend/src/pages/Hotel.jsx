import React, { useState, useEffect } from "react";
import HotelCom from "../component/HotelCom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";

//images
import HotelImg from "../assets/Hotel.jpg";
import Hotel from "../assets/Hotel.jpg";

const HotelComponent = ({ hotelData }) => {
  return (
    <div>
      <HotelCom
        image={Hotel}
        hotelName={hotelData.hotelName}
        id={hotelData.hotelLicenseNumber}
        email={hotelData.email}
        contact={hotelData.contactNumber}
        type={hotelData.hotelType}
      />
    </div>
  );
};

export default function Hotels() {
  const [hotelList, sethotelList] = useState([]);

  // useEffect(() => {
  //   const loadData = async () => {
  //     console.log("Fetching hotel data...");
  //     try {
  //       const res = await axios.get("http://localhost:4000/hotel");
  //       console.log("Hotel data fetched successfully:", res.data);
  //       sethotelList(res.data);
  //       setHotels(res.data); // Set hotels state to the fetched data
  //     } catch (error) {
  //       console.error("Error fetching hotel data:", error);
  //       // Check if the error is a 404 error
  //       if (error.response && error.response.status === 404) {
  //         // Handle 404 error
  //         alert("Hotel data not found. Please check your network connection.");
  //       } else {
  //         // Handle other types of errors
  //         alert(
  //           "An error occurred while fetching hotel data. Please try again later."
  //         );
  //       }
  //     }
  //   };

  //   loadData();
  // }, []);

  useEffect(() => {
    const loadData = async () => {
      console.log("ok");
      try {
        const res = await axios.get("http://localhost:4000/hotel");
        console.log(res.data);
        sethotelList(res.data);
        setHotels(res.data); // Set hotels state to the fetched data
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    };
    loadData();
  }, []);

  const [hotels, setHotels] = useState(hotelList);

  //Filter type
  const filterType = (hotelType) => {
    setHotels(
      hotelList.filter((hotelData) => {
        return hotelData.hotelType === hotelType;
      })
    );
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>

      {/* imgage and text */}
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

      {/* display hotels */}
      <div className="mt-5">
        <div className="p-5">
          {/* <div className="text-center">
            <span className="text-5xl font-semibold text-center">Hotels</span>
          </div> */}

          {/* Filter Row */}
          <div className="flex flex-col justify-between lg:flex-row">
            {/* Fliter Type */}
            <div>
              <p className="text-xl font-bold text-gray-700">Filter Type</p>
              <div className="flex flex-wrap gap-4 justfiy-between">
                <button
                  onClick={() => setHotels(hotelList)}
                  className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
                >
                  All
                </button>
                <button
                  onClick={() => filterType("Hotel")}
                  className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
                >
                  Hotel
                </button>
                <button
                  onClick={() => filterType("Resort")}
                  className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
                >
                  Resort
                </button>
                <button
                  onClick={() => filterType("Bungalow")}
                  className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
                >
                  Bungalow
                </button>
                <button
                  onClick={() => filterType("Inns")}
                  className="rounded-[5px] p-1 text-cyan-800 hover:bg-cyan-800 hover:text-white font-semibold"
                >
                  Inns
                </button>
              </div>
            </div>
          </div>

          <div className="p-5 mt-5">
            <div className="grid gap-6 pt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="lg:order-first md:order-last sm:order-last col-span-full">
                <div className="grid grid-cols-4 gap-4">
                  {hotels.map((hotelData, index) => (
                    <HotelComponent key={index} hotelData={hotelData} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
