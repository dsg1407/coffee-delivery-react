import { Card } from '../../components/card'
import { Hero } from '../../components/hero'
import { Button, HomeContainer, HomeGridContainer, HomeHeader } from './styles'

import coffees from '../../api/coffees.json'
import { useEffect, useState } from 'react'

export function Home() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [filteredCoffees, setFilteredCoffees] = useState(coffees.types)

  const coffeesTags = coffees.tags

  function handleSelectTag(tagName: string) {
    if (selectedTag === tagName) {
      return setSelectedTag(null)
    }
    setSelectedTag(tagName)
  }

  useEffect(() => {
    if (selectedTag) {
      const coffeesList = coffees.types.map((type) => {
        const coffee = type.tag.filter((coffeeTag) => coffeeTag === selectedTag)
        if (coffee.length > 0) {
          return type
        }
        return null
      })
      const filteredList = coffeesList.filter((coffee) => coffee !== null)
      setFilteredCoffees(filteredList)
    } else {
      setFilteredCoffees(coffees.types)
    }
  }, [selectedTag])

  return (
    <>
      <Hero />
      <HomeContainer>
        <HomeHeader>
          <h2>Nossos cafés</h2>
          <div>
            {coffeesTags.map((tag) => (
              <Button
                active={selectedTag === tag}
                key={tag}
                value={tag}
                onClick={() => handleSelectTag(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </HomeHeader>
        <HomeGridContainer>
          {filteredCoffees.map((coffee) => (
            <Card
              key={coffee.id}
              imgSrc={coffee.imgSrc}
              tags={coffee.tag}
              name={coffee.name}
              description={coffee.description}
              price={coffee.price}
            />
          ))}
        </HomeGridContainer>
      </HomeContainer>
    </>
  )
}
