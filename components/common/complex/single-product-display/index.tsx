"use client";

import axios from "axios";
import Image from "next/image";
import { useMemo, useState } from "react";
import { isURL } from "validator";
import toast from "react-hot-toast";
import { useLocale } from "next-intl";

import { Link, useRouter } from "@/i18n/routing";

import CartItem from "@/types/products/CartItem.interface";
import imgPlaceholderURL from "@/constants/imgPlaceholderURL";
import ISingleProduct from "@/types/products/single-product.interface";
import getCookie from "@/utils/auth/getCookie";
import BASE_URL from "@/constants/BaseURL";
import TokenName from "@/constants/TokenName";

type CartSuccessResponse = {
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
    await axios.post<CartSuccessResponse>(url, cartItem, {
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

export interface SingleProductDisplayProps extends ISingleProduct {
  smallImage?: boolean;
  notShowPrices?: boolean;
}

const SingleProductDisplay = (props: SingleProductDisplayProps) => {
  const locale = useLocale();

  const isArabic = locale === "ar";

  const imgSrc = useMemo(() => {
    const imgFullUrl = `https://${props.photo}`;
    if (!props.photo) {
      return imgPlaceholderURL({ text: "D" });
    }

    const isValidImg = isURL(imgFullUrl, {
      require_host: true,
      require_protocol: true,
    });

    if (!isValidImg) {
      return imgPlaceholderURL({ text: "D" });
    }

    return imgFullUrl;
  }, [props.photo]);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onAddToCart = async () => {
    setLoading(true);

    if (!props.quantity || parseFloat(props.quantity) <= 0) {
      toast.error(
        "An infernal error occurs when adding please try again later."
      );

      setLoading(false);
      return;
    }

    if (!props.id) {
      toast.error(
        "An infernal error occurs when adding please try again later."
      );

      setLoading(false);
      return;
    }

    const productPrice = parseFloat(props.final_price);

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
          id: props.id,
          price_product: productPrice,
          quantity_product: parseFloat(props.quantity),
        },
      ],
    };

    const result = await toast.promise(addItemToCart(item), {
      loading: "Adding to cart...",
      success: (data) => {
        if (data) {
          return "Product added to cart.";
        }

        return "An infernal error occurs when adding please try again later.";
      },
    });

    if (!result) {
      toast.error(result);
      setLoading(false);
      return;
    }

    toast.success(`Product ${props.name} added to your cart.`);
    setLoading(false);
  };

  const onOpenProduct = () => {
    if (!props.id) {
      return;
    }

    router.push(`/products/${props.id}`);
  };

  const onAddToWishList = async () => {
    if (!props.id) {
      toast.error(
        "An infernal error occurs when adding please try again later."
      );

      return;
    }

    const item = {
      product_id: props.id,
    };

    const result = await toast.promise(addItemToWishList(item), {
      loading: "Adding to wishlist...",
      success: (data) => {
        if (data) {
          return "Product added to wishlist.";
        }

        return "An infernal error occurs when adding please try again later.";
      },
    });

    if (!result) {
      toast.error(result);
      return;
    }
  };

  return (
    <div className="relative w-full flex flex-col items-start justify-start space-y-8">
      {/* Product Image Container */}
      {props.smallImage ? (
        <div className="relative w-full h-60 border rounded-xl overflow-hidden group">
          <Image
            className="w-full h-full z-10"
            alt={props.name || "Product A"}
            src={imgSrc}
            fill
            style={{ objectFit: "cover" }}
          />

          {/* Sold Indicator */}
          {props.isSold ? (
            <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
              <span className="font-bold text-white">Sold</span>
            </div>
          ) : null}

          {/* New Indicator */}
          {props.isNew && !props.isSold && !props.discount ? (
            <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
              <span className="font-bold text-white">New</span>
            </div>
          ) : null}

          {/* Discount Indicator */}
          {props.discount && !props.isSold ? (
            <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
              <span className="font-bold text-white">{props.discount}%</span>
              <span className="font-bold text-white">Off</span>
            </div>
          ) : null}

          {/* Main Actions Container */}
          <div className="transition-all duration-200 ease-in absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
            {/* Add to Cart Button */}
            <button
              onClick={onAddToCart}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap"
              disabled={loading}
            >
              Add To Cart
            </button>

            {/* Other Actions Button */}
            <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
              {/* Wishlist */}
              <button
                onClick={onAddToWishList}
                className="bg-white border w-8 h-8 flex items-center justify-center rounded-full"
              >
                <Image
                  alt="Add to Wishlist"
                  src="/heart.svg"
                  width={15}
                  height={15}
                />
              </button>

              {/* Search */}
              <button className="bg-white border w-8 h-8 flex items-center justify-center rounded-full">
                <Image
                  alt="Add to Wishlist"
                  src="/search.svg"
                  width={15}
                  height={15}
                />
              </button>

              {/* Cart */}
              <button
                onClick={onAddToCart}
                className="bg-white border w-8 h-8 flex items-center justify-center rounded-full"
                disabled={loading}
              >
                <Image
                  alt="Add to Wishlist"
                  src="/cart.svg"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-96 border rounded-xl overflow-hidden group">
          <Image
            className="w-full h-full z-10"
            alt={props.name || "Product A"}
            src={imgSrc}
            fill
            style={{ objectFit: "cover" }}
          />

          {/* Sold Indicator */}
          {props.isSold ? (
            <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
              <span className="font-bold text-white">Sold</span>
            </div>
          ) : null}

          {/* New Indicator */}
          {props.isNew && !props.isSold && !props.discount ? (
            <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-14 h-14 flex items-center justify-center rounded-full absolute top-5 right-5 z-20">
              <span className="font-bold text-white">New</span>
            </div>
          ) : null}

          {/* Discount Indicator */}
          {props.discount && !props.isSold ? (
            <div className="transition-all duration-75 ease-in opacity-100 group-hover:opacity-0 bg-[#00A6FB] w-16 h-16 flex flex-col items-center justify-center rounded-full absolute top-5 right-5 z-20">
              <span className="font-bold text-white">{props.discount}%</span>
              <span className="font-bold text-white">Off</span>
            </div>
          ) : null}

          {/* Main Actions Container */}
          <div className="transition-all duration-200 ease-in absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-full h-full z-30 bg-gray-500 bg-opacity-10">
            {/* Add to Cart Button */}
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-3 rounded-full bg-[#00A6FB] font-bold text-white whitespace-nowrap">
              Add To Cart
            </button>

            {/* Other Actions Button */}
            <div className="absolute top-3 right-3 flex flex-col items-start justify-start space-y-2">
              {/* Wishlist */}
              <button
                onClick={onAddToWishList}
                className="bg-white border w-8 h-8 flex items-center justify-center rounded-full"
              >
                <Image
                  alt="Add to Wishlist"
                  src="/heart.svg"
                  width={15}
                  height={15}
                />
              </button>

              {/* Search */}
              <button
                onClick={onOpenProduct}
                className="bg-white border w-8 h-8 flex items-center justify-center rounded-full"
              >
                <Image
                  alt="Add to Wishlist"
                  src="/search.svg"
                  width={15}
                  height={15}
                />
              </button>

              {/* Cart */}
              <button
                onClick={onAddToCart}
                className="bg-white border w-8 h-8 flex items-center justify-center rounded-full"
              >
                <Image
                  alt="Add to Wishlist"
                  src="/cart.svg"
                  width={15}
                  height={15}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Info */}
      <div className="w-full flex flex-col items-start justify-start">
        {/* Product Name */}
        {props.id ? (
          <Link
            href={`/products/${props.id}`}
            className="mt-4 font-bold text-lg"
          >
            {isArabic && props?.slug ? props.slug : props.name}
          </Link>
        ) : (
          <p className="mt-4 font-bold text-lg">{props.name}</p>
        )}
        {/* Price */}
        {!props.notShowPrices ? (
          <div className="mt-4 w-full flex flex-col items-start justify-start font-bold">
            {/* New Price */}
            <span className="text-xl">
              {props.final_price} <span className="symbol">&#xea;</span>
            </span>

            {/* Previous Price */}
            <span className="text-[#8F8F8F] line-through">
              {props.price} <span className="symbol">&#xea;</span>
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SingleProductDisplay;
