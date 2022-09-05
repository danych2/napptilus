import '../styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MantineProvider } from '@mantine/core';
import NonSSRWrapper from 'utils/NonSSRWrapper'
import Layout from 'components/layout'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <NonSSRWrapper>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'light',
            fontFamily: 'monospace',
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </QueryClientProvider>
    </NonSSRWrapper>
  )
}

export default MyApp
