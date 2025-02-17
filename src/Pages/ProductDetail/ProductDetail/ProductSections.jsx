import React from "react";

const ProductSections = ({ sections }) => (
  <div className="mt-6 space-y-4">
    {sections.map((section, index) => (
      <div key={index} className="border-t pt-4">
        <button className="flex justify-between items-center w-full font-semibold">
          <span>{section.title}</span>
          <span>▼</span>
        </button>
        <p className="text-sm text-gray-600 mt-2">{section.content}</p>
      </div>
    ))}
  </div>
);

export default ProductSections;