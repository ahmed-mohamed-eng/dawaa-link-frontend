import Sizes from "@/types/Sizes.type";

import getValueOfSize from "./getValueOfSize";

export default function getFontSize(size: Sizes) {
  return getValueOfSize(size, [
    "0.75rem",
    "0.875rem",
    "1.125rem",
    "1.25rem",
    "1.5rem",
    "1.875rem",
  ]);
}
