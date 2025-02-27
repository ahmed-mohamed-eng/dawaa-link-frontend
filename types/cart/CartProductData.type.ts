export type CartInnerProduct = {
  id: number;
  name: string;
  price_product: string;
  quantity_product: string;
  photo: string;
};

type CartProductData = {
  id: number;
  user_id: number;
  vendor_id: number;
  product_carts: Array<CartInnerProduct>;
  total_price_cart: string;
};

export default CartProductData;
