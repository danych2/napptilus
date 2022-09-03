import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import NonSSRWrapper from 'utils/NonSSRWrapper'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <NonSSRWrapper>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </NonSSRWrapper>
  )
}

export default MyApp
