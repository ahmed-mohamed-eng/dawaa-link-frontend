import ISingleProduct from "./single-product.interface";

export default interface ICategory {
  id: number;
  status: string;
  slug: string;
  photo: string;
  created_at: string;
  name: string;
  description: string;
  products?: ISingleProduct[];
  meta_title?: null | string;
  meta_description?: null | string;
  meta_keywords?: null | string;
}
