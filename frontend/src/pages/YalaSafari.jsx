import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import yala1 from "../assets/yala2.jpg";
import yala2 from "../assets/yala_n.jpg";

function YalaSafari() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 mt-[100px]">
        <div className="col-span-3 lg:col-span-1">
          <img className="object-cover w-full" src={yala1} />
        </div>
        <div className="p-10 bg-gray-200 w-[1000px] H-[500px] lg:col-span-2">
          <span className="text-3xl font-semibold">Yala Safari</span>
          <div className="mt-10"></div>
          <p className="text-justify ">
            Yala combines a strict nature reserve with a national park. Divided
            into 5 blocks, the park has a protected area of nearly 130,000
            hectares of land consisting of light forests, scrubs, grasslands,
            tanks and lagoons. Two blocks are currently opened to the
            public.Situated in Sri Lanka’s south-east hugging the panoramic
            Indian Ocean, Yala was designated a wildlife sanctuary in 1900 and
            was designated a national park in 1938
          </p>
          <div className="mt-5"></div>
          <p className="text-justify ">
            Yala is home to 44 varieties of mammal and 215 bird species. Among
            its more famous residents are the world’s biggest concentration of
            leopards.Yala is in a hot, semi-arid environment despite its lush
            greenish look, especially during the monsoon season. Temperature
            ranges from 260C to about 300C. The North-east monsoon season is
            when Yala gets most of its rainfall from September to December.
          </p>
          <div className="mt-5"></div>
          <img
            className="object-cover "
            src={yala2}
            width="600"
            height="400"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default YalaSafari;
