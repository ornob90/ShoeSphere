import React, { useEffect, useState } from "react";
import Container from "../../components/shared/Containers/Container";
import ProductCollectionCarousal from "./ProductCollectionCarousal/ProductCollectionCarousal";
import FilterDrawer from "./FilterDrawer/FilterDrawer";
import Products from "./Products/Products";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";
import useAxiosSecure from "../../hooks/axios/useAxiosSecure";

const ProductCollection = () => {
  // const shoeBrands = [
  //   "Nike",
  //   "Adidas",
  //   "Puma",
  //   "Converse",
  //   "Reebok",
  //   "Vans",
  //   "New",
  //   "Skechers",
  //   "Timberland",
  //   "Fila",
  //   "Under",
  //   "ASICS",
  //   "Ecco",
  //   "Dr. ",
  //   "Salomon",
  // ];

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(15);
  const axiosSecure = useAxiosSecure();

  const { data: shoeBrands } = useGetSecure(["Brands"], "/brands");

  const { data } = useGetSecure(
    ["Products"],
    `/products?page=${page}&size=${size}`
  );

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const [brands, setBrands] = useState([]);
  const [genders, setGenders] = useState({});
  const [available, setAvailable] = useState({});
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 20000,
  });

  const handleBrand = (brand) => {
    const exist = brands.find((brandName) => brandName === brand);

    if (exist) {
      setBrands(brands.filter((brandName) => brandName !== brand));
    } else {
      setBrands((prev) => [...prev, brand]);
    }
  };

  // useEffect(() => {
  //   const selectAvailableOptions = Object.keys(available)
  //     .filter((key) => available[key])
  //     .map((value) => (value === "Yes" ? true : false));

  //   const selectGendersOptions = Object.keys(genders).filter(
  //     (key) => genders[key]
  //   );

  //   const filterOptions = {
  //     brand: brands,
  //     available: selectAvailableOptions,
  //     gender: selectGendersOptions,
  //     minPrice: [priceRange.min],
  //     maxPrice:
  //       priceRange.max >= priceRange.min
  //         ? [priceRange.max]
  //         : [priceRange.min + 1],
  //   };

  //   if (
  //     brands.length === 0 &&
  //     selectAvailableOptions.length === 0 &&
  //     genders.length === 0
  //   ) {
  //     setProducts(data);
  //     return;
  //   }

  //   axiosSecure
  //     .get(`/products?page=${page}&size=${size}`)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, [brands, genders, priceRange.min, priceRange.max, available]);

  return (
    <Container className="pt-[25%] sm:pt-[20%] md:pt-[15%] lg:pt-[7%] min-h-[600px]">
      <ul className="flex w-full max-w-full gap-4 mt-5 overflow-x-scroll no-scrollbar border-y">
        {shoeBrands?.map(({ name: brandName }) => (
          <li
            onClick={() => handleBrand(brandName)}
            key={brandName}
            className={`py-3 w-[25%] md:w-[20%] lg:w-[13%]  flex-shrink-0 text-center hover:border-black border border-white  cursor-pointer duration-[.4s] text-sm flex  justify-center ${
              brands.includes(brandName) ? " bg-black text-white" : "text-black"
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
        <FilterDrawer
          setGenders={setGenders}
          setAvailable={setAvailable}
          setPriceRange={setPriceRange}
          priceRange={priceRange}
          genders={genders}
          available={available}
        />
        <Products />
      </div>
    </Container>
  );
};

export default ProductCollection;
