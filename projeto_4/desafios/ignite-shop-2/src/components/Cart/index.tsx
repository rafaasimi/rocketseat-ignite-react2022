import { Handbag } from "phosphor-react";
import { BadgeCounter, CartIconContainer } from "./styles";

export default function Cart() {
  return (
    <CartIconContainer>
      <Handbag size={24} />
      <BadgeCounter>
        <span>5</span>
      </BadgeCounter>
    </CartIconContainer>
  )
}