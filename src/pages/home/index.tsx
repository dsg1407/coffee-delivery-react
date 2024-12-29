import { Card } from '../../components/card'
import { Hero } from '../../components/hero'
import { Button, HomeContainer, HomeGridContainer, HomeHeader } from './styles'

export function Home() {
  return (
    <>
      <Hero />
      <HomeContainer>
        <HomeHeader>
          <h2>Nossos cafés</h2>
          <div>
            <Button active>Tradicional</Button>
            <Button>Especial</Button>
            <Button>Com leite</Button>
            <Button>Alcoólico</Button>
            <Button>Gelado</Button>
          </div>
        </HomeHeader>
        <HomeGridContainer>
          <Card
            imgSrc="/assets/coffees/americano.svg"
            tag="Tradicional"
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.9}
          />
        </HomeGridContainer>
      </HomeContainer>
    </>
  )
}
