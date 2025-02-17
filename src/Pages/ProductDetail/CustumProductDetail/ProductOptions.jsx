import React from "react";

const ProductOptions = ({
  product,
  selectedType,
  setSelectedType,
  selectedSize,
  setSelectedSize,
  setMainImage,
  setHoverImage
}) => (
  <>
    {product.customizationOptions.types && (
      <div className="mt-6">
        <p className="font-semibold mb-2">SELECT {product.productType.toUpperCase()} TYPE</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {product.customizationOptions.types.map((type) => (
            <button
              key={type.id}
              className={`px-4 py-2 border rounded-md
                ${selectedType.id === type.id ? "bg-black text-white border-black" : "border-gray-300"} 
                hover:bg-black hover:text-white`}
              onClick={() => {
                setSelectedType(type);
                setSelectedSize(type.sizes?.[0] || null);
                setMainImage(0);
                setHoverImage(null);
              }}
            >
              {type.name}
            </button>
          ))}
        </div>
        {selectedType.description && (
          <p className="text-sm text-gray-600 mt-2">{selectedType.description}</p>
        )}
      </div>
    )}

    {selectedType?.sizes && (
      <div className="mt-6">
        <p className="font-semibold mb-2">SELECT SIZE</p>
        <div className="grid grid-cols-3 gap-2">
          {selectedType.sizes.map((size) => (
            <button
              key={size.id}
              className={`px-4 py-2 border rounded-md
                ${selectedSize?.id === size.id ? "bg-black text-white border-black" : "border-gray-300"} 
                hover:bg-black hover:text-white`}
              onClick={() => setSelectedSize(size)}
            >
              <div className="text-sm">{size.name}</div>
              <div className="text-xs text-gray-500">{size.dimensions}</div>
            </button>
          ))}
        </div>
      </div>
    )}
  </>
);

export default ProductOptions;