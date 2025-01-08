"use client";

import Link from "next/link";

import SingleProductDisplay from "../common/complex/single-product-display";
import { useState } from "react";

const CategorizedProducts = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("all-products");

  const onSelectCategory = (item: string) => {
    setSelectedCategory(item);
  };

  return (
    <div className="pb-10 lg:pb-40 w-full lg:px-20 flex flex-col items-center justify-start space-y-10 lg:space-y-20">
      {/* Category Action Box */}
      <div className="w-full flex flex-col items-center justify-start space-y-4 lg:space-y-14">
        {/* Header */}
        <h3 className="w-full font-bold text-3xl">Our popular categories</h3>
        {/* Select Actions */}
        <div className="w-full grid grid-cols-3 gap-x-4 gap-y-6 lg:flex lg:items-center lg:justify-center lg:space-x-8">
          <CategoryItem
            currentItemName={selectedCategory}
            itemName="All Products"
            onSelect={onSelectCategory}
          />

          <CategoryItem
            currentItemName={selectedCategory}
            itemName="Analgesics"
            onSelect={onSelectCategory}
          />

          <CategoryItem
            currentItemName={selectedCategory}
            itemName="Controlled drugs"
            onSelect={onSelectCategory}
          />

          <CategoryItem
            currentItemName={selectedCategory}
            itemName="Inhalants"
            onSelect={onSelectCategory}
          />

          <CategoryItem
            currentItemName={selectedCategory}
            itemName="Stimulant"
            onSelect={onSelectCategory}
          />
        </div>
      </div>

      {/* Products Container */}
      <div className="w-full flex flex-col items-center justify-start space-y-12">
        {/* Products */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-x-4 gap-y-8">
          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />

          <SingleProductDisplay
            description=""
            final_price="90 EGP"
            name="Abdonel 200ml"
            price="100 EGP"
            quantity="200"
            id={1}
          />
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
      className="font-bold text-xs lg:text-base px-2 lg:px-7 py-1 lg:py-3 rounded-full border border-[#BDBDBD] data-[selected]:bg-[#3DB3E5] data-[selected]:border-0 data-[selected]:text-white"
      onClick={() => props.onSelect(itemValue)}
    >
      {props.itemName}
    </button>
  );
}
