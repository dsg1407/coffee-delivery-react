import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 100%;
  padding: 8px 4px;
  display: flex;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors['base-card']};
`

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;

    object-fit: cover;
  }
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.types.text.sizes.M};
    line-height: 130%;
  }
`

export const PriceDetails = styled.span`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fonts.types.text.sizes.M};
  font-weight: 700;
  line-height: 130%;
`

export const BuySelection = styled.div`
  display: flex;
  align-items: center;
  padding: 5.5px 8px;
  border-radius: 6px;
  gap: 4px;
  background-color: ${(props) => props.theme.colors['base-button']};

  span {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: ${(props) => props.theme.fonts.types.text.sizes.M};

    line-height: 130%;
    width: 20px;
    text-align: center;
  }
`

export const BuySelectionButton = styled.button`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors['brand-purple']};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  padding: 6.5px 8px;
  border-radius: 6px;
  gap: 4px;
  background-color: ${(props) => props.theme.colors['base-button']};
  color: ${(props) => props.theme.colors['brand-purple']};
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  span {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.types.text.sizes['BUTTON-M']};
    line-height: 160%;
    text-transform: uppercase;
  }
`
