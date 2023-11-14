import React from "react";
import Container from "../../components/shared/Container";

import DetailCarousal from "./DetailCarousal";

const ProductDetail = () => {
  const images = [
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/652226442/photo/full-white-sneakers-isolated-on-black-background.webp?s=170667a&w=0&k=20&c=jPK1yb82j4hGZF1IH-Q56dT_YWGXy40R1Tb9JU7D8N8=",
    "https://images.unsplash.com/photo-1608230164697-c791326d284c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1545289414-1c3cb1c06238?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
  ];

  return (
    <div className="min-h-screen ">
      <div className="h-[250px] bg-yellow-300 bg-detail flex justify-center items-center bg-fixed">
        <h3 className="text-gray-400 font-clashBold text-xl md:text-2xl lg:text-3xl text-center">
          Unveiling [Product Name]:
          <br /> A Step Towards Timeless Elegance
        </h3>
      </div>

      <Container className="grid grid-cols-1 md:grid-cols-5 mt-10">
        <div className="md:col-span-3 ">
          <DetailCarousal images={images} />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
