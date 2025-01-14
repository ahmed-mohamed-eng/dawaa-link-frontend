import useSWR from "swr";
import axios from "axios";

import BASE_URL from "@/constants/BaseURL";
import ISingleProduct from "@/types/products/single-product.interface";

type ProductsResponse = {
  data: {
    data: ISingleProduct[];
  };
  message: string;
  status: boolean;
};

const productsFetcher = (url: string) => axios.get<ProductsResponse>(url);

export default function useFetchSuggestions(productName?: string) {
  const product = productName ? `filter[search]=${productName}` : "";

  const { data, isLoading, error } = useSWR(
    `${BASE_URL}/client/search?${product}`,
    productsFetcher
  );

  const products = (data?.data.data.data || []).map((p) => {
    return { id: p.id, name: p.name };
  });

  return { data: products, isLoading, error };
}
