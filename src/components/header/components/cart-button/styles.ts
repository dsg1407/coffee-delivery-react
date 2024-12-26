import styled from 'styled-components'

export const CartContainer = styled.a`
  height: 38px;
  max-height: 38px;
  width: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  background-color: ${(props) => props.theme.colors['brand-yellow-light']};
  color: ${(props) => props.theme.colors['brand-yellow-dark']};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(0.95);
  }

  position: relative;
`

export const ItemsCounter = styled.span`
  min-height: 20px;
  min-width: 20px;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors['brand-yellow-dark']};
  color: ${(props) => props.theme.colors.white};

  position: absolute;
  top: 0;
  right: 0;
  translate: 50% -50%;

  font-size: ${(props) => props.theme.fonts.types.text.sizes.S};
  line-height: 100%;
  font-weight: 700;
`
