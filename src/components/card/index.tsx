import { useContext, useState } from 'react'
import * as uuid from 'uuid'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BuyCart,
  BuyContainer,
  BuySelection,
  BuySelectionButton,
  CardContainer,
  CardDescription,
  Tag,
  TagsContainer,
} from './styles'
import { type Order, OrderContext } from '../../context/order'

interface CardProps {
  coffeeId: string
  imgSrc: string
  tags: string[]
  name: string
  description: string
  price: number
}

export function Card({
  coffeeId,
  imgSrc,
  tags,
  name,
  description,
  price,
}: CardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addNewOrder, orders, changeOrderQuantity } = useContext(OrderContext)

  function handleChangeQuantity(operation: 'minus' | 'plus') {
    setQuantity((state) => {
      if (operation === 'minus' && state > 1) {
        return state - 1
      }
      if (operation === 'plus' && state < 99) {
        return state + 1
      }
      return state
    })
  }

  function handleAddToCart() {
    const orderFiltered = orders.filter((order) => order.coffeeId === coffeeId)

    if (orderFiltered.length > 0) {
      changeOrderQuantity(
        orderFiltered[0].id,
        orderFiltered[0].quantity + quantity,
      )
    } else {
      const order: Order = {
        id: uuid.v4(),
        coffeeId,
        imgSrc,
        name,
        price,
        quantity,
      }

      addNewOrder(order)
    }
    setQuantity(1)
  }

  return (
    <CardContainer>
      <img src={imgSrc} alt={`A ${name} coffee cup`} />
      <TagsContainer>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>

      <CardDescription>
        <h3>{name}</h3>
        <p>{description}</p>
      </CardDescription>
      <BuyContainer>
        R$
        <p>
          {price.toLocaleString('pt-br', {
            style: 'decimal',
            minimumFractionDigits: 2,
          })}
        </p>
        <BuySelection>
          <BuySelectionButton onClick={() => handleChangeQuantity('minus')}>
            <Minus size={14} weight="bold" />
          </BuySelectionButton>
          <span>{quantity}</span>
          <BuySelectionButton onClick={() => handleChangeQuantity('plus')}>
            <Plus size={14} weight="bold" />
          </BuySelectionButton>
        </BuySelection>
        <BuyCart onClick={handleAddToCart}>
          <ShoppingCart size={22} weight="fill" />
        </BuyCart>
      </BuyContainer>
    </CardContainer>
  )
}
