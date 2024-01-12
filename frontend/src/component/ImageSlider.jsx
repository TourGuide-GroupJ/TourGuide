import React, { useState } from "react";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

//images
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import Img5 from "../assets/Img5.jpg";

const ImageSlider = () => {
  const slides = [
    {
      url: "https://images.pexels.com/photos/3011842/pexels-photo-3011842.jpeg",
    },
    {
      url: "https://images.pexels.com/photos/18548494/pexels-photo-18548494/free-photo-of-skyscrapers-in-london.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {},
    {},
    {},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className=" max-w-[900px] h-[600px] w-full m-auto py-16 relative">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Left arrow */}
      <div className="  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} size={30} />
      </div>

      {/* Right arrow */}
      <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} size={30} />
      </div>
    </div>
  );
};

export default ImageSlider;
