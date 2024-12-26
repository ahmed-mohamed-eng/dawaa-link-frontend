import React from "react";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";
import HeroContent from "@/components/products/HeroContent";
import ProductsResults from "@/components/products/ProductsResults";
import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <ProductsResults />
        <PlatformFeatureIcons />
      </main>

      <Footer />
    </div>
  );
}
