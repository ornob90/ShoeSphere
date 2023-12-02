import React from "react";
import ProductCollectionCarousalCard from "./ProductCollectionCarousalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../../../components/shared/Containers/Container";

const ProductCollectionCarousal = () => {
  return (
    <Container className="">
      <Swiper
        // slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        style={{
          height: "400px",
          width: "100%",
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 1,
          },
          768: {
            width: 768,
            slidesPerView: 2,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
      >
        {/* <SwiperSlide className="h-[100px]">Slide 1</SwiperSlide> */}

        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <SwiperSlide key={value} className="h-[350px]">
            <ProductCollectionCarousalCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductCollectionCarousal;
