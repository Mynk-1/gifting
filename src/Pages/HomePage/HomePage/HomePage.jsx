import React from "react";
import { useLocation } from "react-router-dom";

import MainCrosel from "../HomePageCarousel/MainCarousel.jsx";
import ProductSlider from "../ProductSlider/ProductSlider";
import ProductCategory from "../ProductCategory/ProductCategory";
import Banner from "../Banner/Banner";
import {caricature} from "../../../Data/Caricature.js"
import {acrylics} from "../../../Data/acrylics.js"

const HomePage = () => {

  const location = useLocation();

 
  const isViewAllPage = location.pathname === "/view-all";
  return (
    <div className="p-4">
      {!isViewAllPage && <MainCrosel className="-z-10" />}

      <ProductSlider data={acrylics} category="acrylics"/>
      <ProductCategory />
      <ProductSlider data={caricature} category="caricature"/>
      <Banner/>
    </div>
  );
};

export default HomePage;
