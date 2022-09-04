import { useState } from 'react'
import { CartContext } from 'utils/contexts';
import Header from 'components/header';

export default function Layout({ children }) {
  const [cartSize, setCartSize] = useState(0);

  return (
    <CartContext.Provider value={{size: cartSize, incrementSize: () => {setCartSize(cartSize + 1)}}}>
      <header>
        <Header cartSize={cartSize} />
      </header>
      <main>{children}</main>
    </CartContext.Provider>
  )
}