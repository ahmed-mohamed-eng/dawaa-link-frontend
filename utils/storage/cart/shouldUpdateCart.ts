import CartCountName from "@/constants/CartCountName";

// Should Update the value fetched from the back-end.
export default function shouldUpdateCart(current: number) {
  const prevValue = parseInt(sessionStorage.getItem(CartCountName) || "NaN");

  if (!prevValue) {
    return true;
  }

  return current !== prevValue;
}
