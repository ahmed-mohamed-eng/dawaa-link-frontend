import React from "react";
import axios from "axios";
import Fuse from "fuse.js";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import HeroContent from "@/components/products/HeroContent";
import ProductsResults from "@/components/products/ProductsResults";
import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";

import BASE_URL from "@/constants/BaseURL";
import ISingleProduct from "@/types/products/single-product.interface";

type ProductsResponse = {
  data: {
    data: ISingleProduct[];
  };
  message: string;
  status: boolean;
};

type PageProps = {
  params: Promise<{
    locale: string;
  }>;

  searchParams: Promise<{
    q?: string;
    location?: string;
  }>;
};

const productsFetcher = (url: string) => axios.get<ProductsResponse>(url);

async function fetchProducts(query?: string) {
  const url = `${BASE_URL}/client/products`;

  try {
    const res = await productsFetcher(url);

    const products = res?.data.data.data || [];

    if (!query) {
      return products;
    }

    const fuse = new Fuse(products, {
      keys: ["name", "description"],
      threshold: 0.5,
      includeScore: true,
    });

    const results = fuse.search(query);

    results.sort((a, b) => {
      return (b?.score || 0) - (a?.score || 0);
    });

    return results.map((result) => result.item);
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const products = await fetchProducts(q);

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
