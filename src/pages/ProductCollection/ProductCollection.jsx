import React from "react";
import Container from "../../components/shared/Container";
import ProductCollectionCarousal from "./ProductCollectionCarousal/ProductCollectionCarousal";

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
    </Container>
  );
};

export default ProductCollection;
