import CartCountName from "@/constants/CartCountName";

export default function updateCartNumber(amount: number) {
  const prevValue = parseInt(sessionStorage.getItem(CartCountName) || "NaN");

  if (!prevValue) {
    sessionStorage.setItem(CartCountName, amount.toString());
    return;
  }

  sessionStorage.setItem(CartCountName, (amount + prevValue).toString());
}
