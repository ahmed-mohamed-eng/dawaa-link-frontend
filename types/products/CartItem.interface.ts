type Product = {
  id: number;
  quantity_product: number;
  price_product: number;
};

export default interface CartItem {
  vendor_id: number;
  product_id: Array<Product>;
  note: string;
}
