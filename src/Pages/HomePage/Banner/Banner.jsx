import React from "react";

const SnitchLuxeBanner = () => {
  return (
    <div className="relative w-full sm:h-[400px] md:h-[600px] lg:h-[700px] pt-3">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="https://www.snitch.co.in/cdn/shop/files/Web_SnitchLuxe_1920x1080_9911d750-804d-4631-b0e2-c94aec27fc4e_1400x.jpg?v=1726643100"
        />
        <img
          src="https://www.snitch.co.in/cdn/shop/files/Mobile_SnitchLuxe_MobileBanner_1080x1350_5e2210e0-f8da-47b6-a112-26092efa213f_400x.jpg?v=1726643122"
          alt="Snitch Luxe Collection"
          className="w-full h-full object-cover"
        />
      </picture>
     
    </div>
  );
};

export default SnitchLuxeBanner;
