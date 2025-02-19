import { Route, Routes } from 'react-router'

import { DefaultLayout } from './layouts/default-layout'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'
import { Success } from './pages/order/success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/success/*" element={<Success />} />
      </Route>
    </Routes>
  )
}
