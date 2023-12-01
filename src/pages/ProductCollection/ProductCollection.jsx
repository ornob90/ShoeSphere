import React from "react";
import Container from "../../components/shared/Container";
import ProductCollectionCarousal from "./ProductCollectionCarousal";

const ProductCollection = () => {
  return (
    <Container className="pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[7%] min-h-[500px]">
      <h1 className="text-2xl font-bold mb-4">Discover Brands</h1>
      <ProductCollectionCarousal />
    </Container>
  );
};

export default ProductCollection;
