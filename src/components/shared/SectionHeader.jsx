import React from "react";
import Container from "./Container";
import Button from "../html/Button";

const SectionHeader = ({ title }) => {
  return (
    <Container className="flex justify-between items-center">
      <h1>{title}</h1>
      <Button>View All</Button>
    </Container>
  );
};

export default SectionHeader;
