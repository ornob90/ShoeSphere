import React from "react";
import Banner from "../Banner/Banner";
import SectionHeader from "../../../components/shared/SectionHeader";
import ProductCarousel from "../../../components/shared/ProductCarousel/ProductCarousel";
import BrandsSection from "../BrandsSection/BrandsSection";
import About from "../About/About";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";
import ProductCollectionCarousal from "../../ProductCollection/ProductCollectionCarousal/ProductCollectionCarousal";

const Home = () => {
  return (
    <div>
      <Banner />
      <BrandsSection />
      <SectionHeader title="Discover Brands" />
      <ProductCollectionCarousal />
      <SectionHeader title="New Arrivals" />
      <ProductCarousel />
      <About />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
