import React from "react";
import Container from "../../../components/shared/Containers/Container";
import { Background, Parallax } from "react-parallax";
import aboutBg from "../../../assets/about.png";

const About = () => {
  return (
    <div className="min-h-[500px] h-[80vh] w-full bg-about bg-fixed flex  justify-center items-center">
      <div className="flex flex-col  items-center justify-center text-white w-[70%] gap-4">
        <h3 className="text-sm text-center md:text-medium font-clashSemibold">
          Your Journey in Style Begins Here
        </h3>
        <h1 className="text-2xl text-center md:text-3xl lg:text-5xl font-clashBold">
          Discover the World <br />
          of Exceptional Footwear
        </h1>
        <p className="text-[10px] md:text-sm text-center w-full md:w-[80%] text-gray-200">
          Embark on a stylish journey with our curated footwear collection. From
          timeless classics to cutting-edge designs, we celebrate diversity in
          every step. Explore a world where craftsmanship meets innovation,
          where every pair tells a unique story. Elevate your style, elevate
          your stride—discover exceptional footwear that resonates with your
          individuality.
        </p>
      </div>
    </div>
  );
};

export default About;
