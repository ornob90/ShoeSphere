import React from "react";
import ReviewForm from "./ReviewForm";
import Container from "../../../components/shared/Containers/Container";
import Review from "./Review";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import useUser from "../../../hooks/specific/useUser";

const Reviews = ({ productId }) => {
  const { _id: userId } = useUser() || {};

  const { data: reviews } = useGetSecure(
    ["Reviews", userId, productId],
    `/reviews?user=${userId}&product=${productId}`
  );
  console.log(reviews);
  return (
    <Container className="mt-16">
      <ReviewForm productId={productId} userId={userId} />

      <ul className="mt-20 flex flex-col gap-9 h-[300px] overflow-y-auto no-scrollbar border-b border-b-gray-300">
        {reviews?.map((review) => (
          <Review key={review?._id} review={review} />
        ))}
      </ul>
    </Container>
  );
};

export default Reviews;
