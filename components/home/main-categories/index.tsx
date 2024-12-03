"use client";

import React from "react";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import useFetchCategories from "@/data-fetch-hooks/useFetchCategories";
import Link from "next/link";

const MainCategories = () => {
  const { data } = useFetchCategories();

  return (
    <div className="w-full flex items-center justify-center space-x-12">
      {data?.map((v) => {
        return (
          <SingleCatalog
            key={uuid()}
            linkURL={`/categories/${v.id}`}
            imageURI={v.photo || "/product.png"}
            name={v.name}
          />
        );
      })}
    </div>
  );
};

type SingleCatalogProps = {
  imageURI: string;
  name: string;
  linkURL: string;
  productsNumber?: number;
};

function SingleCatalog(props: SingleCatalogProps) {
  return (
    <Link
      href={props.linkURL}
      className="flex items-center justify-start space-x-8 p-6 border-2 border-primary rounded-3xl px-20 py-4"
    >
      <div className="w-36 h-36 flex items-center justify-center relative">
        <Image
          alt="Single Category"
          src={props.imageURI}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col space-y-4 text-primary font-bold">
        <p>{props.name}</p>
        {props.productsNumber ? <p>( {props.productsNumber} items)</p> : null}
      </div>
    </Link>
  );
}

export default MainCategories;
