import axios from "axios";
import useSWR from "swr";

import BASE_URL from "@/constants/BaseURL";
import TokenName from "@/constants/TokenName";
import getCookie from "@/utils/auth/getCookie";

import CartProductData from "@/types/cart/CartProductData.type";

type SuccessResponse = {
  status: string | boolean;
  message: string;
  data: {
    data: Array<CartProductData>;
  };
};

const cartItemsFetcher = (url: string) => {
  const accessToken = getCookie(TokenName);

  if (!accessToken) {
    return Promise.reject();
  }

  const response = axios.get<SuccessResponse>(url, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response;
};

export default function useFetchCartItems() {
  const url = `${BASE_URL}/client/carts`;

  const { data, error } = useSWR(url, cartItemsFetcher, {
    revalidateOnMount: true,
  });

  if (error) {
    return [];
  }

  return data?.data.data.data || [];
}
