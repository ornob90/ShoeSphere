import React from "react";
import Container from "../Containers/Container";
import Button from "../../html/Button";

const SectionHeader = ({ title }) => {
  return (
    <Container className="mb-10 mt-20 flex justify-between items-center">
      <h1 className=" font-clashBold text-xl md:text-3xl">{title}</h1>
      <Button className="bg-white text-black border-b-2 border-black text-[12px] md:text-[14px]  px-0 py-0  font-clashMedium">
        View All
      </Button>
    </Container>
  );
};

export default SectionHeader;
