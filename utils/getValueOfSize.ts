import Sizes from "@/types/Sizes.type";

export default function getValueOfSize<T>(size: Sizes, values: T[]) {
  switch (size) {
    case "2xs":
      return values[0];
    case "xxs":
      return values[1];
    case "xs":
      return values[2];
    case "sm":
      return values[3];
    case "lg":
      return values[4];
    case "xl":
      return values[5];
    case "2xl":
      return values[6];
    case "3xl":
      return values[7];

    default:
      return values[0];
  }
}
