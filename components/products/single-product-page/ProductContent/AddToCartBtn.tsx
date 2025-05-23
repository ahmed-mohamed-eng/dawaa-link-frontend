"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import BASE_URL from "@/constants/BaseURL";
import getCookie from "@/utils/auth/getCookie";
import TokenName from "@/constants/TokenName";
import CartItem from "@/types/products/CartItem.interface";
import ISingleProduct from "@/types/products/single-product.interface";
import { useTranslations } from "next-intl";

type SuccessResponse = {
  data: {
    id: number;
    user_id: number;
    vendor_id: number;
    product_carts: Array<{
      id: number;
      name: string;
      price_product: string;
      quantity_product: string;
      photo: string;
    }>;
    total_price_cart: number;
  };
  message: string;
  status: boolean;
};

const addItemToCart = async (cartItem: CartItem) => {
  const url = `${BASE_URL}/client/carts`;

  const accessToken = getCookie(TokenName);

  if (!accessToken) {
    return "Please login before adding to cart.";
  }

  try {
    await axios.post<SuccessResponse>(url, cartItem, {
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

export interface AddToCartBtnProps {
  toAddProduct: ISingleProduct;
  quantity?: number;
}

const AddToCartBtn = (props: AddToCartBtnProps) => {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("ProductContent");

  const onAddToCart = async () => {
    setLoading(true);

    if (!props.quantity || props.quantity <= 0) {
      toast.error(
        "An infernal error occurs when adding please try again later."
      );

      setLoading(false);
      return;
    }

    if (!props.toAddProduct.id) {
      toast.error(
        "An infernal error occurs when adding please try again later."
      );

      setLoading(false);
      return;
    }

    const productPrice = parseFloat(props.toAddProduct.final_price);

    if (!productPrice) {
      toast.error(
        "An infernal error occurs when adding please try again later."
      );

      setLoading(false);
      return;
    }

    const item: CartItem = {
      note: "",
      vendor_id: 1,
      product_id: [
        {
          id: props.toAddProduct.id,
          price_product: productPrice,
          quantity_product: props.quantity,
        },
      ],
    };

    const result = await addItemToCart(item);

    if (typeof result === "string") {
      toast.error(result);
      setLoading(false);
      return;
    }

    toast.success(`Product ${props.toAddProduct.name} added to your cart.`);
    setLoading(false);
  };

  return (
    <button
      data-product-id={props.toAddProduct.id}
      onClick={onAddToCart}
      className="border border-black py-4 px-2 text-black text-sm xl:text-xl font-bold col-span-2 xl:col-span-3 text-center"
      disabled={loading || undefined}
    >
      {loading ? t("addingToCart") : t("addToCartButton")}
    </button>
  );
};

export default AddToCartBtn;
