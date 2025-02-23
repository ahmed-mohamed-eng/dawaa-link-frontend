import CartCountName from "@/constants/CartCountName";

export default function addCartNumber(amount: number) {
  sessionStorage.setItem(CartCountName, amount.toString());
}
