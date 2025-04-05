import React from "react";
import axios from "axios";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import HeroContent from "@/components/products/HeroContent";
import ProductsResults from "@/components/products/ProductsResults";
import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";

import ISingleProduct from "@/types/products/single-product.interface";
import BASE_URL from "@/constants/BaseURL";

type ProductsResponse = {
  data: {
    data: ISingleProduct[];
  };
  message: string;
  status: boolean;
};

const productsFetcher = (url: string) => axios.get<ProductsResponse>(url);

async function fetchProducts() {
  const url = `${BASE_URL}/client/products`;

  try {
    const res = await productsFetcher(url);

    const products = res?.data.data.data || [];

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function SearchPage() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <ProductsResults products={products} />
        <PlatformFeatureIcons />
      </main>

      <Footer />
    </div>
  );
}
