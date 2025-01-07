import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './router'
import { OrderContextProvider } from './context/order'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <OrderContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </OrderContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
