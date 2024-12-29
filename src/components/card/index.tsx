import { useState } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BuyCart,
  BuyContainer,
  BuySelection,
  BuySelectionButton,
  CardContainer,
  CardDescription,
  Tag,
} from './styles'

interface CardProps {
  imgSrc: string
  tag: string
  name: string
  description: string
  price: number
}

interface OrderProps {
  name: string
  quantity: number
  price: number
}

export function Card({ imgSrc, tag, name, description, price }: CardProps) {
  const [quantity, setQuantity] = useState(1)

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
    const order: OrderProps = {
      name,
      price,
      quantity,
    }

    console.log(order)
  }

  return (
    <CardContainer>
      <img src={imgSrc} alt={`A ${name} coffee cup`} />
      <Tag>{tag}</Tag>
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
