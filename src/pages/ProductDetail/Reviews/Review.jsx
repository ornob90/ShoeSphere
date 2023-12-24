import React from "react";

const Review = () => {
  return (
    <li className="flex md:w-[50%] gap-4 list-disc">
      <div className="flex justify-center items-center gap-4">
        <p className="w-[7px] h-[7px] bg-black rounded-full"></p>
        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full border border-black ">
          <img
            src="{curUser?.photoURL}"
            alt=""
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>
      <div className="w-[80%] text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
        praesentium!
      </div>
    </li>
  );
};

export default Review;
