import React from "react";

const QuantityBtn = () => {
  return (
    <div className="flex items-center gap-4 mt-3">
      <p className="w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300">
        -
      </p>
      <p className=" font-semibold border px-5 py-1">5</p>
      <p className=" w-[20px] h-[20px] lg:w-[35px] lg:h-[35px] rounded-full bg-gray-200 flex justify-center items-center text-xl cursor-pointer active:scale-95 duration-300">
        +
      </p>
    </div>
  );
};

export default QuantityBtn;
