import styled from 'styled-components'

export const SuccessContainer = styled.main`
  flex: 1;
  width: 100%;
  max-width: 1120px;
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  gap: 28px;

  section {
    display: flex;
    flex-direction: column;
    gap: 4px;

    h1 {
      font-size: ${(props) => props.theme.fonts.types.title.sizes.L};
      line-height: 130%;
      color: ${(props) => props.theme.colors['brand-yellow-dark']};
      font-weight: 800;
    }

    p {
      font-size: ${(props) => props.theme.fonts.types.text.sizes.L};
      line-height: 130%;
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }
`

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 102px;

  img {
    max-width: 492px;
    width: 100%;
  }
`

export const OrderInfoContainer = styled.div`
  flex: 1;

  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(
      45deg,
      ${(props) => props.theme.colors['brand-yellow']},
      ${(props) => props.theme.colors['brand-purple']}
    );
    mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    mask-composite: exclude;
  }
`

export const OrderInfo = styled.div`
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    line-height: 130%;
  }

  span {
    line-height: 130%;
    font-weight: 700;
  }
`

export const IconContainer = styled.div`
  height: 32px;
  width: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.color};
`
