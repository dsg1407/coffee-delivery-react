import styled from 'styled-components'

export const HeroContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 92px 0;

  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: center;
  gap: 3.5rem;
`
export const MessageContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: ${(props) => props.theme.fonts.types.title.sizes.XL};
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-title']};

    margin-bottom: 1rem;
  }

  p {
    font-size: ${(props) => props.theme.fonts.types.text.sizes.L};
    line-height: 130%;
    color: ${(props) => props.theme.colors['base-subtitle']};
    text-wrap: pretty;

    margin-bottom: 4.125rem;
  }
`
export const HeroImage = styled.img`
  width: 100%;
  max-width: 476px;
`

export const BulletsContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 20px;
`

export const BulletItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    flex: 1;
    text-align: left;
    line-height: 130%;
    font-size: ${(props) => props.theme.fonts.types.text.sizes.M};
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
