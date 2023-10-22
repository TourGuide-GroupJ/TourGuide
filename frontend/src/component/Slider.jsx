import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//images
import Img1 from "../assets/Img1.jpg";
import Img2 from "../assets/Img2.jpg";
import Img3 from "../assets/Img3.jpg";
import Img4 from "../assets/Img4.jpg";
import Img5 from "../assets/Img5.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        infiniteLoop={false}
        interval={2000}
        autoPlay={true}
      >
        <div>
          <img src={Img1} />
        </div>
        <div>
          <img src={Img2} />
        </div>
        <div>
          <img src={Img3} />
        </div>
        <div>
          <img src={Img4} />
        </div>
        <div>
          <img src={Img5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
