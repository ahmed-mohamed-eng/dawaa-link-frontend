"use client";

import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import React, { useState } from "react";

import BASE_URL from "@/constants/BaseURL";
import getCookie from "@/utils/auth/getCookie";
import TokenName from "@/constants/TokenName";
import { useTranslations } from "next-intl";

type WishSuccessResponse = {
  data: {
    id: number;
    product: {
      id: number;
      sale: number;
      qty: null;
      name: string;
      description: string;
      photo: string;
    };
  };
  message: string;
  status: boolean;
};

const addItemToWishList = async (cartItem: { product_id: number }) => {
  const url = `${BASE_URL}/client/favourites`;

  const accessToken = getCookie(TokenName);

  if (!accessToken) {
    return "Please login before adding to wishlist.";
  }

  try {
    await axios.post<WishSuccessResponse>(url, cartItem, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return error?.message as string;
  }
};

export interface AddToWishListBtnProps {
  productId: string | number;
}

const AddToWishListBtn = (props: AddToWishListBtnProps) => {
  const [wished, setWished] = useState(false);

  const t = useTranslations("ProductContent");

  const onAddToWishList = async () => {
    if (!props.productId) {
      toast.error(
        "An infernal error occurs when adding please try again later."
      );

      return;
    }

    const item = {
      product_id:
        typeof props.productId !== "number"
          ? parseInt(props.productId)
          : props.productId,
    };

    const result = await addItemToWishList(item);

    if (typeof result === "string") {
      toast.error(result);
      return;
    }

    toast.success(t("addToWishListSuccess"));

    setWished(!wished);
  };

  return (
    <button
      data-product-id={props.productId}
      className="flex items-center justify-start gap-3 font-bold text-black capitalize"
      onClick={() => onAddToWishList}
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
        <span>{t("itemInWishList")}</span>
      ) : (
        <span>{t("addToWishList")}</span>
      )}
    </button>
  );
};

export default AddToWishListBtn;
