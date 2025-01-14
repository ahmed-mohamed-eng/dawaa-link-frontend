import useSWR from "swr";
import axios from "axios";

import BASE_URL from "@/constants/BaseURL";
import ISingleProduct from "@/types/products/single-product.interface";

type ProductsResponse = {
  data: ISingleProduct;
  message: string;
  status: boolean;
};

const productsFetcher = (url: string) => axios.get<ProductsResponse>(url);

export default function useFetchProducts(id: string | number) {
  const { data, isLoading, error } = useSWR(
    `${BASE_URL}/client/product/${id}`,
    productsFetcher
  );

  const product = data?.data.data;

  return { data: product, isLoading, error };
}
