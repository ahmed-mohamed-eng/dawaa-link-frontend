import CartCountName from "@/constants/CartCountName";

export default function getCartNumber() {
  const prevValue = parseInt(sessionStorage.getItem(CartCountName) || "NaN");

  if (!prevValue) {
    return 0;
  }

  return prevValue;
}
