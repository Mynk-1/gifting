import React, { useState, useEffect } from "react";
import { Menu, X, User, Search, Heart, ShoppingBag } from "lucide-react";
import { Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BagSlider from "../CheckoutPages/cartItemSlider";
import WishlistSlider from "../CheckoutPages/wishlistSlider"; // Make sure to update the import path
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [showDelayedContent, setShowDelayedContent] = useState(false);
  
  
  const cartItems = useSelector((state) => state.cartItems);
  const wishlist = useSelector((state) => state.wishlistItems);
  
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const [wishlistQuantity, setWishlistQuantity] = useState(0);
  
  useEffect(() => {
    setCartItemQuantity(cartItems.length);
  }, [cartItems]); // Runs only when cartItems change
  
  useEffect(() => {
    setWishlistQuantity(wishlist.length);
  }, [wishlist]); // Runs only when wishlist changes
  
  useEffect(() => {
    if (isDrawerOpen) {
      const timer = setTimeout(() => setShowDelayedContent(true), 300);
      return () => clearTimeout(timer);
    } else {
      setShowDelayedContent(false);
    }
    
  }, [isDrawerOpen]);
  
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  
  const handleLogin = () => {
    navigate("/login");
    setIsDrawerOpen(false);
  };
  
  const handleHome = () => {
    navigate("/");
    setIsDrawerOpen(false);
  };
  
  const navItems = [
    "NEW ARRIVALS",
    "BEST SELLING",
    "SNITCH LUXE",
    "SNITCH PLUS",
    { name: "SHOP", hasSubmenu: true },
    "TRACK ORDER",
    "PLACE A RETURN/EXCHANGE REQUEST",
    "CUSTOMER SUPPORT",
    "VISIT STORE",
  ];

  const socialIcons = [
    { name: "Instagram", Icon: Instagram },
    { name: "Facebook", Icon: Facebook },
    { name: "YouTube", Icon: Youtube },
    { name: "Twitter", Icon: Twitter },
    { name: "Pinterest", Icon: Heart },
    { name: "LinkedIn", Icon: Linkedin },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b">
        <button onClick={toggleDrawer} className="text-gray-600">
          <Menu size={24} />
        </button>
        <div className="text-center flex-grow" onClick={handleHome}>
          <button className="text-2xl font-bold">SNITCH</button>
        </div>
        <div className="flex space-x-4">
          <button onClick={handleLogin} className="text-gray-600">
            <User size={24} />
          </button>
          <Search size={24} className="text-gray-600 max-[700px]:hidden" />
          <button 
            onClick={() => setIsWishlistOpen(true)} 
            className="text-gray-600 max-[700px]:hidden relative"
          >
            <Heart size={24} />
            <div className="flex absolute text-sm bottom-3 left-4 font-semibold bg-gray-600 w-4 h-4 items-center justify-center text-white rounded-full " >{wishlistQuantity}</div>
          </button>
          <button
            onClick={() => setIsBagOpen(true)}
            className="text-gray-600 relative"
          >
            <ShoppingBag size={24} />
            <div className="flex absolute text-sm bottom-3 left-3 font-semibold bg-gray-600 w-4 h-4 items-center justify-center text-white rounded-full " >{cartItemQuantity}</div>
          </button>
        </div>
      </header>

      {/* Drawer Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-slate-400 bg-opacity-50 z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-[90%] sm:w-[70%] md:w-[50%] max-w-[400px] bg-white shadow-lg transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 overflow-y-auto flex flex-col`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <button
            onClick={handleLogin}
            className="flex items-center space-x-2 text-gray-600"
          >
            <User size={24} />
            <span className="text-sm font-semibold">LOG IN</span>
          </button>
          <button onClick={toggleDrawer} className="text-gray-600">
            <X size={24} />
          </button>
        </div>

        <nav className="mt-4 flex-grow font-semibold px-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`py-2 border-b transition-all duration-300 ease-in-out ${
                showDelayedContent ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {typeof item === "string" ? (
                <a href="/" className="block text-sm hover:bg-gray-100 p-2 rounded">
                  {item}
                </a>
              ) : (
                <div className="flex justify-between items-center hover:bg-gray-100 p-2 rounded">
                  <a href="/" className="block text-sm">
                    {item.name}
                  </a>
                  {item.hasSubmenu && <span>▼</span>}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="p-4 border-t">
          <div className="grid grid-cols-3 gap-4">
            {socialIcons.map(({ name, Icon }, index) => (
              <a
                key={index}
                href="/"
                className={`flex justify-center items-center h-10 bg-gray-100 hover:bg-gray-200 rounded transition-all duration-300 ease-in-out ${
                  showDelayedContent ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: `${(navItems.length + index) * 50}ms` }}
              >
                <Icon size={20} className="text-gray-600" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bag Slider */}
      <BagSlider isOpen={isBagOpen} setToggle={setIsBagOpen} quantity={setCartItemQuantity}/>

      {/* Wishlist Slider */}
      <WishlistSlider isOpen={isWishlistOpen} setToggle={setIsWishlistOpen} />

      {/* Overlay for bag and wishlist */}
      {(isBagOpen || isWishlistOpen) && (
        <div
          className="fixed inset-0 bg-slate-400 bg-opacity-50 z-40"
          onClick={() => {
            setIsBagOpen(false);
            setIsWishlistOpen(false);
          }}
        ></div>
      )}
    </div>
  );
};

export default NavBar;