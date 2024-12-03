import useSWR from "swr";
import axios from "axios";

import BASE_URL from "@/constants/BaseURL";
import ICategory from "@/types/products/Category.interface";

type CategoriesResponse = {
  data: {
    data: ICategory[];
  };
  message: string;
  status: boolean;
};

const fetcher = (url: string) => axios.get<CategoriesResponse>(url);

export default function useFetchCategories() {
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/client/categories`,
    fetcher
  );

  const result = data?.data.data.data || [];

  return {
    data: result,
    error,
    isLoading,
  };
}
