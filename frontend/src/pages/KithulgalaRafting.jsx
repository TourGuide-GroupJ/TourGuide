import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import kithulgala1 from "../assets/kithulgala2.jpg";
import kithulgala2 from "../assets/kithulgala3.jpg";

function KithulgalaRafting() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-[100px]">
        <div className="col-span-1 lg:col-span-1">
          <img className="object-cover w-full" src={kithulgala1} alt="Kithulgala 1" />
        </div>
        <div className="p-5 lg:p-10 bg-white lg:w-[1000px] lg:h-[500px] col-span-1 lg:col-span-2">
          <span className="text-4xl font-semibold">Kithulgala-Rafting</span>
          <div className="mt-5"></div>
          <p className="text-justify">
            Kithulgala is a popular destination for white-water rafting in Sri
            Lanka. The town is located in the Sabaragamuwa Province, and it's
            known for its scenic beauty, lush greenery, and the Kelani River,
            which offers thrilling rafting experiences. The best time for
            white-water rafting in Kithulgala is during the rainy season when
            the water levels are higher, typically from May to December.
          </p>
          <div className="mt-5"></div>
          <p className="text-justify">
            Trained guides and instructors are available to provide safety
            briefings and guidance to ensure a safe and enjoyable
            experience. Rafting operators in Kithulgala adhere to safety
            standards, providing participants with safety gear such as life
            jackets and helmets. Various tour operators in Kithulgala offer
            rafting packages that may include transportation, equipment
            rental, guides, and sometimes other adventure activities like
            canyoning or jungle trekking.
          </p>
          <div className="mt-5 "></div>
          <img
            className="object-cover"
            src={kithulgala2}
            width="600"
            height="400"
            alt="Kithulgala 2"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default KithulgalaRafting;
