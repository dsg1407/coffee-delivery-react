import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import {
  CheckoutContainer,
  CoffeeSelection,
  CoffeeSelectionContainer,
  InformationHeader,
  InputContainer,
  OrderInformation,
  OrderInformationContainer,
  PaymentButton,
  Separator,
  Titles,
  PaymentContainer,
  ValuesContainer,
  OrderConfirmationButton,
} from './styles'
import { useTheme } from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { CheckoutCard } from '../../components/checkout-card'
import { OrderContext } from '../../context/order'

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('credito')
  const [totalItensValue, setTotalItensValue] = useState(0)
  const [deliveryValue, setDeliveryValue] = useState(0)

  const { colors } = useTheme()

  const { orders } = useContext(OrderContext)

  function handlePaymentMethod(newMethod: string) {
    setPaymentMethod(newMethod)
  }

  useEffect(() => {
    const valueTotal = orders.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0,
    )

    const deliveryTax =
      valueTotal === 0 ? 0 : valueTotal * 0.07 < 2.5 ? 2.5 : valueTotal * 0.07

    setTotalItensValue(valueTotal)
    setDeliveryValue(deliveryTax)
  }, [orders])

  return (
    <CheckoutContainer>
      <OrderInformationContainer>
        <Titles>Complete seu pedido</Titles>
        <OrderInformation>
          <InformationHeader>
            <MapPin size={22} color={colors['brand-yellow-dark']} />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </InformationHeader>
          <form>
            <div>
              <InputContainer size="fixed">
                <input type="text" placeholder="CEP" />
              </InputContainer>
            </div>
            <div>
              <InputContainer>
                <input type="text" placeholder="Rua" />
              </InputContainer>
            </div>
            <div>
              <InputContainer size="fixed">
                <input type="number" placeholder="Número" />
              </InputContainer>
              <InputContainer>
                <input type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </InputContainer>
            </div>
            <div>
              <InputContainer size="fixed">
                <input type="text" placeholder="Bairro" />
              </InputContainer>
              <InputContainer>
                <input type="text" placeholder="Cidade" />
              </InputContainer>
              <InputContainer size="small">
                <input type="text" placeholder="UF" />
              </InputContainer>
            </div>
          </form>
        </OrderInformation>
        <OrderInformation>
          <InformationHeader>
            <CurrencyDollar size={22} color={colors['brand-purple']} />
            <div>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </InformationHeader>
          <PaymentContainer>
            <PaymentButton
              active={paymentMethod === 'credito'}
              disabled={paymentMethod === 'credito'}
              onClick={() => handlePaymentMethod('credito')}
            >
              <CreditCard size={16} color={colors['brand-purple']} />
              Cartão de crédito
            </PaymentButton>
            <PaymentButton
              active={paymentMethod === 'debito'}
              disabled={paymentMethod === 'debito'}
              onClick={() => handlePaymentMethod('debito')}
            >
              <Bank size={16} color={colors['brand-purple']} />
              Cartão de débito
            </PaymentButton>
            <PaymentButton
              active={paymentMethod === 'dinheiro'}
              disabled={paymentMethod === 'dinheiro'}
              onClick={() => handlePaymentMethod('dinheiro')}
            >
              <Money size={16} color={colors['brand-purple']} />
              Dinheiro
            </PaymentButton>
          </PaymentContainer>
        </OrderInformation>
      </OrderInformationContainer>
      <CoffeeSelectionContainer>
        <Titles>Cafés selecionados</Titles>
        <CoffeeSelection>
          <section>
            {orders.length > 0 ? (
              orders.map((order, index) => (
                <>
                  <CheckoutCard
                    key={order.id}
                    id={order.id}
                    imgSrc={order.imgSrc}
                    name={order.name}
                    price={order.price}
                    quantity={order.quantity}
                  />
                  {/* biome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
                  <Separator key={index} />
                </>
              ))
            ) : (
              <>
                <span>Carrinho vazio</span>
                <Separator />
              </>
            )}
          </section>
          <ValuesContainer>
            <div>
              <p>Total de itens</p>
              <p>
                {totalItensValue.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
            <div>
              <p>Entrega</p>
              <p>
                {deliveryValue.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </p>
            </div>
            <div>
              <span>Total</span>
              <span>
                {(totalItensValue + deliveryValue).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </span>
            </div>
          </ValuesContainer>
          <OrderConfirmationButton>Confirmar pedido</OrderConfirmationButton>
        </CoffeeSelection>
      </CoffeeSelectionContainer>
    </CheckoutContainer>
  )
}
