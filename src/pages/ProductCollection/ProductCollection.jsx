import React, { useState } from "react";
import Container from "../../components/shared/Containers/Container";
import ProductCollectionCarousal from "./ProductCollectionCarousal/ProductCollectionCarousal";
import FilterDrawer from "./FilterDrawer/FilterDrawer";
import Products from "./Products/Products";

const ProductCollection = () => {
  const shoeBrands = [
    "Nike",
    "Adidas",
    "Puma",
    "Converse",
    "Reebok",
    "Vans",
    "New",
    "Skechers",
    "Timberland",
    "Fila",
    "Under",
    "ASICS",
    "Ecco",
    "Dr. ",
    "Salomon",
  ];

  const [brand, setBrand] = useState("");
  const [genders, setGenders] = useState([]);
  const [available, setAvailable] = useState([]);

  const handleBrand = (brand) => {
    setBrand((prev) => (prev === brand ? "" : brand));
  };

  return (
    <Container className="pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[7%] min-h-[600px]">
      <ul className="flex w-full max-w-full gap-4 mt-5 overflow-x-scroll no-scrollbar border-y">
        {shoeBrands.map((brandName) => (
          <li
            onClick={() => handleBrand(brandName)}
            key={brandName}
            className={`py-3 w-[25%] md:w-[20%] lg:w-[13%]  flex-shrink-0 text-center hover:border-black border border-white  cursor-pointer duration-[.4s] text-sm flex  justify-center ${
              brandName === brand ? " bg-black text-white" : "text-black"
            }`}
          >
            {brandName}
            <div>
              <img
                src="https://i.ibb.co/PmnkYfM/nike-removebg-preview.png"
                alt=""
                className="w-[20px] "
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="relative flex flex-col mt-5 lg:flex-row">
        <FilterDrawer />
        <Products />
      </div>
    </Container>
  );
};

export default ProductCollection;
