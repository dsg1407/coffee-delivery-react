import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 40px 0;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 32px;
`

export const Titles = styled.span`
  font-size: ${(props) => props.theme.fonts.types.title.sizes.XS};
  font-family: 'Baloo 2', sans-serf;
  font-weight: 700;
  line-height: 130%;

  margin-bottom: 3px;
`

export const OrderInformationContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CoffeeSelectionContainer = styled.div`
  flex: 1;
  max-width: 448px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const OrderInformation = styled.div`
  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    div {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
`

interface InputProps {
  size?: 'small' | 'fixed'
}

export const InputContainer = styled.div<InputProps>`
  flex: 1;

  padding: 12px;
  background-color: ${(props) => props.theme.colors['base-base-input']};
  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  gap: 4px;

  ${(props) =>
    props.size === 'fixed' &&
    css`
      max-width: 200px;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      max-width: 60px;
    `}

  input {
    width: 100%;
    font-size: ${(props) => props.theme.fonts.types.text.sizes.S};
    background-color: ${(props) => props.theme.colors['base-base-input']};
    border: none;

    line-height: 130%;
    color: ${(props) => props.theme.colors['base-text']};

    &:focus {
      box-shadow: none;
    }
  }

  span {
    font-style: italic;
    font-size: ${(props) => props.theme.fonts.types.text.sizes.XS};
    color: ${(props) => props.theme.colors['base-label']};
    line-height: 130%;
  }
`

export const Separator = styled.div`
  height: 1px;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors['base-button']};
  }
`

export const CoffeeSelection = styled.div`
  max-height: 591px;

  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  background-color: ${(props) => props.theme.colors['base-card']};
  border-radius: 6px 44px 6px 44px;

  section {
    display: flex;
    flex-direction: column;
    gap: 24px;

    max-height: 350px;
    overflow-y: auto;
  }
`

export const InformationHeader = styled.div`
  display: flex;

  gap: 8px;

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  span {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: ${(props) => props.theme.fonts.types.text.sizes.M};
    line-height: 130%;
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: ${(props) => props.theme.fonts.types.text.sizes.S};
    line-height: 130%;
  }
`

export const PaymentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`
export const PaymentButton = styled.button<{ active?: boolean }>`
  flex: 1;
  padding: 16px;
  display: flex;
  gap: 12px;
  align-items: center;

  color: ${(props) => props.theme.colors['base-text']};
  font-size: ${(props) => props.theme.fonts.types.text.sizes['BUTTON-M']};
  line-height: 130%;
  text-transform: uppercase;

  border: 1px solid ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-button']};
  cursor: pointer;

  transition: all 0.2sec;

  &:hover {
    filter: brightness(0.97);
  }

  &:focus {
    box-shadow: none;
  }

  &:disabled {
    cursor: not-allowed;
    &:hover {
      filter: brightness(1);
    }
  }

  ${(props) =>
    props.active &&
    css`
      border-color: ${(props) => props.theme.colors['brand-purple']};
      background-color: ${(props) => props.theme.colors['brand-purple-light']};
    `}
`
export const ValuesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: ${(props) => props.theme.fonts.types.text.sizes.S};
      line-height: 130%;
    }

    span {
      color: ${(props) => props.theme.colors['base-subtitle']};
      font-size: ${(props) => props.theme.fonts.types.text.sizes.L};
      font-weight: 700;
      line-height: 130%;
    }
  }
`
export const OrderConfirmationButton = styled.button`
  width: 100%;
  padding: 12px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors['brand-yellow']};
  font-size: ${(props) => props.theme.fonts.types.text.sizes['BUTTON-G']};
  line-height: 160%;
  text-align: center;

  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  font-weight: 700;

  cursor: pointer;
  transition: all 0.2sec;

  &:hover {
    filter: brightness(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.colors['brand-yellow-light']};
    &:hover {
      filter: brightness(1);
    }
  }
`
