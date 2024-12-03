export default interface ISingleProduct {
  imageURL: string;
  name: string;
  url: string;
  rating?: {
    value: number;
    count: number;
  };

  id: number;
  category: {
    id: number;
    name: string;
  };

  status: string;
  slug: string;
  price: string;
  discount?: string | number;
  final_price: string;
  quantity: string;
  serial_number: string;
  featured: string;
  photo: string;
  gallery: string[];
  created_at: string;
  description: string;
  meta_title: null | string;
  meta_description: null | string;
  meta_keywords: null | string;
}
