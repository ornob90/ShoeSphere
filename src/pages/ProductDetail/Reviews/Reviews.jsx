import React from "react";
import ReviewForm from "./ReviewForm";
import Container from "../../../components/shared/Containers/Container";
import Review from "./Review";

const Reviews = () => {
  return (
    <Container className="mt-16">
      <ReviewForm />

      <ul className="mt-20 flex flex-col gap-9 h-[300px] overflow-y-auto no-scrollbar border-b border-b-gray-300">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
          <Review key={value} />
        ))}
      </ul>
    </Container>
  );
};

export default Reviews;
