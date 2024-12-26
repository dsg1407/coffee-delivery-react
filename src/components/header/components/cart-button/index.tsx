import { ShoppingCart } from 'phosphor-react'
import { CartContainer, ItemsCounter } from './styles'

type CartButtonProps = React.HTMLProps<HTMLAnchorElement> & {}

export function CartButton(props: CartButtonProps) {
  // TODO - Add cart context
  const cartTotalItems = 3

  return (
    <CartContainer {...props}>
      <ShoppingCart size={22} weight="fill" />
      {cartTotalItems > 0 && <ItemsCounter>{cartTotalItems}</ItemsCounter>}
    </CartContainer>
  )
}
