import React from "react";
import Banner from "../Banner/Banner";
import SectionHeader from "../../../components/shared/SectionHeader";
import ProductCarousel from "../../../components/shared/ProductCarousel/ProductCarousel";
import BrandsSection from "../BrandsSection/BrandsSection";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandsSection />
      <SectionHeader title="New Arrivals" />
      <ProductCarousel />
      <About />
    </div>
  );
};

export default Home;
