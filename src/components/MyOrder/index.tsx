import { useCart } from "../../hooks/useCart"

import { ReactComponent as CartIcon } from "../../assets/shopping-cart.svg"
import { Container } from "./styled"

export function MyOrder(){
  const { cart } = useCart()

  return <Container to={'cart'}>
    <span>Meus Pedidos</span>
    <CartIcon />

    {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}

  </Container>
}
