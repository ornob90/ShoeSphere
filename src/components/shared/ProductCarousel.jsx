import React from "react";
import ProductCarouselCard from "../cards/ProductCarouselCard";
import Container from "./Container";

const ProductCarousel = () => {
  return (
    <Container className="grid grid-cols-4">
      <ProductCarouselCard />
    </Container>
  );
};

export default ProductCarousel;
