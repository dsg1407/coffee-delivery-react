import { useTheme } from 'styled-components'
import heroImage from '../../assets/hero/hero-image.svg'
import { Background } from './background'

import {
  BulletItem,
  BulletsContainer,
  HeroContainer,
  HeroImage,
  IconContainer,
  MessageContainer,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Hero() {
  const theme = useTheme()
  return (
    <Background>
      <HeroContainer>
        <MessageContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <BulletsContainer>
            <BulletItem>
              <IconContainer color={theme.colors['brand-yellow-dark']}>
                <ShoppingCart size={16} weight="fill" />
              </IconContainer>{' '}
              <span>Compra simples e segura</span>
            </BulletItem>
            <BulletItem>
              <IconContainer color={theme.colors['base-text']}>
                <Package size={16} weight="fill" />
              </IconContainer>{' '}
              <span>Embalagem mantém o café intacto</span>
            </BulletItem>
          </BulletsContainer>

          <BulletsContainer>
            <BulletItem>
              <IconContainer color={theme.colors['brand-yellow']}>
                <Timer size={16} weight="fill" />
              </IconContainer>{' '}
              <span>Entrega rápida e rastreada</span>
            </BulletItem>
            <BulletItem>
              <IconContainer color={theme.colors['brand-purple']}>
                <Coffee size={16} weight="fill" />
              </IconContainer>{' '}
              <span>O café chega fresquinho até você</span>
            </BulletItem>
          </BulletsContainer>
        </MessageContainer>

        <HeroImage src={heroImage} alt="" />
      </HeroContainer>
    </Background>
  )
}
