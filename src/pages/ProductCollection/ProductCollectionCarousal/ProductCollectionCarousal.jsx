import React, { useEffect, useState } from "react";
import ProductCollectionCarousalCard from "./ProductCollectionCarousalCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Container from "../../../components/shared/Containers/Container";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import SectionProductSkeleton from "../../../components/skeletons/SectionProductSkeleton";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
import useBrands from "../../../hooks/specific/useBrands";

const ProductCollectionCarousal = () => {
  // const { data: shoeBrands, isLoading } = useGetSecure(["Brands"], "/brands");

  const { shoeBrands, isLoading } = useBrands();

  // const [shoeBrands, setShoeBrands] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  // const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   setIsLoading(true);
  //   axiosSecure
  //     .get(`/brands`)
  //     .then((res) => {
  //       setShoeBrands(res.data);
  //       setIsLoading(false);
  //       console.log(shoeBrands);
  //     })
  //     .catch((err) => setIsLoading(false));
  // }, []);

  // console.log(shoeBrands);
  return (
    <Container className="">
      {isLoading ? (
        <SectionProductSkeleton />
      ) : (
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
      )}
    </Container>
  );
};

export default ProductCollectionCarousal;
