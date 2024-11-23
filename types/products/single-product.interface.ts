import IPrice from "./Price.interface";

export default interface ISingleProduct {
  imageURL: string;
  name: string;
  url: string;
  price: IPrice;
  rating: {
    value: number;
    count: number;
  };
}
