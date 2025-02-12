"use client";

import Link from "next/link";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import ISingleProduct from "@/types/products/single-product.interface";

import SingleProductDisplay from "../common/complex/single-product-display";
export interface CategorizedProductsProps {
  categories: {
    id: number;
    status: string;
    slug: string;
    photo: string;
    created_at: string;
    name: string;
    description: string;
    meta_title: string | null;
    meta_description: string | null;
    meta_keywords: string | null;
  }[];

  products?: ISingleProduct[];
}

const CategorizedProducts = (props: CategorizedProductsProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all-products");

  const onSelectCategory = (item: string) => {
    setSelectedCategory(item);
  };

  return (
    <div className="pb-10 xl:pb-40 w-full xl:px-20 flex flex-col items-center justify-start space-y-10 xl:space-y-20">
      {/* Category Action Box */}
      <div className="w-full flex flex-col items-center justify-start space-y-4 xl:space-y-14">
        {/* Header */}
        <h3 className="w-full font-bold text-3xl">Our popular categories</h3>
        {/* Select Actions */}
        <div className="w-full grid grid-cols-3 gap-x-4 gap-y-6 xl:flex xl:items-center xl:justify-center xl:space-x-8">
          <CategoryItem
            key={uuid()}
            currentItemName={selectedCategory}
            itemName="All Products"
            onSelect={onSelectCategory}
          />

          {props.categories.map((val) => {
            return (
              <CategoryItem
                key={uuid()}
                currentItemName={selectedCategory}
                itemName={val.name}
                onSelect={onSelectCategory}
              />
            );
          })}
        </div>
      </div>

      {/* Products Container */}
      <div className="w-full flex flex-col items-center justify-start space-y-12">
        {/* Products */}
        <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-x-4 gap-y-8">
          {props.products?.map((val) => {
            return (
              <SingleProductDisplay
                key={uuid()}
                description={val.description}
                final_price={val.final_price}
                name={val.name}
                price={val.price}
                quantity={val.quantity}
                id={val.id}
                photo={val.photo}
              />
            );
          })}
        </div>
        {/* More Button */}
        <Link
          href="/products"
          className="px-9 py-4 rounded-full bg-[#00A6FB] font-bold text-white"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default CategorizedProducts;

type CategoryItemProps = {
  currentItemName: string;
  itemName: string;
  onSelect: (item: string) => void;
};

function CategoryItem(props: CategoryItemProps) {
  const itemValue = props.itemName.toLowerCase().replace(" ", "-");

  const isSelected = props.currentItemName === itemValue;

  return (
    <button
      data-selected={isSelected || undefined}
      className="capitalize font-bold text-xs xl:text-base px-2 xl:px-7 py-1 xl:py-3 rounded-full border border-[#BDBDBD] data-[selected]:bg-[#3DB3E5] data-[selected]:border-0 data-[selected]:text-white"
      onClick={() => props.onSelect(itemValue)}
    >
      {props.itemName}
    </button>
  );
}
