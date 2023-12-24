import React from "react";
import Input from "../../../components/html/Input";
import Button from "../../../components/html/Button";

const ReviewForm = () => {
  return (
    <form className="flex gap-2 items-center">
      <Input
        placeHolder="Drop a review"
        className="bg-transparent border-b border-b-gray-600  md:w-[400px]"
      />
      <Button className="py-3 px-7 text-white text-sm sm:text-base">Add</Button>
    </form>
  );
};

export default ReviewForm;
