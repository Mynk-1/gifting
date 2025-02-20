import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import PhotoGalleryModal from "./PhotoGalleryModal";
import ProductOptions from "./ProductOptions";
import PhotoUploader from "./PhotoUploader";
import ProductInfo from "./ProductInfo";
import ProductSections from "./ProductSections";
import Button from "./Button";
import { getProductByCategory } from '../../../Data/CustumProductDetails';

const CustomProductDetail = () => {
  const { category, id } = useParams();
  const product = getProductByCategory(category);
  const [selectedType, setSelectedType] = useState(product.customizationOptions.types?.[0]);
  const [selectedSize, setSelectedSize] = useState(selectedType?.sizes?.[0] || null);
  const [mainImage, setMainImage] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [customText, setCustomText] = useState("");
  const [hoverImage, setHoverImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentPrice = selectedSize?.price || product.price;

  const handleSubmit = () => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      
      // Add product details
      formData.append('productId', id);
      formData.append('productCategory', category);
      formData.append('productName', product.name);
      
      // Add selected options
      formData.append('selectedType', selectedType.id);
      formData.append('selectedTypeName', selectedType.name);
      
      if (selectedSize) {
        formData.append('selectedSize', selectedSize.id);
        formData.append('selectedSizeName', selectedSize.name);
        formData.append('price', selectedSize.price.toString());
      } else {
        formData.append('price', product.price.toString());
      }
  
      // Add custom text if enabled and provided
      if (product.customizationOptions.allowText && customText.trim()) {
        formData.append('customText', customText.trim());
      }
  
      // Add uploaded images and their descriptions
      uploadedImages.forEach((image, index) => {
        formData.append(`image-${index}`, image.file);
        if (image.text) {
          formData.append(`image-${index}-description`, image.text);
        }
      });
  
      // Log all form data entries
      console.log('Form Data Contents:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: `, value);
      }
      
    } catch (error) {
      console.error('Error creating form data:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            disabled={uploadedImages.length === 0 || isSubmitting}
            className="w-full mt-6"
            onClick={handleSubmit}
          >
            {uploadedImages.length === 0 ? "UPLOAD PHOTOS TO CONTINUE" : 
             isSubmitting ? "ADDING TO CART..." : "ADD TO CART"}
          </Button>

          <ProductSections sections={product.sections} />
        </div>
      </div>
    </div>
  );
};

export default CustomProductDetail;