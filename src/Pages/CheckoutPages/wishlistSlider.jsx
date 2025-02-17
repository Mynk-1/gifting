import React, { useState, useEffect } from "react";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../Store/Slices/cartitemSlice";
import { removeWishlistItem } from "../../Store/Slices/wishlistSlice";

const WishlistSlider = ({ isOpen, setToggle }) => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setShowContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isOpen]);

  const wishlistItems = useSelector((state) => state.wishlistItems);
  const dispatch=useDispatch()

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black transition-opacity duration-300 ease-in-out"
          style={{
            opacity: isOpen ? 0.5 : 0,
            visibility: isOpen ? "visible" : "hidden",
          }}
          onClick={() => setToggle(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 w-[90%] max-w-[480px] bg-white z-50 transform transition-transform duration-300 ease-in-out font-titillium ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div
            className={`px-4 sm:px-6 py-4 flex justify-between items-center transform transition-transform duration-500 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <h2 className="text-xl tracking-wide">WISHLIST</h2>
            <button
              onClick={() => setToggle(false)}
              className="text-black hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto px-4 sm:px-6">
            {wishlistItems.map((item, index) => (
              <div
                key={index}
                className={`flex gap-3 sm:gap-4 mb-6 transform transition-all duration-500 delay-100 ease-out ${
                  showContent
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 sm:w-24 h-28 sm:h-32 object-cover"
                />
                <div className="flex-grow">
                  <h3 className="text-sm sm:text-base mb-1">{item.name}</h3>
                  {/* <p className="text-xs sm:text-sm text-gray-600 mb-1">
                    Color: {item.color}
                  </p> */}
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">
                    Size: {item.size}
                  </p>
                  <div className="flex items-end justify-between ">
                    <span className="font-medium text-sm sm:text-base">
                      INR {item.price}
                    </span>
                    <div className="flex gap-2">
                      <button 
                        className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                        onClick={() => (dispatch(addCartItem({id:item.id,name:item.name,image:item.image,price:item.price,quantity:1,size:item.size})))}
                      >
                        <ShoppingCart size={20} />
                      </button>
                      <button 
                        className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                        onClick={() => dispatch(removeWishlistItem(item.id))}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`px-4 sm:px-6 py-4 border-t transform transition-all duration-500 delay-200 ease-out ${
              showContent
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
            <p className="text-sm text-gray-600 mb-4 text-center">
              {wishlistItems.length === 0 
                ? "Your wishlist is empty"
                : `${wishlistItems.length} items in your wishlist`}
            </p>
            <button 
              className="w-full bg-black text-white py-3 tracking-wide hover:bg-gray-900 transition-colors"
              onClick={() => {/* Add move all to cart action */}}
            >
              MOVE ALL TO BAG
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistSlider;