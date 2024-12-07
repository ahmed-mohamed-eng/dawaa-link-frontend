import React from "react";
import axios from "axios";
import { NextPage } from "next";
import { v4 as uuid } from "uuid";

import BASE_URL from "@/constants/BaseURL";
import Header from "@/components/common/medium/header";
import Footer from "@/components/common/complex/footer";
import ActionHeader from "@/components/home/action-header";
import ICategory from "@/types/products/Category.interface";
import NavigationHeader from "@/components/home/navigation-header";
import SingleProductDisplay from "@/components/common/complex/single-product-display";

type Props = {
  params: Promise<{ id: string }>;
};

type ResponseResult = {
  data: ICategory;
  message: string;
  status: boolean;
};

const categoryProductsURL = (id: number | string) => {
  return `${BASE_URL}/client/categories/${id}`;
};

const CategoryPage: NextPage<Props> = async ({ params }) => {
  const id = (await params).id;

  const { data } = await axios.get<ResponseResult>(categoryProductsURL(id));

  const products = data?.data?.products || [];

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="w-full">
        <Header />
        <ActionHeader />
        <NavigationHeader />
      </div>

      <main className="w-full p-8 grid grid-cols-3 gap-4">
        {products.map((p) => {
          return (
            <SingleProductDisplay
              key={uuid()}
              {...p}
              url={`${BASE_URL}/client/product/${id}`}
            />
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
