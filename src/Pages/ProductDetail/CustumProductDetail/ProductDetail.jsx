import React, { useState } from "react";
import ImageGallery from "./ImageGallery";
import PhotoGalleryModal from "./PhotoGalleryModal";
import ProductOptions from "./ProductOptions";
import PhotoUploader from "./PhotoUploader";
import ProductInfo from "./ProductInfo";
import ProductSections from "./ProductSections";
import { getProductByCategory } from '../../../Data/CustumProductDetails';
import Button from "./Button";
import { useParams } from "react-router-dom";

const CustomProductDetail = () => {
  const {category,id} = useParams()
  console.log(id)
  const product = getProductByCategory(category);
  const [selectedType, setSelectedType] = useState(product.customizationOptions.types?.[0]);
  const [selectedSize, setSelectedSize] = useState(selectedType?.sizes?.[0] || null);
  const [mainImage, setMainImage] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [customText, setCustomText] = useState("");
  const [hoverImage, setHoverImage] = useState(null);

  const currentPrice = selectedSize?.price || product.price;

  return (
    <div className="container mx-auto p-4 font-sans">
      {showAllPhotos && (
        <PhotoGalleryModal
          selectedType={selectedType}
          product={product}
          setShowAllPhotos={setShowAllPhotos}
          setMainImage={setMainImage}
        />
      )}
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <ImageGallery
            selectedType={selectedType}
            product={product}
            mainImage={mainImage}
            setMainImage={setMainImage}
            setShowAllPhotos={setShowAllPhotos}
            hoverImage={hoverImage}
            setHoverImage={setHoverImage}
          />
        </div>

        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <ProductInfo
            product={product}
            currentPrice={currentPrice}
          />

          <ProductOptions
            product={product}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            setMainImage={setMainImage}
            setHoverImage={setHoverImage}
          />

          <PhotoUploader
            product={product}
            uploadedImages={uploadedImages}
            setUploadedImages={setUploadedImages}
          />

          {product.customizationOptions.allowText && (
            <div className="mt-6">
              <p className="font-semibold mb-2">ADD CUSTOM TEXT (Optional)</p>
              <textarea
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={product.customizationOptions.textPlaceholder}
                className="w-full border p-2 rounded-md"
                rows={2}
                maxLength={product.customizationOptions.maxTextLength}
              />
            </div>
          )}

          <Button 
            disabled={uploadedImages.length === 0}
            className="w-full mt-6"
          >
            {uploadedImages.length === 0 ? "UPLOAD PHOTOS TO CONTINUE" : "ADD TO CART"}
          </Button>

          <ProductSections sections={product.sections} />
        </div>
      </div>
    </div>
  );
};

export default CustomProductDetail;