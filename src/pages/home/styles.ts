import { styled, css } from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1120px;

  padding: 32px 0;
`

export const HomeHeader = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.types.title.sizes.L};
    font-weight: 800;
    line-height: 130%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`

type ButtonProps = React.HTMLProps<ButtonProps> & {
  active?: boolean
}

export const Button = styled.button<ButtonProps>`
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.colors['brand-yellow']};
  border-radius: 100px;

  color: ${(props) => props.theme.colors['brand-yellow-dark']};
  background-color: ${(props) => props.theme.colors.background};
  font-size: ${(props) => props.theme.fonts.types.text.sizes.TAG};
  font-weight: 700;
  line-height: 130%;

  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.active &&
    css`
      background-color: ${(props) => props.theme.colors['brand-yellow-light']};
      border-color: ${(props) => props.theme.colors['brand-yellow-light']};
    `}

  &:hover {
    filter: brightness(1.05);
    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
    border-color: ${(props) => props.theme.colors['brand-yellow-light']};
  }
`

export const HomeGridContainer = styled.div`
  flex: 1;
  padding: 54px 0;

  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`
