import { useLocation } from 'react-router-dom'
import {
  IconContainer,
  MainContainer,
  OrderInfo,
  OrderInfoContainer,
  SuccessContainer,
} from './styles'

import illustrationImg from '../../../assets/success-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

type OrderLocationState = {
  orderCreated: {
    address: {
      addressCEP: string
      addressName: string
      addressNumber: string
      addressRegion: string
      addressComplement: string
      addressCity: string
      addressUF: string
    }
    deliveryTime: string
    paymentMethod: string
  }
}

export function Success() {
  const { colors } = useTheme()
  const location = useLocation()

  const { orderCreated } = location.state as OrderLocationState

  const { addressName, addressNumber, addressCity, addressRegion, addressUF } =
    orderCreated.address

  const paymentMethod =
    orderCreated.paymentMethod === 'credito'
      ? 'Cartão de Crédito'
      : orderCreated.paymentMethod === 'debito'
        ? 'Cartão de Débito'
        : 'Dinheiro'

  return (
    <SuccessContainer>
      <section>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </section>
      <MainContainer>
        <OrderInfoContainer>
          <OrderInfo>
            <IconContainer color={colors['brand-purple']}>
              <MapPin size={16} />
            </IconContainer>
            <p>
              Entrega em{' '}
              <span>
                {addressName}, {addressNumber}
              </span>
              <br />
              {addressRegion} - {addressCity}, {addressUF}
            </p>
          </OrderInfo>

          <OrderInfo>
            <IconContainer color={colors['brand-yellow']}>
              <Timer size={16} />
            </IconContainer>
            <p>
              Previsão de entrega <br />
              <span>{orderCreated.deliveryTime}</span>
            </p>
          </OrderInfo>
          <OrderInfo>
            <IconContainer color={colors['brand-yellow-dark']}>
              <CurrencyDollar size={16} />
            </IconContainer>
            <p>
              Pagamento na entrega <br />
              <span>{paymentMethod}</span>
            </p>
          </OrderInfo>
        </OrderInfoContainer>
        <img
          src={illustrationImg}
          alt="A motorcycle rider with some orders to delivery "
        />
      </MainContainer>
    </SuccessContainer>
  )
}
