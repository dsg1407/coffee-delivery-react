import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};

  display: flex;
  flex-direction: column;
  align-items: center;
`
