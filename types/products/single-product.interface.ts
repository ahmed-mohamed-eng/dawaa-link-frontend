export default interface ISingleProduct {
  imageURL: string;
  name: string;
  url: string;
  price: { value: number; currency: string };
  rating: {
    value: number;
    count: number;
  };
}
