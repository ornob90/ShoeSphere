import React from "react";
import ProductCarouselCard from "../cards/ProductCarouselCard";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductCarousel = () => {
  return (
    <Container className="">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide className="h-[100px]">Slide 1</SwiperSlide> */}

        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <SwiperSlide key={value} className="h-[100px]">
            <ProductCarouselCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductCarousel;
