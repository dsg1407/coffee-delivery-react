import { useEffect, useState } from 'react'
import coffeeLogo from '../../assets/logo.svg'
import { CartButton } from './components/cart-button'
import { HeaderContainer, PlaceContainer, PlaceIcon } from './styles'
import { getUfName } from '../../utils/uf-name'

type DataProps = {
  city: string
  region: string
}

export function Header() {
  const [data, setData] = useState({} as DataProps)
  const [UF, setUF] = useState('')

  useEffect(() => {
    async function getUserIPInfo() {
      fetch('https://ipinfo.io/json')
        .then((response) => response.json())
        .then((data) => {
          setData(data)
        })
        .catch(() => {
          setData({
            city: 'São Paulo',
            region: 'São Paulo',
          })
        })
    }
    getUserIPInfo()
  }, [])

  useEffect(() => {
    if (data.region) {
      const UFName = getUfName(data.region)
      setUF(UFName)
    }
  }, [data])

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
        {data.city && (
          <PlaceContainer>
            <PlaceIcon size={22} weight="fill" />
            {data.city}
            {UF && `, ${UF}`}
          </PlaceContainer>
        )}
        <CartButton title="Checkout" href="/checkout" />
      </nav>
    </HeaderContainer>
  )
}
