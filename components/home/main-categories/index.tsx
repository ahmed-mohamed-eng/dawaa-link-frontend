import React from "react";
import Image from "next/image";

const MainCategories = () => {
  return (
    <div className="w-full flex items-center justify-center space-x-12">
      <SingleCatalog
        imageURI="/product.png"
        name="Speaker"
        productsNumber={20}
      />
      <SingleCatalog
        imageURI="/product.png"
        name="Speaker"
        productsNumber={20}
      />
      <SingleCatalog
        imageURI="/product.png"
        name="Speaker"
        productsNumber={20}
      />
    </div>
  );
};

type SingleCatalogProps = {
  imageURI: string;
  name: string;
  productsNumber?: number;
};

function SingleCatalog(props: SingleCatalogProps) {
  return (
    <div className="flex items-center justify-start space-x-8 p-6 border-2 border-primary rounded-3xl px-20 py-4">
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
    </div>
  );
}

export default MainCategories;
