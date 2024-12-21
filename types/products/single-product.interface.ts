export default interface ISingleProduct {
  name: string;

  id?: number;

  category?: {
    id: number;
    name: string;
  };

  status?: string;
  price: string;
  final_price: string;
  quantity: string;
  description: string;
  
  gallery?: string[];
  featured?: string;
  created_at?: string;
  slug?: string;
  serial_number?: string;
  rating?: {
    value: number;
    count: number;
  };

  discount?: string | number;

  isNew?: boolean;
  isSold?: boolean;

  photo?: string;
  meta_title?: null | string;
  meta_description?: null | string;
  meta_keywords?: null | string;
}
