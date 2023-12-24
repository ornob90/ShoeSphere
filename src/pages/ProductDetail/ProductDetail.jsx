import React, { useState } from "react";
import Container from "../../components/shared/Containers/Container";

import DetailCarousal from "./DetailCarousal";
import { Rating } from "@mui/material";
import Button from "../../components/html/Button";
import SectionHeader from "../../components/shared/Headers/SectionHeader";
import ProductCarousel from "../../components/shared/ProductCarousel/ProductCarousel";
import QuantityBtn from "../../components/shared/SingleUseButtons/QuantityBtn";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import ProductCarouselCard from "../../components/cards/ProductCarouselCard";
import { Pagination } from "swiper/modules";
import toast from "react-hot-toast";
import useAuth from "../../hooks/auth/useAuth";
import usePostSecure from "../../hooks/apiSecure/usePostSecure";
import useUser from "../../hooks/specific/useUser";
import usePutSecure from "../../hooks/apiSecure/usePutSecure";
import Reviews from "./Reviews/Reviews";
const ProductDetail = () => {
  // const images = [
  //   "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   "https://media.istockphoto.com/id/652226442/photo/full-white-sneakers-isolated-on-black-background.webp?s=170667a&w=0&k=20&c=jPK1yb82j4hGZF1IH-Q56dT_YWGXy40R1Tb9JU7D8N8=",
  //   "https://images.unsplash.com/photo-1608230164697-c791326d284c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  //   "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
  //   "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  // ];

  const { id } = useParams();
  const { user: curUser } = useAuth();
  const { data: product } = useGetSecure(
    ["ProductDetail", id],
    `/product/${id}`
  );

  const [productQuantity, setProductQuantity] = useState(0);

  const {
    _id,
    name,
    brand,
    gender,
    price,
    available,
    description,
    shippingPrice,
    sizes,
    images,
    discount,
    buyingCost,
    profitPercentage,
    sellPrice,
    addedDate,
  } = product || {};

  const { _id: user } = useUser() || {};

  const { mutateAsync: addToFavorite } = usePostSecure(null, `/favorite`);

  const { mutateAsync: addToCart } = usePostSecure([["Carts", user]], "/cart");

  const handleBookmarked = async () => {
    const favProduct = {
      product: _id,
      userName: curUser?.displayName,
      userEmail: curUser?.email,
    };

    try {
      const response = await addToFavorite(favProduct);
      toast.success("Product Bookmarked!!");
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const handleAddToCart = async () => {
    try {
      const cartProduct = {
        user,
        product: _id,
        price,
        quantity: productQuantity,
      };

      await toast.promise(addToCart(cartProduct), {
        pending: "Adding to cart...",
        success: "Added to cart!",
        error: "Failed to add to cart",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const { data: suggestions } = useGetSecure(
    ["SuggestionProducts", brand],
    `/suggested-product?brand=${brand}`
  );

  // console.log(brand);

  const handleQuantity = (action) => {
    let newQuantity =
      action === "+" ? productQuantity + 1 : productQuantity - 1;
    newQuantity = newQuantity < 0 ? 0 : newQuantity;
    setProductQuantity(newQuantity);
  };

  return (
    <div className="min-h-screen font-poppins">
      <div className="h-[250px] bg-yellow-300 bg-detail flex justify-center items-center bg-fixed">
        <h3 className="text-gray-400 font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
          Unveiling [{name}]:
          <br /> {description}
        </h3>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-5 mt-10 gap-8 md:gap-0">
        <div className="md:col-span-3 text-center">
          <DetailCarousal images={images} />
        </div>
        <div className="flex flex-col gap-2 md:col-span-2 ">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="  font-clashRegular text-gray-600 text-sm">
            {brand?.name}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-xl font-semibold">$ {price}</p>
            <Rating
              name="half-rating-read"
              value={4}
              precision={0.5}
              readOnly
            />
          </div>
          <p className="text-sm mt-10 text-gray-600">{description}</p>
          <p className="mt-3 font-medium">Size</p>
          <div className="flex  items-center gap-4">
            {sizes?.map((value) => (
              <div
                key={value}
                className="w-[35px] h-[35px]  flex  justify-center items-center text-sm bg-white text-black border-black border duration-[.4s] cursor-pointer hover:bg-black hover:text-white"
              >
                {value}
              </div>
            ))}
          </div>
          {/* Quantity  */}
          <div className="flex items-center gap-4 mt-3">
            <p
              onClick={() => handleQuantity("-")}
              className="w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
            >
              -
            </p>
            <p className="px-5 py-1 font-semibold border ">{productQuantity}</p>
            <p
              onClick={() => handleQuantity("+")}
              className=" w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300"
            >
              +
            </p>
          </div>

          {/* Wishlist */}
          <div className="flex flex-col gap-2 mt-10">
            <Button onClick={handleAddToCart} className="py-2 text-white">
              Add To Cart
            </Button>
            <Button
              onClick={handleBookmarked}
              className="py-2 text-black bg-white border border-black"
            >
              Save To Wishlist
            </Button>
          </div>
        </div>
      </Container>
      <Reviews />

      <SectionHeader title="You may like" />
      {/* Similar Products */}

      <Container className="mb-28">
        <Swiper
          // slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper "
          style={{
            height: "400px",
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
          }}
        >
          {/* <SwiperSlide className="h-[100px]">Slide 1</SwiperSlide> */}

          {suggestions?.map((product) => (
            <SwiperSlide key={product?._id} className="h-[100px]">
              <ProductCarouselCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default ProductDetail;
