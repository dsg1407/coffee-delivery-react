import { MapPin } from 'phosphor-react'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 33px 0;

  a {
    margin: auto 0;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`

export const PlaceButton = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  padding: 8px;

  background-color: ${(props) => props.theme.colors['brand-purple-light']};
  color: ${(props) => props.theme.colors['brand-purple-dark']};
  border: 0;
  border-radius: 8px;

  font-size: ${(props) => props.theme.fonts.types.text.sizes.S};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`

export const PlaceIcon = styled(MapPin)`
  color: ${(props) => props.theme.colors['brand-purple']};
`
