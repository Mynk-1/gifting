import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCategory= () => {
  
  const navigate= useNavigate()

  const categories = [
    {
      name: "CUSTOMIZABLE MUG",
      type: "mugs",
      image:
        "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739435220/m1_u7kkio.jpg",
      description: "Sleek black outfit with sunglasses and jacket",
    },
    {
      name: "POLAROID",
      type: "polaroid",
      image:
        "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739436963/p8_ahx1ih.webp",
      description: "Green button-up shirt",
    },
    {
      name: "WALLET CARDS",
      type: "wallet",
      image:
        "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739554937/w2_fn1wie.webp",
      description: "Black denim jeans with white sneakers",
    },
    {
      name: "PRINTED SHIRTS",
      type: "tshirt",
      image:
        "https://res.cloudinary.com/dg3ftdduj/image/upload/v1739555464/t8_pvfo3m.webp",
      description: "Polka dot shirt with book",
    },
  ];

  function handleClick(type) {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Instant scroll to top
    navigate(`/customize/${type}`);
  }
  

  return (
    <div className="container mx-auto px-4 py-6 " >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
            onClick={()=>handleClick(category.type)}
          >
            <img
              src={category.image}
              alt={category.description}
              className="w-full h-[200px] md:h-[250px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-sm md:text-md font-bold">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
