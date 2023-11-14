import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DetailCarousal = ({ images }) => {
  return (
    <Carousel
      className=""
      autoPlay={true}
      showIndicators={false}
      stopOnHover={true}
      swipeable={true}
      width={"80%"}
      infiniteLoop={true}
    >
      {images.map((image) => (
        <div key={image} className="">
          <img src={image} alt="" className="object-cover" />
        </div>
      ))}
    </Carousel>
  );
};

export default DetailCarousal;
