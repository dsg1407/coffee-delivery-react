import { Minus, Plus, Trash } from 'phosphor-react'
import {
  BuySelection,
  BuySelectionButton,
  CardContainer,
  PriceDetails,
  ProductContainer,
  ProductDetails,
  RemoveButton,
} from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../context/order'

interface CheckoutCardProps {
  id: string
  imgSrc: string
  name: string
  quantity: number
  price: number
}

export function CheckoutCard({
  id,
  imgSrc,
  name,
  quantity,
  price,
}: CheckoutCardProps) {
  const { changeOrderQuantity, removeOrder } = useContext(OrderContext)

  function handleChangeQuantity(operation: 'minus' | 'plus') {
    if (operation === 'minus' && quantity > 1) {
      changeOrderQuantity(id, quantity - 1)
    }
    if (operation === 'plus' && quantity < 99) {
      changeOrderQuantity(id, quantity + 1)
    }
  }

  function handleRemoveOrder() {
    removeOrder(id)
  }

  return (
    <CardContainer>
      <ProductContainer>
        <img src={imgSrc} alt={`${name}`} />
        <ProductDetails>
          <span>{name}</span>

          <div>
            <BuySelection>
              <BuySelectionButton onClick={() => handleChangeQuantity('minus')}>
                <Minus size={14} weight="bold" />
              </BuySelectionButton>
              <span>{quantity}</span>
              <BuySelectionButton onClick={() => handleChangeQuantity('plus')}>
                <Plus size={14} weight="bold" />
              </BuySelectionButton>
            </BuySelection>
            <RemoveButton onClick={handleRemoveOrder}>
              <Trash size={16} />
              <span>Remover</span>
            </RemoveButton>
          </div>
        </ProductDetails>
      </ProductContainer>

      <PriceDetails>
        {price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </PriceDetails>
    </CardContainer>
  )
}
