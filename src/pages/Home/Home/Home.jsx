import React from "react";
import Banner from "../Banner/Banner";
import SectionHeader from "../../../components/shared/SectionHeader";
import ProductCarousel from "../../../components/shared/ProductCarousel/ProductCarousel";
import BrandsSection from "../BrandsSection/BrandsSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandsSection />
      <SectionHeader title="New Arrivals" />
      <ProductCarousel />
    </div>
  );
};

export default Home;
