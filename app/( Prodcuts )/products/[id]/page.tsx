import React from "react";
import axios from "axios";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
// import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";
import HeroContent from "@/components/products/single-product-page/HeroContent";
import ProductContent from "@/components/products/single-product-page/ProductContent";
import ISingleProduct from "@/types/products/single-product.interface";
import BASE_URL from "@/constants/BaseURL";

type ProductsResponse = {
  data: ISingleProduct;
  message: string;
  status: boolean;
};

const productFetcher = (url: string) => axios.get<ProductsResponse>(url);

const getProduct = async (id: string) => {
  const url = `${BASE_URL}/client/product/${id}`;

  try {
    const result = await productFetcher(url);

    return result.data?.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const product = await getProduct(id);

  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">
        {product && <HeroContent product={product} />}
        {product && <ProductContent product={product} />}
        {/* <PlatformFeatureIcons /> */}
      </main>

      <Footer />
    </div>
  );
}
