import Search from "../../../components/shared/Search";
import Inp from "../../../components/html/Input";
import { GoSearch } from "react-icons/go";
import Button from "../../../components/html/Button";
import { useNavigate } from "react-router-dom";
import useUser from "../../../hooks/specific/useUser";

const ProductStates = () => {
  const navigate = useNavigate();

  const { _id: userID } = useUser() || {};
  return (
    <div className="mt-5 text-xl md:text-2xl font-bold bg-white min-h-[100px]  px-[5%]  gap-3 ">
      <div className="pt-10  grid grid-cols-1 md:grid-cols-5 items-center  pb-5 gap-4">
        <p className="md:col-span-2">
          Products Count: <span className="font-clashSemibold">15</span>
        </p>
        <div className="md:col-span-3 flex fex-col sm:flex-row  justify-between md:justify-evenly">
          <div className="relative w-[60%]">
            <input
              placeholder="Search"
              className="text-black text-sm  bg-[#F1F3F4] pl-3 py-3 w-full focus:outline-none"
            />
            <GoSearch className="absolute right-[5%] top-[30%] text-lg" />
          </div>
          <Button
            onClick={() => navigate(`/profile/${userID}/admin/add-product`)}
            className="md:col-span-1 text-[12px] md:text-sm py-[6px] md:py-[11px] text-white px-3 md:px-5"
          >
            Add Product
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductStates;
