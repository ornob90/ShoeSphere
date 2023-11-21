import React from "react";

const CheckoutOrder = () => {
  const dummyData = [
    {
      product: "Meen Medium-App-1m app visits/month",
      total: 1500,
    },
    {
      product: "Meen Medium-App-1m app visits/month",
      total: 1000,
    },
  ];

  const checkoutSummary = [
    {
      title: "Subtotal",
      total: 15000,
    },
    {
      title: "Discount",
      total: 5000,
    },
    {
      title: "VAT",
      total: 15000,
    },
    {
      title: "Total",
      total: 15000,
    },
  ];

  return (
    <div className="w-[90%] mx-auto lg:col-span-2">
      <h1 className=" mb-16">Your Order</h1>
      <table className="w-full">
        <thead className="w-full ">
          <tr className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1">
            <th className="col-span-3">Product</th>
            <th className="col-span-2 pb-5">Subtotal</th>
          </tr>
        </thead>
        <tbody className="">
          {dummyData.map(({ product, total }) => (
            <tr
              key={product}
              className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-gray-600 py-2"
            >
              <td className="col-span-3">{product}</td>
              <td className="col-span-2">{total}$</td>
            </tr>
          ))}

          {checkoutSummary.map(({ title, total }) => (
            <tr
              key={title}
              className="grid grid-cols-5 text-left border-b-2 border-[#050505] pb-1 text-base lg:text-sm text-black font-medium py-2"
            >
              <td className="col-span-3">{title}</td>
              <td className={`col-span-2`}>{total}$</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutOrder;
