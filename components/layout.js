import { useState } from 'react'
import { CartContext } from 'utils/contexts';
import { AppShell, Header, ScrollArea } from '@mantine/core';
import HeaderContent from 'components/headerContent';

export default function Layout({ children }) {
  const [cartSize, setCartSize] = useState(0);

  return (
    <CartContext.Provider value={{incrementSize: () => {setCartSize(cartSize + 1)}}}>
      <AppShell
        fixed={true}
        padding="0"
        header={
          <Header height={100} p="md" fixed={true}>
            <HeaderContent cartSize={cartSize} />
          </Header>
        }
        sx={{
          height: '100%',
          '.mantine-AppShell-body': {
            height: '100%'
          }
        }}
      >
        {children}
      </AppShell>
    </CartContext.Provider>
  )
}