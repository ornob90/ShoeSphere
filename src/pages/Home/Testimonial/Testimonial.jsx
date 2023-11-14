import React from "react";
import Container from "../../../components/shared/Container";
import { Rating } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCube,
  Autoplay,
} from "swiper/modules";

const Testimonial = () => {
  const testimonialData = [
    {
      rating: 4.5,
      review:
        "Our experience with this shoe website has been amazing! The quality of the shoes is top-notch and the customer service is exceptional. Highly recommended!",
      authorName: "John Doe",
      authorPosition: "Marketing Manager",
      authorCompany: "ABC Inc",
      brand: "NIKE",
      imageUrl:
        "https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 3.8,
      review:
        "Great selection of shoes and prompt delivery. However, I would appreciate more variety in the color options. Overall, satisfied with the purchase.",
      authorName: "Jane Smith",
      authorPosition: "Fashion Blogger",
      authorCompany: "Style Hub",
      brand: "Adidas",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      rating: 5.0,
      review:
        "The shoe quality exceeded my expectations. The website offers a seamless shopping experience, and the customer support is fantastic. Will definitely shop here again!",
      authorName: "Alex Rodriguez",
      authorPosition: "Fitness Enthusiast",
      authorCompany: "FitLife",
      brand: "Puma",
      imageUrl:
        "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="pb-0 bg-gray-200">
      <p className="pt-16 text-xl text-center font-clashBold md:text-2xl lg:text-3xl">
        Word's Of Satisfaction
      </p>
      <Swiper
        // pagination={true}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, EffectCube]}
        className="mySwiper"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
      >
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.imageUrl}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
