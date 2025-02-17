import React from "react";
import { Upload, X } from "lucide-react";

const PhotoUploader = ({ product, uploadedImages, setUploadedImages }) => {
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      const remainingSlots = product.maxUploads - uploadedImages.length;
      const newImages = files.slice(0, remainingSlots).map(file => URL.createObjectURL(file));
      setUploadedImages(prev => [...prev, ...newImages].slice(0, product.maxUploads));
    }
  };

  const removeUploadedImage = (index) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-6 border-2 border-dashed border-gray-300 p-4 rounded-lg">
      <p className="font-semibold mb-2">UPLOAD YOUR PHOTOS (Max {product.maxUploads})</p>
      <div className="flex flex-col items-center">
        {uploadedImages.length < product.maxUploads && (
          <>
            <Upload className="w-8 h-8 text-gray-400 mb-2" />
            <label className="w-full">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="bg-black text-white py-2 text-center cursor-pointer">
                Choose Photos
              </div>
            </label>
            <p className="text-sm text-gray-500 mt-2">
              {product.maxUploads - uploadedImages.length} slots remaining
            </p>
          </>
        )}
        
        {uploadedImages.length > 0 && (
          <div className="w-full mt-4">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {uploadedImages.map((img, index) => (
                <div key={index} className="relative aspect-square w-full md:w-20">
                  <img
                    src={img}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <button
                    onClick={() => removeUploadedImage(index)}
                    className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoUploader;