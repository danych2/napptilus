import { createContext } from 'react'

export const CartContext = createContext({
  size: 0,
  incrementSize: () => {}
});