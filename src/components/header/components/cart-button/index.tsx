import { ShoppingCart } from 'phosphor-react'
import { CartContainer, ItemsCounter } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/order'

type CartButtonProps = React.HTMLProps<HTMLAnchorElement> & {}

export function CartButton(props: CartButtonProps) {
  const { orders } = useContext(OrderContext)

  const totalQuantity = orders.reduce((acc, cur) => acc + cur.quantity, 0)

  const cartTotalItems = totalQuantity

  return (
    <CartContainer {...props}>
      <ShoppingCart size={22} weight="fill" />
      {cartTotalItems > 0 && <ItemsCounter>{cartTotalItems}</ItemsCounter>}
    </CartContainer>
  )
}
