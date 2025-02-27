type OfferedProduct = {
  id: number;
  product: {
    id: number;
    name: string;
  };
  position: string;
  from: string;
  to: string;
  created_at: string;
};

export default OfferedProduct;
