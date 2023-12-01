import React from "react";
import Container from "../../components/shared/Container";
import ProductCollectionCarousal from "./ProductCollectionCarousal/ProductCollectionCarousal";
import FilterDrawer from "./FilterDrawer/FilterDrawer";

const ProductCollection = () => {
  const shoeBrands = [
    "Nike",
    "Adidas",
    "Puma",
    "Converse",
    "Reebok",
    "Vans",
    "New Balance",
    "Skechers",
    "Timberland",
    "Fila",
    "Under Armour",
    "ASICS",
    "Ecco",
    "Dr. Martens",
    "Salomon",
  ];

  return (
    <Container className="pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[7%] min-h-[500px]">
      <ul className="overflow-x-scroll max-w-full w-full flex gap-4  no-scrollbar mt-5 border-y ">
        {shoeBrands.map((brand) => (
          <li
            key={brand}
            className="py-3 w-[20%] lg:w-[13%]  flex-shrink-0 text-center hover:bg-black hover:text-white cursor-pointer duration-[.4s]"
          >
            {brand}
          </li>
        ))}
      </ul>
      <div className="mt-5 relative flex">
        <FilterDrawer />
        <div className="w-full lg:w-[75%] bg-black h-[400px] mt-16 lg:mt-0">
          <div className="bg-blue-600">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quas.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductCollection;
