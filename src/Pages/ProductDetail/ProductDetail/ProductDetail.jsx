import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import PhotoGalleryModal from "./PhotoGalleryModal";
import ProductOptions from "./ProductOptions";
import PhotoUploader from "./PhotoUploader";
import ProductInfo from "./ProductInfo";
import ProductSections from "./ProductSections";
import Button from "./Button";
import { getItemByCaricatureId } from "../../../Data/Caricature";
import { getItemByAcrylicsId } from "../../../Data/acrylics";

const CustomProductDetail = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(0);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [customText, setCustomText] = useState("");
  const [hoverImage, setHoverImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize product and initial selections
  useEffect(() => {
    let foundProduct = null;

    if (category === "caricature") {
      foundProduct = getItemByCaricatureId(id);
    } else if (category === "acrylics") {
      foundProduct = getItemByAcrylicsId(id);
    }

    if (foundProduct) {
      setProduct(foundProduct);
      const initialType = foundProduct.customizationOptions.types?.[0];
      setSelectedType(initialType);
      setSelectedSize(initialType?.sizes?.[0] || null);
    } else {
      navigate("/");
    }
  }, [category, id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Add product details
      formData.append('productId', id);
      formData.append('productCategory', category);
      formData.append('productName', product.name);
      
      // Add selected options
      if (selectedType) {
        formData.append('selectedType', selectedType.id);
        formData.append('selectedTypeName', selectedType.name);
      }
      
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

      // Log form data only when submitting
      console.log('Submitting Form Data:');
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: `, value);
      }

      // Here you would typically submit the form data to your backend
      // await submitFormData(formData);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!product) {
    return (
      <div className="container mx-auto p-4 text-center">
        Loading...
      </div>
    );
  }

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

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
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

          <fieldset>
            <ProductOptions
              product={product}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              setMainImage={setMainImage}
              setHoverImage={setHoverImage}
            />
          </fieldset>

          <fieldset>
            <PhotoUploader
              product={product}
              uploadedImages={uploadedImages}
              setUploadedImages={setUploadedImages}
            />
          </fieldset>

          {product.customizationOptions.allowText && (
            <fieldset className="mt-6">
              <label htmlFor="customText" className="font-semibold mb-2 block">
                ADD CUSTOM TEXT (Optional)
              </label>
              <textarea
                id="customText"
                name="customText"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder={product.customizationOptions.textPlaceholder}
                className="w-full border p-2 rounded-md"
                rows={2}
                maxLength={product.customizationOptions.maxTextLength}
              />
            </fieldset>
          )}

          <Button
            type="submit"
            disabled={uploadedImages.length === 0 || isSubmitting}
            className="w-full mt-6"
          >
            {uploadedImages.length === 0 ? "UPLOAD PHOTOS TO CONTINUE" : 
             isSubmitting ? "ADDING TO CART..." : "ADD TO CART"}
          </Button>

          <ProductSections sections={product.sections} />
        </div>
      </form>
    </div>
  );
};

export default CustomProductDetail;