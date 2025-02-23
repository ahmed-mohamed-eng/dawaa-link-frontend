import axios from "axios";
import useSWR from "swr";

import BASE_URL from "@/constants/BaseURL";
import TokenName from "@/constants/TokenName";
import getCookie from "@/utils/auth/getCookie";

type ProductData = {
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
  total_price_cart: string;
};

type SuccessResponse = {
  status: string | boolean;
  message: string;
  data: {
    data: Array<ProductData>;
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
