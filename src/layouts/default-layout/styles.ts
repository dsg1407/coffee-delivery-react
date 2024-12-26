import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100dvh;
  max-width: 1120px;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
