import React from "react";
import ProductCollectionCarousalCard from "./ProductCollectionCarousalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../../../components/shared/Containers/Container";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";

const ProductCollectionCarousal = () => {
  const { data: shoeBrands } = useGetSecure(["Brands"], "/brands");
  console.log(shoeBrands);
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

        {shoeBrands?.map((brand) => (
          <SwiperSlide key={brand._id} className="h-[350px]">
            <ProductCollectionCarousalCard brand={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ProductCollectionCarousal;
