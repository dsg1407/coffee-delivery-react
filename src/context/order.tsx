import { createContext, useEffect, useState } from 'react'

export interface Order {
  id: string
  name: string
  quantity: number
  price: number
}

interface OrderContextType {
  orders: Order[]
  addNewOrder: (newOrder: Order) => void
  changeOrderQuantity: (id: string, newQuantity: number) => void
  removeOrder: (id: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: React.ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orders, setOrders] = useState<Order[]>([])

  function addNewOrder(newOrder: Order) {
    setOrders((state) => [...state, newOrder])
  }

  function changeOrderQuantity(id: string, newQuantity: number) {
    const newOrderList = orders.map((order) => {
      if (order.id === id) {
        return {
          ...order,
          quantity: newQuantity,
        }
      }
      return order
    })

    setOrders(newOrderList)
  }

  function removeOrder(id: string) {
    const newOrderList = orders.filter((order) => order.id !== id)
    setOrders(newOrderList)
  }

  useEffect(() => {
    const storageStateAsJSON = localStorage.getItem(
      '@coffee-delivery-react@:orders-1.0.0',
    )
    if (storageStateAsJSON) {
      setOrders(JSON.parse(storageStateAsJSON))
    }
  }, [])

  useEffect(() => {
    const stateJSON = JSON.stringify(orders)
    localStorage.setItem('@coffee-delivery-react@:orders-1.0.0', stateJSON)
  }, [orders])

  return (
    <OrderContext.Provider
      value={{
        orders,
        addNewOrder,
        changeOrderQuantity,
        removeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
