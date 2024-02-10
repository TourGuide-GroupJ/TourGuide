import React, { useState, useEffect } from "react";
import HotelCom from "../component/HotelCom";
//import Guidcom from "../component/Guidcom";
import GuideSearch from "../component/GuideSearch1";

import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import axios from "axios";

//image
import Hotel from "../assets/Hotel.jpg";

/*<div className="grid gap-12 mx-auto lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">*/

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

  const loadData = async () => {
    console.log("ok");
    try {
      const res = await axios.get("http://localhost:4000/hotel");
      console.log(res.data);
      sethotelList(res.data);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [hotelsPerPage] = useState(5);

  const indexOfLastGuide = currentPage * hotelsPerPage;
  const indexOfFirstGuide = indexOfLastGuide - hotelsPerPage;
  const currentHotels = hotelList.slice(indexOfFirstGuide, indexOfLastGuide);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="mt-20">
        <div className="p-5 mx-auto">
          <div className="text-center">
            <span className="text-5xl font-semibold text-center">Hotels</span>
          </div>
          <div className="p-5 mt-5">
            <div className="grid gap-6 pt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className=" flex flex-col gap-[40px] lg:order-first md:order-last sm:order-last">
                {currentHotels.map((hotelData, index) => (
                  <HotelComponent key={index} hotelData={hotelData} />
                ))}
                <div className="flex justify-center">
                  {hotelList.length > hotelsPerPage && (
                    <ul className="flex flex-col gap-3">
                      {Array.from({
                        length: Math.ceil(hotelList.length / hotelsPerPage),
                      }).map((_, index) => (
                        <li key={index}>
                          <button onClick={() => paginate(index + 1)}>
                            {index + 1}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex justify-center basis-1/3 lg:order-last md:order-first sm:order-first">
                <GuideSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
