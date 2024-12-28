import heroBackground from '../../../assets/hero/hero-background.svg'

import { BackgroundContainer, BackgroundImg } from './styles'

interface Props {
  children: React.ReactNode
}

export function Background({ children }: Props) {
  return (
    <BackgroundContainer>
      <BackgroundImg src={heroBackground} alt="" />
      {children}
    </BackgroundContainer>
  )
}
