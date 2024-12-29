import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
`

export const BackgroundImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: auto;
  max-height: 544px;
  object-fit: cover;
  filter: blur(80px);
`
