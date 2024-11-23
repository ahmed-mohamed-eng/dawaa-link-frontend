import Sizes from "@/types/Sizes.type";

export default function getValueOfSize<T>(size: Sizes, values: T[]) {
  switch (size) {
    case "xs":
      return values[0];
    case "sm":
      return values[1];
    case "lg":
      return values[2];
    case "xl":
      return values[3];
    case "2xl":
      return values[4];
    case "3xl":
      return values[5];

    default:
      return values[0];
  }
}
