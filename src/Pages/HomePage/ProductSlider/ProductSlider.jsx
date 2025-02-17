import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import ProductCard from "../../Cards/ProductCard";
import { useNavigate } from "react-router-dom";


const ProductSlider = ({data , category}) => {
  const [isNewDropsSelected, setIsNewDropsSelected] = useState(true);
  const [isMostTrendingSelected, setIsMostTrendingSelected] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "NEW DROPS") {
      setIsNewDropsSelected(true);
      setIsMostTrendingSelected(false);
    } else {
      setIsNewDropsSelected(false);
      setIsMostTrendingSelected(true);
    }
  };

  

  return (
    <div>
      <div className="flex justify-center items-center px-4 py-2">
        <button
          className={`px-4 py-2 rounded-full ${
            isNewDropsSelected ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => handleButtonClick("NEW DROPS")}
        >
          NEW DROPS
        </button>
        <button
          className={`px-4 py-2 rounded-full ${
            isMostTrendingSelected
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => handleButtonClick("MOST TRENDING")}
        >
          MOST TRENDING
        </button>
      </div>
      <div className="w-full max-w-full px-2 sm:px-4 font-titillium">
        <div className="relative">
          <div 
            className="flex gap-2 sm:gap-4 overflow-x-auto"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style>
              {`
                .flex::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            {data.map((product) => (
              <ProductCard key={product.id} product={product} category={category} id={product.id}/>
            ))}
          </div>
          <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 sm:hidden bg-white bg-opacity-75 p-1 rounded-l">
            <ChevronRight size={24} className="text-gray-600" />
          </div>
        </div>
        <div className="text-center mt-2 lg:mt-6">
          <button
            className="px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base text-gray-600 border-2 rounded-sm uppercase hover:bg-slate-200"
            onClick={() => {
              navigate(`/productcatalog/${category}`);
              handleScroll();
            }}
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;