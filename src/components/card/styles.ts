import { styled } from 'styled-components'

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  padding: 0 24px;

  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin-top: -20px;
    width: 120px;
    height: 120px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const Tag = styled.span`
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.colors['brand-yellow-light']};
  background-color: ${(props) => props.theme.colors['brand-yellow-light']};

  border-radius: 100px;

  color: ${(props) => props.theme.colors['brand-yellow-dark']};
  font-size: ${(props) => props.theme.fonts.types.text.sizes.TAG};
  font-weight: 700;
  line-height: 130%;

  text-transform: uppercase;

  margin: 12px 0 16px;
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  h3 {
    text-align: center;
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.types.title.sizes.S};
    font-weight: 700;
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme.colors['base-label']};
    font-size: ${(props) => props.theme.fonts.types.text.sizes.S};
    line-height: 130%;

    margin-bottom: 33px;
  }
`

export const BuyContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  font-size: ${(props) => props.theme.fonts.types.text.sizes.S};
  line-height: 130%;

  p {
    flex: 1;
    font-size: ${(props) => props.theme.fonts.types.title.sizes.M};
    font-family: 'Baloo 2', sans-serf;
    font-weight: 800;
    line-height: 130%;
    margin-left: 4px;
  }
`

export const BuySelection = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  gap: 4px;
  background-color: ${(props) => props.theme.colors['base-button']};
  margin-right: 8px;

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

  :hover {
    color: ${(props) => props.theme.colors['brand-purple-dark']};
  }
`

export const BuyCart = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  background-color: ${(props) => props.theme.colors['brand-purple-dark']};
  color: ${(props) => props.theme.colors['base-card']};
  border: none;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['brand-purple']};
  }
`
