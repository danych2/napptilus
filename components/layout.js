import { useState } from 'react'
import { CartContext } from 'utils/contexts';
import { AppShell, Header, ScrollArea } from '@mantine/core';
import HeaderContent from 'components/headerContent';

export default function Layout({ children }) {
  const [cartSize, setCartSize] = useState(0);

  return (
    <CartContext.Provider value={{size: cartSize, incrementSize: () => {setCartSize(cartSize + 1)}}}>
      <AppShell
        fixed={true}
        header={
          <Header height={100} p="md" fixed={true}>
            <HeaderContent cartSize={cartSize} />
          </Header>
        }
      >
        <ScrollArea
          type="always"
          offsetScrollbars
          sx={{
            '.mantine-ScrollArea-scrollbar[data-orientation="horizontal"]':{
              display: 'none',
              opacity: 0
            }
          }}
        >
          {children}
        </ScrollArea>
      </AppShell>
    </CartContext.Provider>
  )
}