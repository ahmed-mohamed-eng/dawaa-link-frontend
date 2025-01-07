import React from "react";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";
import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";
import HeroContent from "@/components/products/single-product-page/HeroContent";
import ProductContent from "@/components/products/single-product-page/ProductContent";

const ProductPage = () => {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <ProductContent />
        <PlatformFeatureIcons />
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
