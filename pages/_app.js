import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NonSSRWrapper from 'utils/NonSSRWrapper'
import Layout from 'components/layout'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <NonSSRWrapper>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </NonSSRWrapper>
  )
}

export default MyApp
