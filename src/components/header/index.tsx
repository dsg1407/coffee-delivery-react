import coffeeLogo from '../../assets/logo.svg'
import { CartButton } from './components/cart-button'
import { HeaderContainer, PlaceButton, PlaceIcon } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img
          src={coffeeLogo}
          alt="A logo with a coffee illustration and a title that says Coffee Delivery"
          title="Coffee Delivery"
        />
      </a>
      <nav>
        <PlaceButton>
          <PlaceIcon size={22} weight="fill" />
          Porto Alegre, RS
        </PlaceButton>
        <CartButton title="Checkout" href="/checkout" />
      </nav>
    </HeaderContainer>
  )
}
