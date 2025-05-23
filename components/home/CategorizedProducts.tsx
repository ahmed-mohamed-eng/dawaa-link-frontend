"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import { useMemo, useState } from "react";
import { v4 as uuid } from "uuid";

import ISingleProduct from "@/types/products/single-product.interface";

import ProductCategories from "@/types/categories.enum";
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
  const t = useTranslations("HomePage.CategorizedProducts");

  const [viewMore, setViewMore] = useState((props.products?.length || 0) > 6);

  const [selectedCategory, setSelectedCategory] = useState<ProductCategories>(
    ProductCategories.ALL
  );

  const onSelectCategory = (item: string) => {
    console.log({ item });

    setSelectedCategory(item as ProductCategories);
  };

  const categorizedProducts = useMemo(() => {
    if (!props.products) {
      return [];
    }

    if (selectedCategory === ProductCategories.ALL) {
      return props.products;
    }

    return props.products.filter((v) => v.category?.name === selectedCategory);
  }, [props.products, selectedCategory]);

  const isExpandableLength = (props.products?.length || 0) > 6;

  return (
    <div className="pb-10 xl:pb-40 w-full xl:px-20 flex flex-col items-center justify-start space-y-10 xl:space-y-20">
      {/* Category Action Box */}
      <div className="w-full flex flex-col items-center justify-start space-y-4 xl:space-y-14">
        {/* Header */}
        <h3 className="w-full font-bold text-3xl">{t("title")}</h3>
        {/* Select Actions */}
        <div className="w-full grid grid-cols-3 gap-x-4 gap-y-6 xl:flex xl:items-center xl:justify-center xl:space-x-8">
          <CategoryItem
            value={ProductCategories.ALL}
            key={uuid()}
            currentValue={selectedCategory}
            itemName={t("allProductsOption")}
            onSelect={onSelectCategory}
          />

          {props.categories.map((val) => {
            return (
              <CategoryItem
                key={uuid()}
                currentValue={selectedCategory}
                itemName={val.name}
                value={val.name as ProductCategories}
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
          {categorizedProducts
            ?.slice(0, !viewMore ? 6 : undefined)
            ?.map((val) => {
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
        {isExpandableLength ? (
          <Link
            href="/products"
            className="px-9 py-4 rounded-full bg-[#00A6FB] font-bold text-white"
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? t("viewLess") : t("viewAll")}
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default CategorizedProducts;

type CategoryItemProps = {
  itemName: string;
  value: ProductCategories;
  currentValue: ProductCategories;
  onSelect: (item: string) => void;
};

function CategoryItem(props: CategoryItemProps) {
  const itemValue = props.value;
  const isSelected = props.currentValue === itemValue;

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
