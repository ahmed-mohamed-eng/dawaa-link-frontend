"use client";

import React, { useState } from "react";

import Image from "next/image";

const AddToWishListBtn = () => {
  const [wished, setWished] = useState(false);

  return (
    <button
      className="flex items-center justify-start space-x-4 font-bold text-black capitalize"
      onClick={() => setWished(!wished)}
    >
      {wished ? (
        <Image
          alt="heart"
          src="/icons/heart-orange-filled.svg"
          width={25}
          height={25}
        />
      ) : (
        <Image
          alt="heart"
          src="/icons/heart-orange.svg"
          width={25}
          height={25}
        />
      )}

      {wished ? (
        <span>Item in the wish list</span>
      ) : (
        <span>Add To Wishlist</span>
      )}
    </button>
  );
};

export default AddToWishListBtn;
