import React from "react";
import Input from "../html/Input";
import Select from "../html/Select";
import Button from "../html/Button";

const ProductForm = ({ method }) => {
  return (
    <form className="grid grid-cols-1 md:grid-cols-6 gap-x-3 gap-y-4">
      {/* Name */}
      <div className="md:col-span-3">
        <label htmlFor="name" className="font-semibold text-lg">
          Name
        </label>
        <Input placeHolder="Product Name" id="name" className="" />
      </div>
      {/* Brand */}
      <div className="md:col-span-3">
        <label htmlFor="brand" className="font-semibold text-lg">
          Brand
        </label>
        <Input placeHolder="Brand" id="brand" className="" />
      </div>
      {/* Gender */}
      <div className="md:col-span-2">
        <label className="font-semibold text-lg">Gender</label>
        <Select
          options={["Male", "Female"]}
          placeHolder="Gender"
          className="md:col-span-2"
        />
      </div>
      {/* Price */}
      <div className="md:col-span-2">
        <label htmlFor="price" className="font-semibold text-lg">
          Price
        </label>
        <Input type="number" placeHolder="Price" id="price" className="" />
      </div>

      {/* Available */}
      <div className="md:col-span-2">
        <label className="font-semibold text-lg">Available</label>
        <Select
          options={["Yes", "No"]}
          placeHolder="Available"
          className="md:col-span-2"
        />
      </div>

      {/* Description */}
      <div className="md:col-span-6">
        <label htmlFor="description" className="font-semibold text-lg">
          Description
        </label>
        <textarea
          id="description"
          rows={3}
          className="w-full  bg-[#EBEBEB] pl-2 pt-4 focus:outline-none"
          placeholder="Product Description"
        ></textarea>
      </div>
      {/* Shipping */}
      <div className="md:col-span-2">
        <label htmlFor="shipping" className="font-semibold text-lg">
          Shipping Cost
        </label>
        <Input
          type="number"
          placeHolder="Shipping"
          id="shipping"
          className=""
        />
      </div>

      {/* Sizes */}
      <div className="md:col-span-4">
        <label htmlFor="shipping" className="font-semibold text-lg">
          Sizes
        </label>
        <Input
          type="number"
          placeHolder="1, 2, 3, 4, 5, ..."
          id="shipping"
          className=""
        />
      </div>

      {/* Upload */}
      <div className="md:col-span-3">{/* TODO */}</div>

      {/* Discount */}
      <div className="md:col-span-3">
        <label htmlFor="discount" className="font-semibold text-lg">
          Discount (%)
        </label>
        <Input
          type="number"
          placeHolder="Discount (%)"
          id="discount"
          className=""
        />
      </div>

      {/* Add The Product Button*/}
      <Button className="md:col-span-6 text-white py-2 mt-5 font-clashBold">
        Add Product
      </Button>
    </form>
  );
};

export default ProductForm;
